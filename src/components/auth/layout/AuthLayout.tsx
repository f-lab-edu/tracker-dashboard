import login from '../../../assets/auth/login.jpg';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className=" bg-white shadow-lg rounded-lg p-4 items-stretch lg:flex lg:min-h-[500px] lg:w-[1000px]">
        <div className="w-full p-4 lg:w-1/2">
          <img
            src={login}
            className="rounded-lg object-cover h-full"
            alt="loginImg"
          />
        </div>
        <div className="w-full p-4 flex flex-col lg:w-1/2">
          <h1 className="text-3xl font-bold text-center text-accent-200">
            Tracker dashboard
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};
