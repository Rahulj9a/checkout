import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
children: React.ReactNode
disabled?:boolean
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
children,
disabled,
  className,
}) => {
  return (
    
    <button
      onClick={onClick}
      className={`rounded-md flex items-center justify-center bg-white border shadow-md p-2 hover:shadow-xl transition  ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;