interface ButtonProps {
  label: string;
  onclick?: () => void;
  buttonType?: 'submit' | 'button';
  buttonClassName: string;
}

export const AuthButton = ({
  label,
  onclick,
  buttonType,
  buttonClassName,
}: ButtonProps) => {
  return (
    <button type={buttonType} onClick={onclick} className={buttonClassName}>
      {label}
    </button>
  );
};
