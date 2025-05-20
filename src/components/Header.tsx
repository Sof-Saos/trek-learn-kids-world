
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { School, Sparkles, Book, Calculator } from 'lucide-react';

const Header = () => {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  const handleSubjectClick = (subject: string) => {
    setActiveSubject(subject);
  };

  return (
    <header className="bg-white shadow-md py-3">
      <div className="kid-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-kid-purple via-kid-blue to-kid-green rounded-full p-2">
              <School className="w-6 h-6 text-white animate-wave" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-kid-purple via-kid-blue to-kid-green bg-clip-text text-transparent">
              didaktik
            </h1>
          </Link>
          
          <nav className="hidden md:flex space-x-4">
            <Link to="/matematicas">
              <Button 
                variant="ghost" 
                className={`rounded-full font-bold ${activeSubject === 'math' ? 'bg-math text-white' : ''}`}
                onClick={() => handleSubjectClick('math')}
              >
                <Calculator className="mr-1 h-4 w-4" />
                Matemáticas
              </Button>
            </Link>
            <Link to="/espanol">
              <Button 
                variant="ghost" 
                className={`rounded-full font-bold ${activeSubject === 'spanish' ? 'bg-language text-white' : ''}`}
                onClick={() => handleSubjectClick('spanish')}
              >
                <Book className="mr-1 h-4 w-4" />
                Español
              </Button>
            </Link>
            <Link to="/ingles">
              <Button 
                variant="ghost" 
                className={`rounded-full font-bold ${activeSubject === 'english' ? 'bg-english text-contrast' : ''}`}
                onClick={() => handleSubjectClick('english')}
              >
                <Sparkles className="mr-1 h-4 w-4" />
                Inglés
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
