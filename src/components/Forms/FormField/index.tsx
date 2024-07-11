import * as React from "react";
import { useFormikContext } from "formik";
import FormError from "../FormError";

const FormField = ({
  name,
  label,
  placeholder,
  className = "",
  type = "text",
}: FormField) => {
  const [showPass, setShowPass] = React.useState(false);
  const { values, errors, touched, handleBlur, handleChange } =
    useFormikContext();

  return (
    <div className={`relative w-full ${className}`}>
      {label && <p className="text-[12px] text-slate">{label}</p>}
      <input
        name={name}
        value={values[name] || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="h-[48px] rounded outline-none w-full border-[1px] border-[#DFE5EF] px-5 rounded-3xl"
        type={showPass ? "text" : type}
      />

      <FormError error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormField;
