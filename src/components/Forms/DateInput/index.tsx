import * as React from "react";

const DateInput = () => {
  return (
    <div className="flex h-[64px] w-full shadow shadow-md shadow-zinc-200 px-[27px] items-center rounded bg-white">
      <div className="flex w-[80%] items-center">
        <svg
          className="mr-[19px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
            stroke="#0B41A8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 2V6"
            stroke="#0B41A8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 2V6"
            stroke="#0B41A8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 10H21"
            stroke="#0B41A8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-[16px] text-gray">Ends before</p>
      </div>
      <div className="w-[20%] flex justify-end">
        <svg
          className="cursor-pointer"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.64453 11.2891C8.72689 11.2891 11.2891 8.73242 11.2891 5.64453C11.2891 2.56217 8.72135 0 5.639 0C2.55111 0 0 2.56217 0 5.64453C0 8.73242 2.55664 11.2891 5.64453 11.2891ZM3.65788 8.10156C3.39779 8.10156 3.1875 7.89128 3.1875 7.63119C3.1875 7.50391 3.24284 7.39323 3.33138 7.31022L4.98047 5.65007L3.33138 3.98991C3.24284 3.91244 3.1875 3.79622 3.1875 3.66895C3.1875 3.41439 3.39779 3.20964 3.65788 3.20964C3.78516 3.20964 3.89583 3.25944 3.97884 3.34798L5.639 5.0026L7.31022 3.34245C7.4043 3.24284 7.50391 3.19857 7.62565 3.19857C7.88574 3.19857 8.09603 3.40885 8.09603 3.66341C8.09603 3.79069 8.05176 3.89583 7.95768 3.98438L6.29753 5.65007L7.95215 7.29915C8.03516 7.3877 8.0905 7.49837 8.0905 7.63119C8.0905 7.89128 7.88021 8.10156 7.62012 8.10156C7.4873 8.10156 7.37663 8.04622 7.29362 7.96322L5.639 6.30306L3.98991 7.96322C3.9069 8.05176 3.78516 8.10156 3.65788 8.10156Z"
            fill="#0B41A8"
          />
        </svg>
      </div>
    </div>
  );
};

export default DateInput;
