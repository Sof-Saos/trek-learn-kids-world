
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { Question } from '@/components/math/angles/types';

interface AngleQuestionProps {
  question: Question;
  selectedAnswer: string | null;
  attemptCount: number;
  onSelectAnswer: (answer: string) => void;
  onSubmit: () => void;
}

const AngleQuestion = ({ 
  question, 
  selectedAnswer, 
  attemptCount, 
  onSelectAnswer,
  onSubmit
}: AngleQuestionProps) => {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">
          {question.question}
        </h2>
        
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6 relative">
          <img 
            src="{placeholder}" 
            alt={question.imageDescription}
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-2 right-2 bg-white/70 rounded-full p-1">
            <Info size={16} className="text-gray-500" />
          </div>
          <p className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-100 bg-opacity-80">
            {question.imageDescription}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onSelectAnswer(option)}
            className={`p-4 text-lg font-medium rounded-xl transition-all ${
              selectedAnswer === option
                ? 'bg-kid-green text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {attemptCount > 0 && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md text-center">
          <p className="text-green-700">
            {attemptCount === 1 ? "Intenta de nuevo. ¡Tú puedes!" : 
             attemptCount === 2 ? "Observa con atención la imagen." : 
             "Pista: Recuerda las características de los diferentes tipos de ángulos."}
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <Button 
          onClick={onSubmit}
          className="kid-button bg-kid-green"
        >
          Enviar respuesta
        </Button>
      </div>
    </>
  );
};

export default AngleQuestion;
