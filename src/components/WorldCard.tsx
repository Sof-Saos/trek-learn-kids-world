
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface WorldCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  to: string;
  bgClass: string;
  character?: ReactNode;
}

const WorldCard = ({ title, icon, description, to, bgClass, character }: WorldCardProps) => {
  return (
    <Link to={to} className="block w-full">
      <div className="relative flex flex-col items-center text-center">
        <button className={`world-button ${bgClass}`}>
          <div className="text-4xl mb-2">{icon}</div>
          <span className="text-lg">{title}</span>
        </button>
        
        <p className="mt-4 text-sm text-center font-medium">{description}</p>
        
        {character && (
          <div className="mt-4 character">
            {character}
          </div>
        )}
      </div>
    </Link>
  );
};

export default WorldCard;
