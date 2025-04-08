import {
  FieldValues,
  Path,
  RegisterOptions,
  useForm,
  UseFormGetValues,
} from 'react-hook-form';
import { AuthButton } from '../AuthButton';
import { AuthInputValid } from '../AuthInputValid';

interface FormTemplateProps<T extends FieldValues> {
  title: string;
  inputs: {
    label: string;
    name: string;
    placeholder: string;
    inputType?: string;
    validation:
      | RegisterOptions
      | ((getValues: UseFormGetValues<T>) => RegisterOptions);
  }[];
  onSubmit: (data: T) => void;
  submitLabel: string;
  extraButton?: { label: string; onClick: () => void };
}

export const FormTemplate = <T extends FieldValues>({
  title,
  inputs,
  onSubmit,
  submitLabel,
  extraButton,
}: FormTemplateProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<T>();
  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold text-center"> {title}</h2>
          {inputs.map(
            ({ label, name, placeholder, validation, inputType }, index) => {
              const finalValidation =
                typeof validation === 'function'
                  ? validation(getValues)
                  : validation;

              return (
                <AuthInputValid
                  key={`${name}-${index}`}
                  label={label}
                  name={name as Path<T>}
                  placeholder={placeholder}
                  validation={finalValidation}
                  register={register}
                  errors={errors}
                  inputType={inputType}
                />
              );
            }
          )}
          <AuthButton
            label={submitLabel}
            buttonType="submit"
            buttonClassName="w-full bg-blue-500 "
          />
          {extraButton && (
            <AuthButton
              label={extraButton.label}
              buttonType="button"
              onclick={extraButton.onClick}
              buttonClassName="w-full"
            />
          )}
        </div>
      </form>
    </div>
  );
};
