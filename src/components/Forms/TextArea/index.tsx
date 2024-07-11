import * as React from "react";
import { useFormikContext } from "formik";
import FormError from "../FormError";

const TextArea = ({
  name,
  label,
  placeholder,
  className = "",
  numberOfRow = 3,
}: TextArea) => {
  const { values, errors, touched, handleBlur, handleChange } =
    useFormikContext();

  return (
    <div className={`relative w-full ${className}`}>
      {label && <p className="text-[12px] text-slate">{label}</p>}
      <textarea
        rows={numberOfRow}
        name={name}
        value={values[name] || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="min-h-[150px] rounded outline-none w-full border-[1px] border-[#DFE5EF] p-5 rounded-3xl"
      />
      <FormError error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default TextArea;
