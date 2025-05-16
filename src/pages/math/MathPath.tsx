
import Header from '@/components/Header';
import PathView, { LessonNode } from '@/components/PathView';
import { Calculator, CircleEqual, CircleDot, Pie } from 'lucide-react';

const mathNodes: LessonNode[] = [
  // Angles
  {
    id: 'angles-1',
    title: 'Ángulos - Básico',
    description: 'Aprende a identificar y medir ángulos básicos',
    status: 'available',
    to: '/matematicas/angulos/1',
    level: 1
  },
  {
    id: 'angles-2',
    title: 'Ángulos - Intermedio',
    description: 'Comprende ángulos agudos, obtusos y rectos',
    status: 'available',
    to: '/matematicas/angulos/2',
    level: 2
  },
  {
    id: 'angles-3',
    title: 'Ángulos - Avanzado',
    description: 'Trabaja con ángulos complementarios y suplementarios',
    status: 'available',
    to: '/matematicas/angulos/3',
    level: 3
  },
  
  // Fractions - New section
  {
    id: 'fractions-1',
    title: 'Fracciones - Básico',
    description: 'Comprensión visual de fracciones simples',
    status: 'available',
    to: '/matematicas/fracciones/1',
    level: 1
  },
  {
    id: 'fractions-2',
    title: 'Fracciones - Medio',
    description: 'Uso de fracciones en contexto',
    status: 'available',
    to: '/matematicas/fracciones/2',
    level: 2
  },
  {
    id: 'fractions-3',
    title: 'Fracciones - Avanzado',
    description: 'Comparación y equivalencias de fracciones',
    status: 'available',
    to: '/matematicas/fracciones/3',
    level: 3
  },
  
  // Multiplication and Division
  {
    id: 'mult-div-1',
    title: 'Multiplicación y División - Básico',
    description: 'Aprende multiplicación y división básica',
    status: 'available',
    to: '/matematicas/mult-div/1',
    level: 1
  },
  {
    id: 'mult-div-2',
    title: 'Multiplicación y División - Intermedio',
    description: 'Trabaja con números grandes y residuos',
    status: 'available',
    to: '/matematicas/mult-div/2',
    level: 2
  },
  {
    id: 'mult-div-3',
    title: 'Multiplicación y División - Avanzado',
    description: 'Resuelve problemas de varios pasos con multiplicación y división',
    status: 'available',
    to: '/matematicas/mult-div/3',
    level: 3
  },
];

const MathPath = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-green">
      <Header />
      
      <main className="kid-container pt-8">
        {/* Added recommendation banner */}
        <div className="mb-8 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-md">
          <p className="text-amber-700 font-medium">
            Se recomienda resolver estos cuestionarios después de leer el tema correspondiente en la cartilla y explorar los objetos secretos en realidad aumentada.
          </p>
        </div>
      
        <PathView 
          nodes={mathNodes} 
          title="Ruta de Aprendizaje de Matemáticas" 
          subtitle="Domina ángulos, fracciones, y operaciones" 
          pathColor="#4ade80"
          pathBgColor="#dcfce7"
        />
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                <CircleDot className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Ángulos</h3>
              <p className="text-sm">Aprende a medir y trabajar con diferentes tipos de ángulos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                <Pie className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Fracciones</h3>
              <p className="text-sm">Domina fracciones y cómo usarlas en cálculos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Multiplicación y División</h3>
              <p className="text-sm">Aprende operaciones matemáticas esenciales para problemas cotidianos</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MathPath;
