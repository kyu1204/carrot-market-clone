"use server";

import twilio from "twilio";
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";
import crypto from "crypto";
import db from "@/lib/db";
import { signIn } from "@/lib/session";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone format",
  );

const existToken = async (token: number) => {
  const exist = await db.sMSToken.findUnique({
    where: {
      token,
    },
    select: {
      id: true,
    },
  });

  return Boolean(exist);
};
const tokenSchema = z.coerce
  .number()
  .min(100000)
  .max(999999)
  .refine(existToken, "This token is not exists");

interface IsmsLoginState {
  token: boolean;
  phone?: string;
}

async function getToken() {
  const token = crypto.randomInt(100000, 999999);
  const exist = await db.sMSToken.findUnique({
    where: { token },
    select: {
      id: true,
    },
  });

  if (exist) {
    return getToken();
  } else {
    return token;
  }
}

export async function smsLogin(prevState: IsmsLoginState, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      await db.sMSToken.deleteMany({
        where: {
          user: {
            phone: result.data,
          },
        },
      });
      const token = await getToken();
      await db.sMSToken.create({
        data: {
          token,
          user: {
            connectOrCreate: {
              where: {
                phone: result.data,
              },
              create: {
                username: crypto.randomBytes(10).toString("hex"),
                phone: result.data,
              },
            },
          },
        },
      });
      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN,
      );
      await client.messages.create({
        body: `Your karrot verification code is: ${token}`,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: process.env.TWHILO_MY_PHONE_NUMBER!,
      });
      return {
        token: true,
        phone: result.data,
      };
    }
  } else {
    const tokenResult = await tokenSchema.spa(token);
    const phoneResult = await phoneSchema.safeParse(prevState.phone);
    if (!tokenResult.success) {
      return {
        ...prevState,
        error: tokenResult.error.flatten(),
      };
    } else {
      const token = await db.sMSToken.findUnique({
        where: {
          token: tokenResult.data,
          user: {
            phone: phoneResult.data,
          },
        },
        select: {
          id: true,
          userId: true,
        },
      });

      if (!token) {
        return {
          ...prevState,
          error: {
            formErrors: ["This token is not exists"],
          },
        };
      }

      await signIn(token!.userId);
      await db.sMSToken.delete({
        where: {
          id: token!.id,
        },
      });
      redirect("/profile");
    }
  }
}
