"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { uploadProduct } from "./actions";
import { z } from "zod";

const fileSchema = z.object({
  type: z.string().refine((value) => value.includes("image"), {
    message: "이미지 파일만 업로드 가능합니다.",
  }),
  size: z.number().max(1024 * 1024 * 2, {
    message: "이미지 파일은 2MB 이하로 업로드 가능합니다.",
  }),
});

export default function AddProduct() {
  const [preview, setPreview] = useState("");

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { files } } = event;
    console.log(files)
    if (!files || files.length == 0) {
      setPreview("");
      return;
    }

    const file = files[0];

    const result = fileSchema.safeParse(file);
    if (!result.success) {
      alert(result.error.flatten().fieldErrors.type || result.error.flatten().fieldErrors.size);
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  return (
    <div>
      <form action={uploadProduct} className="flex flex-col gap-5 p-5">
        <label htmlFor="photo" className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (<><PhotoIcon className="size-20" />
            <div className="text-neutral-400 text-sm">
              사진을 추가해주세요.
            </div></>) : null}
        </label>
        <input onChange={onImageChange} type='file' id='photo' name='photo' className="hidden" />
        <Input name="title" required placeholder="제목" type="text" />
        <Input name="price" required placeholder="가격" type="number" />
        <Input name="description" required placeholder="자세한 설명" type="text" />
        <Button text="작성 완료" />
      </form>
    </div>
  );
}