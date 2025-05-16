
import Header from '@/components/Header';
import PathView, { LessonNode } from '@/components/PathView';
import { Users, Home, Smile, Cat, School, BookOpen } from 'lucide-react';

// Updated nodes with topics as separate lessons
const englishNodes: LessonNode[] = [
  // Family
  {
    id: 'family',
    title: 'Family',
    description: 'Learn vocabulary related to family members',
    status: 'available',
    to: '/ingles/familia',
  },
  
  // School
  {
    id: 'school',
    title: 'School',
    description: 'Vocabulary and expressions related to school',
    status: 'available',
    to: '/ingles/escuela',
  },
  
  // Animals
  {
    id: 'animals',
    title: 'Animals',
    description: 'Learn about different animals and their characteristics',
    status: 'available',
    to: '/ingles/animales',
  },
  
  // House
  {
    id: 'house',
    title: 'House',
    description: 'Discover words for different rooms and objects in a house',
    status: 'available',
    to: '/ingles/casa',
  },
  
  // Body
  {
    id: 'body',
    title: 'Body',
    description: 'Learn to name different parts of the body',
    status: 'available',
    to: '/ingles/cuerpo',
  },
  
  // Emotions
  {
    id: 'emotions',
    title: 'Emotions',
    description: 'Understand and express different feelings',
    status: 'available',
    to: '/ingles/emociones',
  },
];

const EnglishPath = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      
      <main className="kid-container pt-8">
        {/* Added recommendation banner */}
        <div className="mb-8 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-md">
          <p className="text-amber-700 font-medium">
            Te recomendamos resolver primero el rompecabezas con cubos y escanear el contenido oculto en realidad aumentada antes de comenzar el cuestionario.
          </p>
        </div>
        
        <PathView 
          nodes={englishNodes} 
          title="English Learning Path" 
          subtitle="Explore different topics and build your English skills" 
          pathColor="#33C3F0"
          pathBgColor="#D3E4FD"
        />
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">English Learning Activities</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="activity-card p-4 bg-soft-blue rounded-xl text-center">
              <div className="w-12 h-12 bg-kid-blue rounded-full mx-auto flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold">Grammar</h4>
              <p className="text-sm mt-1">Learn language structures and rules</p>
            </div>
            
            <div className="activity-card p-4 bg-soft-blue rounded-xl text-center">
              <div className="w-12 h-12 bg-kid-blue rounded-full mx-auto flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold">Vocabulary</h4>
              <p className="text-sm mt-1">Learn new words and their meanings</p>
            </div>
            
            <div className="activity-card p-4 bg-soft-blue rounded-xl text-center">
              <div className="w-12 h-12 bg-kid-blue rounded-full mx-auto flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold">Reading</h4>
              <p className="text-sm mt-1">Read short stories and answer questions</p>
            </div>
            
            <div className="activity-card p-4 bg-soft-blue rounded-xl text-center">
              <div className="w-12 h-12 bg-kid-blue rounded-full mx-auto flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold">Listening</h4>
              <p className="text-sm mt-1">Listen to native speakers and understand</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnglishPath;
