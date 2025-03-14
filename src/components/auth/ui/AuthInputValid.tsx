import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

interface AuthInputValidProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  placeholder: string;
  validation: object;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  inputType?: string;
}

export const AuthInputValid = <T extends FieldValues>({
  label,
  name,
  placeholder,
  validation,
  register,
  errors,
  inputType,
}: AuthInputValidProps<T>) => {
  return (
    <>
      <div className="flex items-center gap-2 w-full ">
        <label className="w-[80px] text-sm">{label}</label>
        <input
          type={inputType}
          {...register(name, validation)}
          className="w-full"
          placeholder={placeholder}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm">{String(errors[name].message)}</p>
      )}
    </>
  );
};
