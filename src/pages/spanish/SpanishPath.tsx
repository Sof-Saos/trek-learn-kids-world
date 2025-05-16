
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import PathView, { LessonNode } from '@/components/PathView';
import { Calendar, Book } from 'lucide-react';

const SpanishPath = () => {
  const [nodes, setNodes] = useState<LessonNode[]>([
    // Monday - Day 1
    {
      id: 'monday',
      title: 'Lunes con Timmy',
      description: 'El primer día de Timmy en la escuela',
      status: 'available',
      to: '/espanol/lunes',
    },
    
    // Tuesday - Day 2
    {
      id: 'tuesday',
      title: 'Martes con Timmy',
      description: 'El dibujo mágico',
      status: 'available',
      to: '/espanol/martes',
    },
    
    // Wednesday - Day 3
    {
      id: 'wednesday',
      title: 'Miércoles con Timmy',
      description: 'El experimento de ciencias',
      status: 'available',
      to: '/espanol/miercoles',
    },
    
    // Thursday - Day 4
    {
      id: 'thursday',
      title: 'Jueves con Timmy',
      description: 'Mi amigo tecnológico',
      status: 'available',
      to: '/espanol/jueves',
    },
    
    // Friday - Day 5
    {
      id: 'friday',
      title: 'Viernes con Timmy',
      description: 'El Tesoro Perdido',
      status: 'available',
      to: '/espanol/viernes',
    },

    // Saturday - Day 6
    {
      id: 'saturday',
      title: 'Sábado con Timmy',
      description: 'La Noche de Camping',
      status: 'available',
      to: '/espanol/sabado',
    },
  ]);

  useEffect(() => {
    // Check localStorage for unlocked levels
    const updateNodesStatus = () => {
      setNodes(prevNodes => {
        const updatedNodes = [...prevNodes];
        
        // Check if Tuesday is unlocked
        if (localStorage.getItem('spanish_tuesday_unlocked') === 'true') {
          updatedNodes[1] = { ...updatedNodes[1], status: 'available' };
        }
        
        // Additional checks for other days could be added here
        
        return updatedNodes;
      });
    };
    
    // Update nodes when component mounts
    updateNodesStatus();
    
    // Add event listener for storage changes (in case another tab updates localStorage)
    window.addEventListener('storage', updateNodesStatus);
    
    return () => {
      window.removeEventListener('storage', updateNodesStatus);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-orange">
      <Header />
      
      <main className="kid-container pt-8">
        {/* Added recommendation banner */}
        <div className="mb-8 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-md">
          <p className="text-amber-700 font-medium">
            Antes de responder el cuestionario, asegúrate de haber leído el cuento del día en la cartilla análoga.
          </p>
        </div>
      
        <PathView 
          nodes={nodes} 
          title="Ruta de Aprendizaje de Español" 
          subtitle="Sigue a Timmy durante su semana y aprende español" 
          pathColor="#F97316"
          pathBgColor="#FEC6A1"
        />
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center justify-center mb-6 gap-4">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <Book className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Las Aventuras de Timmy</h3>
              <p className="text-gray-600">Lee la historia de Timmy en tu folleto primero</p>
            </div>
          </div>
          
          <div className="bg-soft-orange p-5 rounded-xl">
            <h4 className="font-bold text-lg mb-2 text-center">Cómo funciona:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Lee la historia del día correspondiente en tu folleto impreso</li>
              <li>Completa el cuestionario para probar tu comprensión</li>
              <li>Desbloquea la aventura del siguiente día después de completar cada cuestionario</li>
            </ol>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Completa un día a la vez</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpanishPath;
