
import Header from '@/components/Header';
import PathView from '@/components/PathView';
import { LessonNode } from '@/components/PathView';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Star } from 'lucide-react';
import Character from '@/components/Character';

const EnglishPath = () => {
  const englishLessons: LessonNode[] = [
    {
      id: 'family',
      title: 'My Family',
      description: 'Learn words about family members',
      status: 'available',
      to: '/ingles/familia',
      level: 1
    },
    {
      id: 'school',
      title: 'At School',
      description: 'Learn vocabulary related to school',
      status: 'available',
      to: '/ingles/escuela',
      level: 1
    },
    {
      id: 'animals',
      title: 'Animals',
      description: 'Learn names of animals in English',
      status: 'available',
      to: '/ingles/animales',
      level: 1
    },
    {
      id: 'house',
      title: 'My House',
      description: 'Learn words for parts of the house and furniture',
      status: 'available',
      to: '/ingles/casa',
      level: 2
    },
    {
      id: 'body',
      title: 'My Body',
      description: 'Learn body parts in English',
      status: 'available',
      to: '/ingles/cuerpo',
      level: 2
    },
    {
      id: 'emotions',
      title: 'Feelings',
      description: 'Express feelings and emotions in English',
      status: 'available',
      to: '/ingles/emociones',
      level: 3
    },
    // {
    //   id: 'songs',
    //   title: 'English Songs',
    //   description: 'Learn English through fun songs',
    //   status: 'available',
    //   to: '/ingles/canciones',
    //   level: 3
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-yellow">
      <Header />
      
      <main className="kid-container">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Volver al inicio</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-english" />
            <h2 className="text-xl font-bold text-contrast">Mundo de Inglés</h2>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 mb-8">
           <img 
              src='/img/assets/Planeta_ingles.png'
              alt= 'Planeta Inglés'
              className= "w-28 h-28 animate-float" 
            />
        
          <p className="text-xl text-center max-w-lg">
            ¡Bienvenido a tu aventura en inglés! Explora un nuevo idioma mientras te diviertes.
          </p>
        </div>
        
        <PathView 
          nodes={englishLessons} 
          title="Learning Path - English" 
          subtitle="¡Aprende inglés paso a paso!"
          theme="english"
        />
      </main>
    </div>
  );
};

export default EnglishPath;
