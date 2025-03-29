import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface UserDevicesDataType {
  isMobile: number;
  count: number;
}

export const useUserDevices = () => {
  return useSuspenseQuery<UserDevicesDataType[]>({
    queryKey: ['userDevice'],
    queryFn: () => fetchData('/dashboard/deviceStats'),
  });
};
