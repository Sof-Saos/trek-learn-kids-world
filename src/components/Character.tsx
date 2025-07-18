
import { ReactNode } from 'react';

interface CharacterProps {
  image?: string;
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  animation?: string;
  color?: string;
}

const Character = ({ 
  image, 
  icon, 
  size = 'md', 
  animation = 'animate-bounce-subtle',
  color
}: CharacterProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };
  
  const bgColorClass = color || 'bg-gradient-to-b from-support to-math';
  
  return (
    <div className={`${sizeClasses[size]} ${animation} overflow-hidden rounded-full bg-white border-2 border-white shadow-md`}>
      {image ? (
        <img src={image} alt="Character" className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${bgColorClass} text-white`}>
          {icon || "😊"}
        </div>
      )}
    </div>
  );
};

export default Character;
