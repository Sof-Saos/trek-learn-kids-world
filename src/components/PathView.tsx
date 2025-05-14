
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Check, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LessonNode {
  id: string;
  title: string;
  description?: string;
  status: 'locked' | 'available' | 'completed';
  to: string;
  level?: 1 | 2 | 3;
}

interface PathViewProps {
  nodes: LessonNode[];
  title: string;
  subtitle?: string;
  pathColor?: string;
  pathBgColor?: string;
}

const PathView = ({ 
  nodes, 
  title, 
  subtitle, 
  pathColor = "#9b87f5", 
  pathBgColor = "#E5DEFF" 
}: PathViewProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-gray-700">{subtitle}</p>}
      </div>

      <div className="relative py-4">
        {/* Main path line */}
        <div 
          className="absolute h-full w-4 left-7 top-0 rounded-full" 
          style={{ backgroundColor: pathBgColor }}
        ></div>

        {/* Nodes */}
        <div className="relative z-10">
          {nodes.map((node, index) => (
            <div key={node.id} className="mb-8 flex items-center">
              {/* Node circle */}
              {node.status === 'locked' ? (
                <div 
                  className="w-18 h-18 rounded-full flex items-center justify-center bg-gray-200 relative"
                  style={{ width: '4.5rem', height: '4.5rem' }}
                >
                  <Lock className="w-6 h-6 text-gray-500" />
                </div>
              ) : (
                <Link 
                  to={node.to} 
                  className={cn(
                    "w-18 h-18 rounded-full flex items-center justify-center relative shadow-md",
                    node.status === 'completed' ? 'bg-green-500' : 'hover:scale-105 transition-transform',
                    node.level === 1 && 'bg-green-100',
                    node.level === 2 && 'bg-yellow-100',
                    node.level === 3 && 'bg-red-100',
                    !node.level && `bg-${pathColor.replace('#', '')}`
                  )}
                  style={{ 
                    width: '4.5rem', 
                    height: '4.5rem',
                    backgroundColor: !node.level ? pathColor : undefined
                  }}
                >
                  {node.status === 'completed' ? (
                    <Check className="w-8 h-8 text-white" />
                  ) : (
                    <span className="font-bold text-lg">
                      {index + 1}
                    </span>
                  )}
                </Link>
              )}

              {/* Content */}
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-1">{node.title}</h3>
                {node.description && (
                  <p className="text-gray-700">{node.description}</p>
                )}
                {node.level && (
                  <div className="mt-1">
                    <span 
                      className={cn(
                        "inline-block px-3 py-1 text-sm font-medium rounded-full",
                        node.level === 1 && "bg-green-100 text-green-800",
                        node.level === 2 && "bg-yellow-100 text-yellow-800",
                        node.level === 3 && "bg-red-100 text-red-800",
                      )}
                    >
                      Level {node.level}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathView;
