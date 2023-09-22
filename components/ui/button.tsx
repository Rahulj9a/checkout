import { MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
children: React.ReactNode
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
children,
  className,
}) => {
  return (
    
    <button
      onClick={onClick}
      className={`rounded-md flex items-center justify-center bg-white border shadow-md p-2 hover:shadow-xl transition ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;