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
          <dt className="w-32 text-primary-100">Domain</dt>
          <dd className="w-32">{data?.user.domain}</dd>
        </div>
        <div className="flex">
          <dt className="w-32 text-primary-100">Email</dt>
          <dd>{data?.user.email}</dd>
        </div>
        <div className="flex">
          <dt className="w-32 text-primary-100">API Key</dt>
          <button
            onClick={onClick}
            className="text-primary-100 bg-background-100 p-0 w-32"
          >
            API Key 보기
          </button>
          {isClicked && <dd className="ml-4">{data?.user.apiKey}</dd>}
          {isClicked && <CopyBtn apiKey={data?.user.apiKey || ''} />}
        </div>
      </dl>
    </Card>
  );
};
