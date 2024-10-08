"use client";
import ComboBox from "@/components/Common/ComboBox";

const CustomSelect = <T,>({
  label,
  value,
  onChange,
  data = [],
  name,
  children,
  disabled,
}: {
  label: string;
  value?: string;
  onChange?: (currentValue: T, name?: string) => void;
  name?: string;
  data?: { value: string; label: string }[];
  children?: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <div className=" flex gap-4 items-center">
      <div className=" bg-white pb-2 w-full pl-4 pr-2 shadow-[0px_0px_2px] shadow-grayscale-900  rounded-md">
        <span className=" text-[10px] font-semibold text-grayscale-900 opacity-90 ">
          {label}
        </span>
        <ComboBox
          label={label}
          data={data}
          selectedValue={value}
          onChange={(e: string, name?: string) => {
            if (onChange) {
              if (name) {
                onChange(e as T, name);
              } else {
                onChange(e as T);
              }
            }
          }}
          name={name}
          disabled={disabled}
          className=" bg-transparent shadow-none"
        />
      </div>
      {children}
    </div>
  );
};

export default CustomSelect;
