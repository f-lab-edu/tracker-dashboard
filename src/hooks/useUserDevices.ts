import { DeviceDataType } from '@/types/device';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useUserDevices = () => {
  return useSuspenseQuery({
    queryKey: ['userDevice'],
    queryFn: () => fetchData<DeviceDataType[]>('/dashboard/deviceStats'),
  });
};
