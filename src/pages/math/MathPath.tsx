
import Header from '@/components/Header';
import PathView from '@/components/PathView';
import { LessonNode } from '@/components/PathView';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Triangle, Divide } from 'lucide-react';
import Character from '@/components/Character';
import { Trophy } from 'lucide-react';

const MathPath = () => {
  const mathLessons: LessonNode[] = [
    {
      id: 'angles-1',
      title: 'Reconociendo ángulos',
      description: 'Aprende a identificar diferentes tipos de ángulos',
      status: 'completed',
      to: '/matematicas/angulos/1',
      level: 1
    },
    {
      id: 'angles-2',
      title: 'Ángulos en objetos reales',
      description: 'Identifica ángulos en objetos de la vida cotidiana',
      status: 'available',
      to: '/matematicas/angulos/2',
      level: 2
    },
    {
      id: 'angles-3',
      title: 'Problemas con ángulos',
      description: 'Resuelve problemas usando ángulos',
      status: 'available',
      to: '/matematicas/angulos/3',
      level: 3
    },
    {
      id: 'fractions-1',
      title: 'Fracciones básicas',
      description: 'Aprende qué son las fracciones y cómo representarlas',
      status: 'available',
      to: '/matematicas/fracciones/1',
      level: 1
    },
    {
      id: 'fractions-2',
      title: 'Operaciones con fracciones',
      description: 'Suma, resta, multiplicación y división de fracciones',
      status: 'available',
      to: '/matematicas/fracciones/2',
      level: 2
    },
    {
      id: 'fractions-3',
      title: 'Problemas con fracciones',
      description: 'Aplica las fracciones para resolver problemas',
      status: 'available',
      to: '/matematicas/fracciones/3',
      level: 3
    },
    {
      id: 'mult-div-1',
      title: 'Multiplicación y división',
      description: 'Aprende las tablas de multiplicar',
      status: 'available',
      to: '/matematicas/mult-div/1',
      level: 1
    },
    {
      id: 'mult-div-2',
      title: 'Multiplicación y división 2',
      description: 'Multiplica y divide números más grandes',
      status: 'available',
      to: '/matematicas/mult-div/2',
      level: 2
    },
    {
      id: 'mult-div-3',
      title: 'Multiplicación y división 3',
      description: 'Resuelve problemas usando multiplicación y división',
      status: 'available',
      to: '/matematicas/mult-div/3',
      level: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      
      <main className="kid-container">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Volver al inicio</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-math" />
            <h2 className="text-xl font-bold text-contrast">Mundo de Matemáticas</h2>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 mb-8">
          <img 
              src='/img/assets/Planeta_mate.png'
              alt= 'Planeta Matemáticas'
              className= "w-28 h-28 animate-float" 
          />
          <p className="text-xl text-center max-w-lg">
            ¡Bienvenido al mundo de los números! Aquí aprenderás a contar, calcular y resolver problemas matemáticos.
          </p>
        </div>
        
        <PathView 
          nodes={mathLessons} 
          title="Ruta de Aprendizaje - Matemáticas" 
          subtitle="¡Explora el fascinante mundo de las matemáticas!"
          theme="math"
        />
        
      </main>
    </div>
  );
};

export default MathPath;
