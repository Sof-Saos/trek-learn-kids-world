
import Header from '@/components/Header';
import PathView from '@/components/PathView';
import { LessonNode } from '@/components/PathView';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, Heart } from 'lucide-react';
import Character from '@/components/Character';

const SpanishPath = () => {
  const spanishLessons: LessonNode[] = [
    {
      id: 'monday',
      title: 'Lunes Literario',
      description: 'Descubre historias y practica la lectura',
      status: 'available',
      to: '/espanol/lunes',
      level: 1
    },
    {
      id: 'tuesday',
      title: 'Martes de Vocabulario',
      description: 'Amplía tu vocabulario con palabras nuevas',
      status: 'available',
      to: '/espanol/martes',
      level: 2
    },
    {
      id: 'wednesday',
      title: 'Miércoles de Gramática',
      description: 'Aprende las reglas gramaticales',
      status: 'available',
      to: '/espanol/miercoles',
      level: 3
    },
    {
      id: 'thursday',
      title: 'Jueves de Ortografía',
      description: 'Mejora tu ortografía con ejercicios divertidos',
      status: 'available',
      to: '/espanol/jueves',
      level: 3
    },
    {
      id: 'friday',
      title: 'Viernes de Expresión',
      description: 'Practica cómo expresar tus ideas',
      status: 'available',
      to: '/espanol/viernes',
      level: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-orange">
      <Header />
      
      <main className="kid-container">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Volver al inicio</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Book className="w-6 h-6 text-language" />
            <h2 className="text-xl font-bold text-contrast">Mundo de Español</h2>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 mb-8">
          <Character size="lg" icon={<Heart size={32} />} />
          <p className="text-xl text-center max-w-lg">
            ¡Bienvenido al camino mágico del lenguaje! Aquí aprenderás a leer, escribir y expresarte mejor.
          </p>
        </div>
        
        <PathView 
          nodes={spanishLessons} 
          title="Ruta de Aprendizaje - Español" 
          subtitle="¡Conviértete en un maestro de las palabras!"
          theme="language"
        />
      </main>
    </div>
  );
};

export default SpanishPath;
