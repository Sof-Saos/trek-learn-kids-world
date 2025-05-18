
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface ResultsCardProps {
  score: number;
  totalQuestions: number;
  onReset: () => void;
}

const ResultsCard = ({ score, totalQuestions, onReset }: ResultsCardProps) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">¡Cuestionario Completo!</h2>
      <p className="text-xl mb-4">
        Tu puntuación: {score} de {totalQuestions}
      </p>
      {score >= totalQuestions * 0.7 ? (
        <div className="mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-12 h-12 text-green-500" />
          </div>
          <p className="text-green-600 font-bold text-lg">
            ¡Excelente trabajo identificando ángulos en objetos cotidianos!
          </p>
        </div>
      ) : (
        <p className="mb-6">
          Sigue practicando para mejorar tu habilidad de identificar ángulos.
        </p>
      )}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          onClick={onReset}
          className="kid-button bg-kid-green"
        >
          Intentar de nuevo
        </Button>
        <Link to="/matematicas">
          <Button variant="outline">
            Volver a la Ruta
          </Button>
        </Link>
        <Link to="/matematicas/angulos/3">
          <Button className="kid-button bg-kid-purple">
            Ir al Nivel 3
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsCard;
