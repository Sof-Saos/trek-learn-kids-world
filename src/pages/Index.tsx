
import { Calculator, Book, Sparkles, Star, Trophy, Heart } from 'lucide-react';
import Header from '@/components/Header';
import WorldCard from '@/components/WorldCard';
import Character from '@/components/Character';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-soft-blue to-soft-purple">
      <Header />
      
      <main className="kid-container">
        <div className="text-center mb-12 mt-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-english animate-bounce-subtle" />
            <h1 className="text-4xl md:text-5xl font-bold">¡Bienvenido a didactik!</h1>
            <Star className="w-6 h-6 text-english animate-bounce-subtle" />
          </div>
          <p className="text-xl text-gray-700">¡Explora y aprende jugando!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <WorldCard 
            title="Matemáticas" 
            description="¡Aprende sobre números, formas y más!" 
            icon={<Calculator className="w-10 h-10" />} 
            bgClass="world-math" 
            to="/matematicas"
            character={<Character icon={<Trophy size={24} />} color="bg-math" />}
          />
          
          <WorldCard 
            title="Español" 
            description="¡Aventuras con palabras y letras!" 
            icon={<Book className="w-10 h-10" />} 
            bgClass="world-language" 
            to="/espanol"
            character={<Character icon={<Heart size={24} />} color="bg-language" />}
          />
          
          <WorldCard 
            title="Inglés" 
            description="¡Palabras, canciones e historias!" 
            icon={<Sparkles className="w-10 h-10" />} 
            bgClass="world-english" 
            to="/ingles"
            character={<Character icon={<Star size={24} />} color="bg-english" />}
          />
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-6">¡Comienza a aprender ahora!</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/matematicas">
              <button className="kid-button bg-math">
                Matemáticas
              </button>
            </Link>
            <Link to="/espanol">
              <button className="kid-button bg-language">
                Español
              </button>
            </Link>
            <Link to="/ingles">
              <button className="kid-button bg-english">
                Inglés
              </button>
            </Link>
          </div>
          
          <div className="mt-16 max-w-lg mx-auto bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <Character size="lg" animation="animate-float" />
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">¡Aprende jugando!</h3>
                <p className="text-gray-700">Explora mundos llenos de conocimiento, gana estrellas y diviértete mientras aprendes.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 py-6 bg-white shadow-inner">
        <div className="kid-container text-center">
          <p className="text-gray-600">© 2025 didactik - ¡Aprender debe ser divertido!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
