import { API_BASE_URL } from '@/config/api';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { UseFormGetValues } from 'react-hook-form';
import { FormTemplate } from './FormTemplate';
interface EnrollFormType {
  email: string;
  password: string;
  checkPassword: string;
  domain: string;
}

export const EnrollForm = () => {
  const navigate = useNavigate();
  const handleEnrollSubmit = async (data: EnrollFormType) => {
    try {
      await axios.post(`${API_BASE_URL}/dashboard/enrollClient`, data);
      navigate({ to: '/login' });
    } catch (err) {
      console.error('가입요청 실패', err);
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
      validation: (getValues: UseFormGetValues<EnrollFormType>) => ({
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
            return true;
          },
        },
      }),
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
    <FormTemplate<EnrollFormType>
      title="LOGIN"
      inputs={enrollValidationInputs}
      onSubmit={handleEnrollSubmit}
      submitLabel="회원가입"
    />
  );
};
