import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  name,
  ...props
}) => {
  return (
    <button
      name={name}
      className={`px-4 py-2 font-semibold rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
