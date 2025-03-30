import { MdOnlinePrediction } from 'react-icons/md';
import { Card } from '../common/Card';
import { useOnlineUser } from '../hook/useOnlineUsers';

export const OnlineUsers = () => {
  const { data } = useOnlineUser();

  return (
    <Card borderRadius="xl" width="fit">
      <div>
        <p className="text-lg font-bold">Online User Count</p>
        <div className="flex gap-4 items-center justify-center mt-4">
          <MdOnlinePrediction size={30} />
          <p className="text-center text-3xl">{data.onlineUsersCount}</p>
        </div>
      </div>
    </Card>
  );
};
