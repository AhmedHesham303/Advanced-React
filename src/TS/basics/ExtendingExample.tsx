import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`btn-${variant}`}>
      {children}
    </button>
  );
}
