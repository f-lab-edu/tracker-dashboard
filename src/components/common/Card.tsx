interface CardProps {
  bgColor?: string;
  borderRadius?: 'lg' | 'xl' | 'full';
  width?: 'fit' | 'half' | 'full';
  children: React.ReactNode;
}

export const Card = ({
  bgColor = 'bg-background-200',
  borderRadius = 'xl',
  width = 'full',
  children,
}: CardProps) => {
  const widthList = {
    fit: 'w-fit',
    half: 'w-1/2',
    full: 'w-full',
  };
  const borderRadiusList = {
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };
  return (
    <div
      className={`p-4 w-fit ${bgColor} ${borderRadiusList[borderRadius]} ${widthList[width]}`}
    >
      {children}
    </div>
  );
};
