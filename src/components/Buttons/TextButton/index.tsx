import * as React from "react";

const TextButton = ({
  title,
  className = "",
  width = "",
  color = COLORS.primary,
  textFont = "bold",
  onClick,
}: TextButton) => {
  const getClasses = () => {
    let classes =
      "flex h-[20px] items-center justify-center hover:text-danger cursor-pointer";
    if (color === COLORS.lightBlack) classes += " text-lightBlack";
    else if (color === COLORS.secondary) classes += " text-secondary";
    else if (color === COLORS.primary) classes += " text-primary";
    else classes += ` text-[${color}]`;
    if (width) classes += ` w-${width}`;
    return `${className} ${classes}`;
  };

  const getTextClasses = () => {
    let classes = "font-neue";
    if (textFont === "bold") return `${classes} font-bold`;
    if (textFont === "semibold") return `${classes}  font-semibold`;
    if (textFont === "medium") return `${classes}  font-medium`;
    return `${classes}  font-normal`;
  };

  return (
    <div className={getClasses()} onClick={onClick}>
      <h6 className={getTextClasses()}>{title}</h6>
    </div>
  );
};

export default TextButton;
