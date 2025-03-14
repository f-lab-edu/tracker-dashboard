import loginImg from '../../assets/auth/loginImg.jpg';
import { LoginForm } from './LoginForm';
export const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex w-[1000px] bg-white shadow-lg rounded-lg p-4">
        <div className="w-1/2 p-4">
          <img src={loginImg} className="rounded-lg object-cover" />
        </div>
        <div className="w-1/2 p-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
