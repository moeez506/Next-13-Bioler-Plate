import * as React from "react";

const AppCheckbox = ({
  name,
  onBlur,
  onChange,
  checked,
  inputClasses,
  boxClasses,
}: Checkbox) => {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
        type="checkbox"
        className={`w-[24px] h-[24px] rounded absolute accent-secondary cursor-pointer ${
          !checked ? "opacity-0" : ""
        } outline-0 border-[#DFE5EF] ${inputClasses}`}
      />
      <div
        className={`w-[24px] h-[24px] border-[1px] border-[#DFE5EF] rounded ${boxClasses}`}
      />
    </div>
  );
};

export default AppCheckbox;
