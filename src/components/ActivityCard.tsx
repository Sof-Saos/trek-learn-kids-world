
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ActivityCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  to: string;
}

const ActivityCard = ({ title, icon, color, to }: ActivityCardProps) => {
  return (
    <Link to={to} className="block w-full">
      <div className="activity-card">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <h3 className="text-center font-bold">{title}</h3>
      </div>
    </Link>
  );
};

export default ActivityCard;
