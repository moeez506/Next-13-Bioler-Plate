import * as React from "react";

const FormError = ({ error, visible }: FormError) => {
  if (!error || !visible) return null;
  return (
    <div className="w-full mt-[3px]">
      <p className="text-[11px] text-rose-500">{error}</p>
    </div>
  );
};

export default FormError;
