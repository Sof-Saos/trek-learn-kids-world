import Header from '@/components/Header';
import PathView, { LessonNode } from '@/components/PathView';
import { Calculator, CircleEqual, CircleDot } from 'lucide-react';

const mathNodes: LessonNode[] = [
  // Angles
  {
    id: 'angles-1',
    title: 'Angles - Basic',
    description: 'Learn to identify and measure basic angles',
    status: 'available',
    to: '/math/angles/1',
    level: 1
  },
  {
    id: 'angles-2',
    title: 'Angles - Intermediate',
    description: 'Understand acute, obtuse, and right angles',
    status: 'locked',
    to: '/math/angles/2',
    level: 2
  },
  {
    id: 'angles-3',
    title: 'Angles - Advanced',
    description: 'Work with complementary and supplementary angles',
    status: 'locked',
    to: '/math/angles/3',
    level: 3
  },
  
  // Fractions
  {
    id: 'fractions-1',
    title: 'Fractions - Basic',
    description: 'Understand what fractions represent',
    status: 'locked',
    to: '/math/fractions/1',
    level: 1
  },
  {
    id: 'fractions-2',
    title: 'Fractions - Intermediate',
    description: 'Compare fractions with different denominators',
    status: 'locked',
    to: '/math/fractions/2',
    level: 2
  },
  {
    id: 'fractions-3',
    title: 'Fractions - Advanced',
    description: 'Add and subtract fractions',
    status: 'locked',
    to: '/math/fractions/3',
    level: 3
  },
  
  // Multiplication and Division
  {
    id: 'mult-div-1',
    title: 'Multiplication & Division - Basic',
    description: 'Learn basic multiplication and division facts',
    status: 'locked',
    to: '/math/mult-div/1',
    level: 1
  },
  {
    id: 'mult-div-2',
    title: 'Multiplication & Division - Intermediate',
    description: 'Work with larger numbers and remainders',
    status: 'locked',
    to: '/math/mult-div/2',
    level: 2
  },
  {
    id: 'mult-div-3',
    title: 'Multiplication & Division - Advanced',
    description: 'Solve multi-step problems with multiplication and division',
    status: 'locked',
    to: '/math/mult-div/3',
    level: 3
  },
];

const MathPath = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-green">
      <Header />
      
      <main className="kid-container pt-8">
        <PathView 
          nodes={mathNodes} 
          title="Math Learning Path" 
          subtitle="Master angles, fractions, and operations" 
          pathColor="#4ade80"
          pathBgColor="#dcfce7"
        />
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                <CircleDot className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Angles</h3>
              <p className="text-sm">Learn to measure and work with different types of angles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                <CircleEqual className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Fractions</h3>
              <p className="text-sm">Master fractions and how to use them in calculations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Multiplication & Division</h3>
              <p className="text-sm">Learn essential math operations for everyday problems</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MathPath;
