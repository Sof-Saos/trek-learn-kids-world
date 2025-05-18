
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
}

const QuizHeader = ({ currentQuestion, totalQuestions }: QuizHeaderProps) => {
  return (
    <>
      <div className="flex items-center mb-4 mt-4">
        <Link to="/matematicas" className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Volver a la Ruta de Matemáticas</span>
        </Link>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Identifica ángulos en objetos cotidianos</h1>
        <p className="text-gray-700">Reconoce tipos de ángulos en objetos de la vida real</p>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">
          Pregunta {currentQuestion + 1} de {totalQuestions}
        </span>
        <span className="text-sm text-gray-500">
          Nivel 2 · Intermedio
        </span>
      </div>
    </>
  );
};

export default QuizHeader;
