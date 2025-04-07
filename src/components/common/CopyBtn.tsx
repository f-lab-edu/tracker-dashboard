import clsx from 'clsx';
import { useState } from 'react';
import { IoMdCopy } from 'react-icons/io';
import { toast } from 'react-toastify';

interface CopyBtnProps {
  apiKey: string;
}

export const CopyBtn = ({ apiKey }: CopyBtnProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast('복사 성공');
    } catch (err) {
      console.error(err);
      toast('복사 실패');
    }
  };
  return (
    <button
      className="p-0 w-32 ml-4"
      onClick={() => {
        copyClipboard(apiKey || '');
      }}
    >
      <IoMdCopy
        size={20}
        className={clsx(isCopied ? 'text-primary-100' : 'text-text-100')}
      />
    </button>
  );
};
