import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PieChartDataType } from '../components/charts/PieChartTemplate';

interface UserDevicesDataType {
  isMobile: number;
  count: number;
}

export const useUserDevices = () => {
  return useSuspenseQuery<PieChartDataType[]>({
    queryKey: ['userDevice'],
    queryFn: async () => {
      const data = await fetchData<UserDevicesDataType[]>(
        '/dashboard/deviceStats'
      );
      return data.map((item) => ({
        name: item.isMobile === 1 ? 'Mobile' : 'Desktop',
        value: item.count,
      }));
    },
  });
};
