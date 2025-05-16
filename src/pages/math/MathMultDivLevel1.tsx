
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Box, Candy } from 'lucide-react';
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
    question: "Si cada caja tiene 3 galletas, ¿cuántas galletas hay en 4 cajas?",
    image: "boxes",
    options: ["12", "7", "9"],
    correctAnswer: "12",
    explanation: "Si cada caja tiene 3 galletas, y hay 4 cajas, entonces: 3 × 4 = 12 galletas en total."
  },
  {
    id: 2,
    question: "Unas macetas tienen 5 flores cada una. Si hay 2 macetas, ¿cuántas flores hay en total?",
    image: "flowers",
    options: ["7", "10", "12"],
    correctAnswer: "10",
    explanation: "Si cada maceta tiene 5 flores, y hay 2 macetas, entonces: 5 × 2 = 10 flores en total."
  },
  {
    id: 3,
    question: "Pedro tiene 15 caramelos y quiere repartirlos entre 5 amigos por igual. ¿Cuántos caramelos recibe cada uno?",
    image: "candies",
    options: ["3", "5", "2"],
    correctAnswer: "3",
    explanation: "Si Pedro reparte 15 caramelos entre 5 amigos, entonces: 15 ÷ 5 = 3 caramelos para cada uno."
  },
  {
    id: 4,
    question: "Si hay 6 paquetes con 2 lápices en cada uno, ¿cuántos lápices hay en total?",
    image: "pencils",
    options: ["12", "8", "10"],
    correctAnswer: "12",
    explanation: "Si cada paquete tiene 2 lápices, y hay 6 paquetes, entonces: 2 × 6 = 12 lápices en total."
  },
  {
    id: 5,
    question: "Sofía tiene 20 pegatinas y las guarda en sobres con 4 pegatinas cada uno. ¿Cuántos sobres llena?",
    image: "stickers",
    options: ["6", "5", "4"],
    correctAnswer: "5",
    explanation: "Si Sofía guarda 20 pegatinas en sobres de 4 pegatinas cada uno, entonces: 20 ÷ 4 = 5 sobres."
  }
];

const MathMultDivLevel1 = () => {
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

  // Helper function to render the appropriate icon for the current question
  const renderQuestionImage = () => {
    switch(questions[currentQuestion].image) {
      case 'boxes':
        return (
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <Box key={i} className="w-12 h-12 text-amber-700" />
            ))}
          </div>
        );
      case 'flowers':
        return (
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-12 bg-green-700 rounded-sm"></div>
              <div className="flex -mt-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-pink-400 m-0.5"></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-12 bg-green-700 rounded-sm"></div>
              <div className="flex -mt-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-pink-400 m-0.5"></div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'candies':
        return (
          <div className="flex flex-wrap justify-center max-w-xs">
            {[...Array(15)].map((_, i) => (
              <Candy key={i} className="w-6 h-6 text-pink-400 m-1" />
            ))}
          </div>
        );
      case 'pencils':
        return (
          <div className="flex flex-col space-y-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex space-x-2">
                <div className="w-12 h-2 bg-yellow-600"></div>
                <div className="w-12 h-2 bg-yellow-600"></div>
              </div>
            ))}
          </div>
        );
      case 'stickers':
        return (
          <div className="grid grid-cols-4 gap-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
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
          <h1 className="text-3xl font-bold mb-2">Multiplicación y División - Básico</h1>
          <p className="text-gray-700">Aprende operaciones básicas de multiplicación y división</p>
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
                  <p className="text-green-600 font-bold text-lg">¡Puntuación Perfecta! ¡Has dominado la multiplicación y división básica!</p>
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
                    Nivel 1 · Básico
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {questions[currentQuestion].question}
                </h2>
                
                {questions[currentQuestion].image && (
                  <div className="flex justify-center items-center py-6">
                    {renderQuestionImage()}
                  </div>
                )}
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

export default MathMultDivLevel1;
