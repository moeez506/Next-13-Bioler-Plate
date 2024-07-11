import * as React from "react";
import { useFormikContext } from "formik";

const Button = ({
  children,
  className = "",
  type = ButtonType.default,
  color = COLORS.primary,
  onClick,
}: Button) => {
  const { handleSubmit } = useFormikContext() || {};

  const handleClick = (e: any) => {
    if (type === ButtonType.submit) {
      return handleSubmit();
    }
    onClick && onClick(e);
  };

  const getClasses = () => {
    let classes =
      "text-lightBlack font-semibold rounded-3xl flex items-center justify-center";
    if (color === COLORS.primary)
      classes += " bg-primary text-[#ffffff] hover:bg-primary-hover";
    else if (color === COLORS.secondary)
      classes += " bg-secondary hover:bg-secondary-hover";
    else if (color === COLORS.gray)
      classes += " bg-gray hover:bg-secondary-hover";
    else if (color === COLORS.default)
      classes += " bg-default hover:bg-secondary-hover";
    else classes += ` ${color} hover:bg-primary-hover`;
    if (!className.includes("h-")) classes += " h-[50px]";
    if (!className.includes("w-")) classes += " w-[368px] ";
    return `${classes} ${className}`;
  };

  return (
    <button className={getClasses()} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
