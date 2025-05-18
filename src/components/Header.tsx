
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const Header = () => {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  const handleSubjectClick = (subject: string) => {
    setActiveSubject(subject);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="kid-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-kid-purple rounded-full p-2">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-kid-purple to-kid-pink bg-clip-text text-transparent">
              didaktik
            </h1>
          </Link>
          
          <nav className="hidden md:flex space-x-4">
            <Link to="/math">
              <Button 
                variant="ghost" 
                className={`rounded-full font-bold ${activeSubject === 'math' ? 'bg-kid-purple text-white' : ''}`}
                onClick={() => handleSubjectClick('math')}
              >
                Math
              </Button>
            </Link>
            <Link to="/spanish">
              <Button 
                variant="ghost" 
                className={`rounded-full font-bold ${activeSubject === 'spanish' ? 'bg-kid-orange text-white' : ''}`}
                onClick={() => handleSubjectClick('spanish')}
              >
                Spanish
              </Button>
            </Link>
            <Link to="/english">
              <Button 
                variant="ghost" 
                className={`rounded-full font-bold ${activeSubject === 'english' ? 'bg-kid-blue text-white' : ''}`}
                onClick={() => handleSubjectClick('english')}
              >
                English
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
