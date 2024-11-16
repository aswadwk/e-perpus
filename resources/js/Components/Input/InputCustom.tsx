import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input as InputUi } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function InputCustom({
  label,
  type,
  placeholder,
  value,
  error,
  isDisabled,
  id,
  onChange,
  tabIndex,
  isRequired,
}: Readonly<{
  label?: string;
  type: string;
  placeholder: string;
  value?: string;
  error: string | undefined | any;
  isDisabled?: boolean;
  id?: string;
  onChange: (e: any) => void;
  tabIndex?: number;
  isRequired?: boolean;
}>) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <div className="relative grid items-center w-full max-w-full gap-2.5">
        {label && (
          <Label htmlFor={id}>
            {label}
            <span className="text-xs text-red-500"> * Wajib diisi</span>
          </Label>
        )}
        <InputUi
          type={isShowPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          tabIndex={tabIndex}
        />
        {type === "password" && (
          <Button
            variant="link"
            className="absolute -translate-y-1/2 right-1 top-1/2"
            onClick={() => setIsShowPassword(!isShowPassword)}
            type="button"
            tabIndex={-1}
          >
            {isShowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </Button>
        )}
      </div>
      <span className="text-xs text-red-500">{error}</span>
    </>
  );
}
