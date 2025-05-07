
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SubjectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  to: string;
}

const SubjectCard = ({ title, description, icon, color, bgColor, to }: SubjectCardProps) => {
  return (
    <Link to={to} className="block w-full">
      <div 
        className="subject-card"
        style={{ backgroundColor: bgColor }}
      >
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-bounce-subtle"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-center text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default SubjectCard;
