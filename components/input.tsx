import { InputHTMLAttributes } from "react";

interface IInputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  name,
  errors = [],
  ...props
}: IInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="h-10 w-full rounded-md border-none bg-transparent ring-2 ring-neutral-200 transition-shadow placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-orange-500"
        {...props}
      />
      {errors.map((error, index) => (
        <span key={index} className="font-medium text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
