import { useLocation } from 'react-router-dom';
import loginImg from '../../../assets/auth/loginImg.jpg';
import { EnrollForm } from '../forms/EnrollForm';
import { LoginForm } from '../forms/LoginForm';
export const AuthLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex w-[1000px] bg-white shadow-lg rounded-lg p-4 items-stretch min-h-[500px]">
        <div className="w-1/2 p-4">
          <img src={loginImg} className="rounded-lg object-cover h-full" />
        </div>
        <div className="w-1/2 p-4 flex flex-col">
          <h1 className="text-3xl font-bold text-center">Tracker dashboard</h1>
          {isLogin ? <LoginForm /> : <EnrollForm />}
        </div>
      </div>
    </div>
  );
};
