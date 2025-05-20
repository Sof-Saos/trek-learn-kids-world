
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
  icon?: ReactNode;
}

interface PathViewProps {
  nodes: LessonNode[];
  title: string;
  subtitle?: string;
  pathColor?: string;
  pathBgColor?: string;
  theme?: 'math' | 'english' | 'language';
}

const getThemeColors = (theme?: 'math' | 'english' | 'language') => {
  switch (theme) {
    case 'math':
      return {
        bgGradient: 'from-math to-support',
        pathColor: '#6ecff6',
        pathBgColor: '#d3f5ff',
        nodeLevel1: 'bg-gradient-to-r from-support to-math text-white',
        nodeLevel2: 'bg-gradient-to-r from-math to-support text-white',
        nodeLevel3: 'bg-gradient-to-r from-contrast to-math text-white',
      };
    case 'english':
      return {
        bgGradient: 'from-english to-soft-yellow',
        pathColor: '#ffc63b',
        pathBgColor: '#fff5d6',
        nodeLevel1: 'bg-gradient-to-r from-soft-yellow to-english text-contrast',
        nodeLevel2: 'bg-gradient-to-r from-english to-soft-yellow text-contrast',
        nodeLevel3: 'bg-gradient-to-r from-contrast to-english text-white',
      };
    case 'language':
      return {
        bgGradient: 'from-language to-soft-orange',
        pathColor: '#ff8e30',
        pathBgColor: '#ffece0',
        nodeLevel1: 'bg-gradient-to-r from-soft-orange to-language text-white',
        nodeLevel2: 'bg-gradient-to-r from-language to-soft-orange text-white',
        nodeLevel3: 'bg-gradient-to-r from-contrast to-language text-white',
      };
    default:
      return {
        bgGradient: 'from-kid-purple to-soft-purple',
        pathColor: '#9b87f5',
        pathBgColor: '#E5DEFF',
        nodeLevel1: 'bg-green-100 text-green-800',
        nodeLevel2: 'bg-yellow-100 text-yellow-800',
        nodeLevel3: 'bg-red-100 text-red-800',
      };
  }
};

const PathView = ({ 
  nodes, 
  title, 
  subtitle,
  theme,
  pathColor,
  pathBgColor
}: PathViewProps) => {
  const themeColors = getThemeColors(theme);
  const finalPathColor = pathColor || themeColors.pathColor;
  const finalPathBgColor = pathBgColor || themeColors.pathBgColor;

  // Elementos decorativos aleatorios para el camino
  const decorations = [
    <div key="tree1" className="absolute w-12 h-16 -left-14 top-1/4">
      <div className="w-8 h-8 rounded-full bg-support mx-auto"></div>
      <div className="w-3 h-10 bg-contrast mx-auto -mt-1"></div>
    </div>,
    <div key="rock" className="absolute w-10 h-6 rounded-full bg-gray-300 -right-12 top-2/3"></div>,
    <div key="flower" className="absolute -left-12 bottom-1/4">
      <div className="w-6 h-6 rounded-full bg-kid-pink"></div>
      <div className="w-1 h-8 bg-kid-green mx-auto -mt-1"></div>
    </div>,
    <div key="cloud" className="absolute -right-16 top-1/3">
      <div className="w-12 h-6 rounded-full bg-white shadow-inner"></div>
    </div>
  ];

  return (
    <div className={`w-full max-w-3xl mx-auto rounded-xl p-6 bg-gradient-to-b ${themeColors.bgGradient}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-gray-700">{subtitle}</p>}
      </div>

      <div className="relative py-8">
        {/* Main path line with curve effect */}
        <div 
          className="absolute h-full w-6 left-7 top-0 rounded-full" 
          style={{ backgroundColor: finalPathBgColor }}
        ></div>

        {/* Decorative elements */}
        {decorations.map((decoration, index) => (
          <div key={index} className="hidden md:block">{decoration}</div>
        ))}

        {/* Nodes */}
        <div className="relative z-10">
          {nodes.map((node, index) => (
            <div key={node.id} className="mb-10 flex items-center">
              {/* Node circle */}
              {node.status === 'locked' ? (
                <div 
                  className="path-node bg-gray-200 relative"
                >
                  <Lock className="w-8 h-8 text-gray-500" />
                </div>
              ) : (
                <Link 
                  to={node.to} 
                  className={cn(
                    "path-node relative shadow-md",
                    node.status === 'completed' ? 'bg-green-500' : '',
                    node.level === 1 && themeColors.nodeLevel1,
                    node.level === 2 && themeColors.nodeLevel2,
                    node.level === 3 && themeColors.nodeLevel3,
                    !node.level && `bg-gradient-to-r ${themeColors.bgGradient}`
                  )}
                >
                  {node.status === 'completed' ? (
                    <Check className="w-8 h-8 text-white" />
                  ) : (
                    <div className="font-bold text-xl flex items-center justify-center">
                      {node.icon || index + 1}
                    </div>
                  )}
                  
                  {/* Level indicator */}
                  {node.level && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold border-2" 
                         style={{ borderColor: finalPathColor }}>
                      {node.level}
                    </div>
                  )}
                </Link>
              )}

              {/* Content */}
              <div className="ml-6 flex-1">
                <div className={`p-4 rounded-lg bg-white shadow-md ${node.status === 'locked' ? 'opacity-70' : ''}`}>
                  <h3 className="text-xl font-bold mb-1">{node.title}</h3>
                  {node.description && (
                    <p className="text-gray-700">{node.description}</p>
                  )}
                  {node.level && (
                    <div className="mt-2">
                      <span 
                        className={cn(
                          "inline-block px-3 py-1 text-sm font-medium rounded-full",
                          node.level === 1 && "bg-green-100 text-green-800",
                          node.level === 2 && "bg-yellow-100 text-yellow-800",
                          node.level === 3 && "bg-red-100 text-red-800",
                        )}
                      >
                        Nivel {node.level}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathView;
