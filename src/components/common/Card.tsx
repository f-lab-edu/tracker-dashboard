interface CardProps {
  bgColor?: string;
  borderRadius?: 'md' | 'lg' | 'xl' | '2xl' | 'full';
  width?: string | number;
  children: React.ReactNode;
}

export const Card = ({
  bgColor = 'background-200',
  borderRadius = 'xl',
  width = 'full',
  children,
}: CardProps) => {
  return (
    <div
      className={`p-4 w-fit mb-8 bg-${bgColor} rounded-${[borderRadius]} w-${width}`}
    >
      {children}
    </div>
  );
};
