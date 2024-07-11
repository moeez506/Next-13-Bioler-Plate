import * as React from "react";
import { useFormikContext } from "formik";
import FormError from "../FormError";
import AppCheckbox from "../AppCheckbox";

const Checkbox = ({ name, label }: Omit<FormField, "placeholder">) => {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext();

  return (
    <div>
      <div className="flex items-center">
        <AppCheckbox
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          checked={values[name]}
        />
        <label
          onClick={() => setFieldValue(name, !values[name])}
          className="font-bold text-primary text-[14px] ml-2 cursor-pointer"
        >
          {label}
        </label>
      </div>
      <FormError error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default Checkbox;
