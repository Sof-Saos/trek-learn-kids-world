
import { Book, Music, Headphones, Search } from 'lucide-react';
import Header from '@/components/Header';
import SubjectCard from '@/components/SubjectCard';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-purple">
      <Header />
      
      <main className="kid-container">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to didaktik!</h1>
          <p className="text-xl text-gray-700">Let's explore and learn together!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <SubjectCard 
            title="Math" 
            description="Fun with numbers and shapes!" 
            icon={<Search className="w-8 h-8 text-white" />} 
            color="#9b87f5" 
            bgColor="#E5DEFF" 
            to="/math"
          />
          
          <SubjectCard 
            title="Spanish" 
            description="¡Aprendamos español juntos!" 
            icon={<Book className="w-8 h-8 text-white" />} 
            color="#F97316" 
            bgColor="#FEC6A1" 
            to="/spanish"
          />
          
          <SubjectCard 
            title="English" 
            description="Words, songs, and stories!" 
            icon={<Music className="w-8 h-8 text-white" />} 
            color="#33C3F0" 
            bgColor="#D3E4FD" 
            to="/english"
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Start Learning Now!</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/math">
              <button className="kid-button bg-kid-purple">
                Math Quiz
              </button>
            </Link>
            <Link to="/spanish">
              <button className="kid-button bg-kid-orange">
                Spanish Vocabulary
              </button>
            </Link>
            <Link to="/english">
              <button className="kid-button bg-kid-blue">
                English Songs
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-16 py-6 bg-white shadow-inner">
        <div className="kid-container text-center">
          <p className="text-gray-600">© 2025 didaktik - Learning made fun!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
