import { API_BASE_URL } from '@/config/config';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
  const handleLoginSubmit: SubmitHandler<LoginFromType> = async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/dashboard/loginClient`,
        data
      );
      if (response.status === 200) {
        navigate('/');
      }
    } catch (err) {
      console.error('요청 실패', err);
    }
  };
  const moveToEnroll = () => {
    navigate('/enroll');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="flex flex-col justify-between h-full"
      >
        <h1 className="text-3xl font-bold text-center ">Tracker dashboard</h1>
        <div className="flex items-center gap-2 w-full ">
          <label className="min-w-[80px]">Email</label>
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
          <label className="min-w-[80px]">Password</label>
          <input
            type="password"
            {...register('password', {
              required: { value: true, message: '비밀번호는 필수입니다' },
              minLength: { value: 8, message: '비밀번호는 최소 8자리입니다 ' },
            })}
            className="w-full"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
        <button type="submit" className="w-full bg-blue-500 ">
          Login
        </button>
        <button onClick={moveToEnroll} className="w-full ">
          Enroll
        </button>
      </form>
    </>
  );
};
