import { useFormikContext } from "formik";
import * as React from "react";
import FormError from "../FormError";

const numberOfBox = 5;

const VerificationField = ({ name, label }: FormField) => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  } = useFormikContext();

  React.useEffect(() => {}, []);
  return (
    <div className="w-full">
      {label && <p className="text-[12px] text-slate">{label}</p>}
      <div className="flex w-full">
        {[...new Array(numberOfBox)].map((_, idx) => (
          <input
            key={`box-input-${idx}`}
            type="text"
            maxLength={1}
            autoFocus={values[name].length === idx}
            value={values[name][idx] ? values[name][idx] : ""}
            onChange={(e: any) => {
              if (e.target.value) {
                e.target.nextElementSibling?.focus();
                setFieldValue(name, `${values[name]}${e.target.value}`);
              } else {
                e.target.previousSibling?.focus();
                setFieldValue(name, `${values[name].slice(0, idx)}`);
              }
            }}
            className="h-[48px] w-[48px] mr-[16px] rounded outline-none border-[1px] border-[#DFE5EF] text-center text-[16px]"
          />
        ))}
      </div>
      <FormError error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default VerificationField;
