import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className={`rounded-full flex gap-1 font-semibold px-7 py-3 shadow-lg bg-slate-100 hover:bg-emerald-500`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
