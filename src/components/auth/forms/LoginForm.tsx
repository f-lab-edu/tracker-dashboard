import { API_BASE_URL } from '@/config/api';
import { authState } from '@/store/authState';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { Path, SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { AuthButton } from '../components/AuthButton';
import { AuthInputValid } from '../components/AuthInputValid';

interface LoginFromType {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFromType>();
  const navigate = useNavigate();
  const setUser = useSetRecoilState(authState);
  const handleLoginSubmit: SubmitHandler<LoginFromType> = async (data) => {
    try {
      await axios.post(`${API_BASE_URL}/dashboard/loginClient`, data, {
        withCredentials: true,
      });
      await getClientSession();
      navigate({ to: '/' });
    } catch (err) {
      console.error('요청 실패', err);
    }
  };
  const moveToEnroll = () => {
    navigate({ to: '/enroll' });
  };

  const getClientSession = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/dashboard/sessionClient`,
        { withCredentials: true }
      );
      setUser(response.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  const loginValidationInputs = [
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
  ];

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit(handleLoginSubmit)} className="h-full">
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold text-center"> Login</h2>
          {loginValidationInputs.map(
            ({ label, name, placeholder, validation, inputType }) => (
              <AuthInputValid
                key={name}
                label={label}
                name={name as Path<LoginFromType>}
                placeholder={placeholder}
                validation={validation}
                register={register}
                errors={errors}
                inputType={inputType}
              />
            )
          )}
          <AuthButton
            label="Login"
            buttonType="submit"
            buttonClassName="w-full bg-blue-500 "
          />
          <AuthButton
            label="Enroll"
            buttonType="button"
            onclick={moveToEnroll}
            buttonClassName="w-full"
          />
        </div>
      </form>
    </div>
  );
};
