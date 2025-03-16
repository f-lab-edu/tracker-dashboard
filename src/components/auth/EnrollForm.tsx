import { API_BASE_URL } from '@/config/api';
import axios from 'axios';
import { Path, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthButton } from './ui/authButton';
import { AuthInputValid } from './ui/AuthInputValid';

interface EnrollFormType {
  email: string;
  password: string;
  checkPassword: string;
  domain: string;
}

export const EnrollForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<EnrollFormType>();
  const navigate = useNavigate();
  const handleEnrollSubmit = async (data: EnrollFormType) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/dashboard/enrollClient`,
        data
      );
      navigate('/login');
    } catch (err) {
      console.error('가입요청 실패', err);
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert('회원가입 오류');
      }
    }
  };
  const enrollValidationInputs = [
    {
      label: 'Email',
      name: 'email',
      placeholder: '이메일을 입력해주세요',
      validation: {
        required: { value: true, message: '이메일은 필수입니다' },
        pattern: {
          value:
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: '이메일 형식으로 입력해주세요',
        },
      },
    },
    {
      label: 'Password',
      name: 'password',
      placeholder: '비밀번호를 입력해주세요',
      inputType: 'password',
      validation: {
        required: { value: true, message: '비밀번호는 필수입니다' },
        minLength: {
          value: 8,
          message: '비밀번호는 최소 8자리입니다',
        },
      },
    },
    {
      label: 'Password Check',
      name: 'password',
      placeholder: '비밀번호를 입력해주세요',
      inputType: 'password',
      validation: {
        required: { value: true, message: '비밀번호는 필수입니다' },
        minLength: {
          value: 8,
          message: '비밀번호는 최소 8자리입니다',
        },
        validate: {
          checkPassword: (val: string) => {
            if (getValues('password') !== val) {
              return '비밀번호가 일치하지 않습니다';
            }
          },
        },
      },
    },
    {
      label: 'Domain',
      name: 'domain',
      placeholder: '도메인을 입력해주세요',
      validation: {
        required: { value: true, message: '도메인은 필수입니다' },
        pattern: {
          value:
            /^(https?:\/\/)?([a-zA-Z0-9-]{1,63}\.)*[a-zA-Z0-9-]{1,63}(:\d+)?$/,
          message: '순수한 도메인 형식으로 입력해주세요',
        },
      },
    },
  ];

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit(handleEnrollSubmit)} className="h-full">
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold text-center"> Enroll</h2>
          {enrollValidationInputs.map(
            ({ label, name, placeholder, validation, inputType }) => (
              <AuthInputValid
                key={name}
                label={label}
                name={name as Path<EnrollFormType>}
                placeholder={placeholder}
                validation={validation}
                register={register}
                errors={errors}
                inputType={inputType}
              />
            )
          )}
          <AuthButton
            label="Enroll"
            buttonType="submit"
            buttonClassName="bg-blue-500 w-full"
          />
        </div>
      </form>
    </div>
  );
};
