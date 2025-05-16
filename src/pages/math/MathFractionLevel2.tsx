
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Pie } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';

interface Question {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Un pastel está dividido en 8 porciones. Si se han comido 6, ¿qué fracción queda?",
    image: "cake",
    options: ["2/8", "6/8", "4/8"],
    correctAnswer: "2/8",
    explanation: "De 8 porciones totales, si se comieron 6, quedan 2, por lo tanto queda 2/8 del pastel."
  },
  {
    id: 2,
    question: "Una botella tiene marcas que la dividen en cuartos. Si tomas 3 marcas, ¿cuánto has tomado?",
    image: "bottle",
    options: ["3/4", "1/4", "2/4"],
    correctAnswer: "3/4",
    explanation: "Si la botella está dividida en 4 partes (cuartos) y tomas 3 de ellas, has tomado 3/4."
  },
  {
    id: 3,
    question: "Hay 12 crayones y 3 son azules. ¿Qué fracción representa los crayones azules?",
    image: "crayons",
    options: ["3/12", "1/4", "4/12"],
    correctAnswer: "3/12",
    explanation: "De 12 crayones totales, 3 son azules, por lo tanto 3/12 representa los crayones azules."
  },
  {
    id: 4,
    question: "Tienes una barra de cereal dividida en 5 partes. Si comes 2 partes, ¿qué fracción has comido?",
    image: "cereal",
    options: ["2/5", "3/5", "5/5"],
    correctAnswer: "2/5",
    explanation: "De 5 partes totales, comiste 2, por lo tanto comiste 2/5 de la barra."
  },
  {
    id: 5,
    question: "Un reloj marca cuartos de hora. Si ha pasado un cuarto de hora, ¿qué fracción ha pasado?",
    image: "clock",
    options: ["1/4", "1/2", "3/4"],
    correctAnswer: "1/4",
    explanation: "El reloj divide la hora en 4 partes (cuartos). Si pasó un cuarto, entonces pasó 1/4 de hora."
  }
];

const MathFractionLevel2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    
    // Provide immediate feedback
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      toast({
        title: "¡Correcto!",
        description: questions[currentQuestion].explanation,
        variant: "default",
      });
      setScore(score + 1);
    } else {
      toast({
        title: "¡Incorrecto!",
        description: "Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handleNextQuestion = () => {
    // Reset states for the next question
    setSelectedAnswer(null);
    setIsCorrect(null);
    
    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setIsCorrect(null);
  };

  // Helper function to render the appropriate visualization for the current question
  const renderQuestionImage = () => {
    switch(questions[currentQuestion].image) {
      case 'cake':
        return (
          <div className="flex flex-wrap gap-1 justify-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
          </div>
        );
      case 'bottle':
        return (
          <div className="w-8 h-24 border-2 border-blue-500 rounded-lg relative">
            <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-blue-200"></div>
            <div className="absolute w-full bottom-6 border-t border-dashed border-blue-500"></div>
            <div className="absolute w-full bottom-12 border-t border-dashed border-blue-500"></div>
            <div className="absolute w-full bottom-18 border-t border-dashed border-blue-500"></div>
          </div>
        );
      case 'crayons':
        return (
          <div className="flex space-x-1 justify-center">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`w-2 h-10 rounded-sm ${i < 3 ? 'bg-blue-500' : 'bg-red-400'}`}></div>
            ))}
          </div>
        );
      case 'cereal':
        return (
          <div className="flex justify-center">
            <div className="w-40 h-8 flex">
              <div className="flex-1 bg-amber-100 border-r border-amber-800"></div>
              <div className="flex-1 bg-amber-100 border-r border-amber-800"></div>
              <div className="flex-1 bg-amber-800 border-r border-amber-800"></div>
              <div className="flex-1 bg-amber-800 border-r border-amber-800"></div>
              <div className="flex-1 bg-amber-800"></div>
            </div>
          </div>
        );
      case 'clock':
        return (
          <div className="w-20 h-20 rounded-full border-4 border-gray-800 relative">
            <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-gray-800 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-0"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-gray-600 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-90"></div>
            <div className="absolute top-0 left-1/2 w-1 h-2 bg-gray-800 -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-gray-800 -translate-x-1/2"></div>
            <div className="absolute left-0 top-1/2 h-1 w-2 bg-gray-800 -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 h-1 w-2 bg-gray-800 -translate-y-1/2"></div>
          </div>
        );
      default:
        return <Pie className="w-16 h-16 text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-green">
      <Header />
      
      <main className="kid-container">
        <div className="flex items-center mb-4 mt-4">
          <Link to="/matematicas" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Volver a la Ruta de Matemáticas</span>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Fracciones - Nivel Medio</h1>
          <p className="text-gray-700">Aprende a usar fracciones en diferentes contextos</p>
        </div>

        <Card className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {showResults ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">¡Cuestionario Completo!</h2>
              <p className="text-xl mb-4">
                Tu puntuación: {score} de {questions.length}
              </p>
              {score === questions.length ? (
                <div className="mb-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-12 h-12 text-green-500" />
                  </div>
                  <p className="text-green-600 font-bold text-lg">¡Puntuación Perfecta! ¡Has dominado las fracciones en contexto!</p>
                </div>
              ) : (
                <p className="mb-6">Sigue practicando - ¡lo estás haciendo muy bien!</p>
              )}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={resetQuiz}
                  className="kid-button bg-kid-green"
                >
                  Intentar de nuevo
                </Button>
                <Link to="/matematicas">
                  <Button variant="outline">
                    Volver a la Ruta
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Pregunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    Nivel 2 · Medio
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {questions[currentQuestion].question}
                </h2>
                
                <div className="flex justify-center items-center py-6">
                  {renderQuestionImage()}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(option)}
                    className={`p-4 text-lg font-medium rounded-xl transition-all ${
                      selectedAnswer === option 
                        ? (selectedAnswer === questions[currentQuestion].correctAnswer 
                            ? 'bg-green-500 text-white' 
                            : 'bg-red-500 text-white')
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex justify-center">
                {selectedAnswer !== null && (
                  <Button 
                    onClick={handleNextQuestion}
                    className="kid-button bg-kid-green"
                  >
                    {currentQuestion < questions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
                  </Button>
                )}
              </div>
            </>
          )}
        </Card>
      </main>
    </div>
  );
};

export default MathFractionLevel2;
