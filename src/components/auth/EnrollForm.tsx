import { API_BASE_URL } from '@/config/config';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
      console.log(data, 'data');
      const response = await axios.post(
        `${API_BASE_URL}/dashboard/enrollClient`,
        data
      );
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (err) {
      console.error('가입요청 실패', err);
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert('회원가입 오류');
      }
    }
  };

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit(handleEnrollSubmit)} className="h-full">
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold text-center"> Enroll</h2>
          <div className="flex items-center gap-2 w-full ">
            <label className="w-[80px] text-sm">Email</label>
            <input
              {...register('email', {
                required: { value: true, message: '이메일은 필수입니다 ' },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: '이메일 형식으로 입력해주세요',
                },
              })}
              className="w-full"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
          <div className="flex items-center gap-2 w-full">
            <label className="w-[80px] text-sm">Password</label>
            <input
              type="password"
              {...register('password', {
                required: { value: true, message: '비밀번호는 필수입니다' },
                minLength: {
                  value: 8,
                  message: '비밀번호는 최소 8자리입니다 ',
                },
              })}
              className="w-full"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
          <div className="flex items-center gap-2 w-full">
            <label className="w-[80px] text-sm">Confirm Password</label>
            <input
              type="password"
              {...register('checkPassword', {
                required: {
                  value: true,
                  message: '비밀번호 확인은 필수입니다',
                },
                validate: {
                  checkPassword: (val) => {
                    if (getValues('password') !== val) {
                      return '비밀 번호가 일치하지 않습니다';
                    }
                  },
                },
              })}
              className="w-full"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <p className="text-red-500 text-sm">
            {errors.checkPassword?.message}
          </p>
          <div className="flex items-center gap-2 w-full ">
            <label className="w-[80px] text-sm">domain</label>
            <input
              {...register('domain', {
                required: { value: true, message: '도메인 입력은 필수입니다 ' },
                pattern: {
                  value:
                    /^(https?:\/\/)?([a-zA-Z0-9-]{1,63}\.)*[a-zA-Z0-9-]{1,63}(:\d+)?$/,
                  message: '순수한 도메인 형식으로 입력해주세요',
                },
              })}
              className="w-full"
              placeholder="도메인을 입력해주세요"
            />
          </div>
          <p className="text-red-500 text-sm">{errors.domain?.message}</p>
          <button type="submit" className="w-full bg-blue-500 ">
            Enroll
          </button>
        </div>
      </form>
    </div>
  );
};
