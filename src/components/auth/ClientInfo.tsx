import { useSession } from '@/hooks/useSession';
import { useState } from 'react';
import { Card } from '../common/Card';
import { CopyBtn } from '../common/CopyBtn';

export const ClientInfo = () => {
  const [isClicked, setClicked] = useState(false);
  const { data } = useSession();
  const onClick = () => {
    setClicked(() => !isClicked);
  };

  return (
    <Card>
      <dl className="flex flex-col gap-8">
        <div className="flex">
          <dt className="w-20 text-primary-100 lg:w-40">Domain</dt>
          <dd className='ml-4'>{data?.user.domain}</dd>
        </div>
        <div className="flex">
          <dt className="w-20 text-primary-100 lg:w-40">Email</dt>
          <dd className='ml-4'>{data?.user.email}</dd>
        </div>

        <div className="flex">
          <button
            onClick={onClick}
            className="text-primary-100 text-sm  bg-background-100 p-1 w-40 lg:w-40"
          >
            API Key
          </button>
          {isClicked && <dd className="ml-4 truncate">{data?.user.apiKey}</dd>}
          {isClicked && <CopyBtn apiKey={data?.user.apiKey || ''} />}
        </div>
      </dl>
    </Card>
  );
};
