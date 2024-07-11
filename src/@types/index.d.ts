enum ButtonType {
  submit = "submit",
  default = "default",
}

enum COLORS {
  primary = "primary",
  secondary = "secondary",
  lightBlack = "lightBlack",
  gray = "gray",
  default = "default",
}

interface Button {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  width?: string;
  height?: string;
  color?: COLORS | string;
  onClick?: (e?: any) => void;
}

interface TextButton extends Omit<Button, "children"> {
  title: string;
  textFont?: "bold" | "semibold" | "normal" | "medium";
}
