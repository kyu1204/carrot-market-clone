"use server";

import { z } from "zod";
import fs from "fs/promises";
import db from "@/lib/db";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const productSchema = z.object({
  title: z.string(),
  price: z.coerce.number(),
  description: z.string(),
  photo: z.string(),
});

export async function uploadProduct(_: any, formData: FormData) {
  const data = {
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
    photo: formData.get("photo"),
  };

  if (data.photo instanceof File) {
    const photoData = await data.photo.arrayBuffer();
    await fs.appendFile(`./public/${data.photo.name}`, Buffer.from(photoData));
    data.photo = `/${data.photo.name}`;
  }

  const result = productSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const product = await db.product.create({
        data: {
          title: result.data.title,
          price: result.data.price,
          description: result.data.description,
          photo: result.data.photo,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
        select: {
          id: true,
        },
      });

      return redirect(`/products/${product.id}`);
    }
  }
}
