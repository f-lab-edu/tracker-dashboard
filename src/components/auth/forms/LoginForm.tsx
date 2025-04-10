import { API_BASE_URL } from '@/config/api';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { SubmitHandler } from 'react-hook-form';
import { FormTemplate } from './FormTemplate';

interface LoginFormType {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const handleLoginSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/dashboard/loginClient`, data, {
        withCredentials: true,
      });
      navigate({ to: '/' });
      const sessionData = response.data.sessionData
      queryClient.setQueryData(['userSession'], sessionData)
    } catch (err) {
      console.error('요청 실패', err);
    }
  };
  const moveToEnroll = () => {
    navigate({ to: '/enroll' });
  };

  const loginValidationInputs = [
    {
      label: 'Email',
      name: 'email',
      placeholder: '이메일을 입력해주세요',
      autocomplete: 'email',
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
      autocomplete: 'current-password',
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
    <FormTemplate<LoginFormType>
      title="LOGIN"
      inputs={loginValidationInputs}
      onSubmit={handleLoginSubmit}
      submitLabel="로그인"
      extraButton={{ label: '회원가입', onClick: moveToEnroll }}
    />
  );
};
