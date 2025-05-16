import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, PieChart } from 'lucide-react';
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
    question: "¿Cuál fracción es mayor: 3/4 o 2/4?",
    image: "compare1",
    options: ["2/4", "3/4", "Son iguales"],
    correctAnswer: "3/4",
    explanation: "3/4 es mayor que 2/4 porque el numerador es mayor y el denominador es el mismo."
  },
  {
    id: 2,
    question: "Si tienes 1/2 de un pastel y tu amigo tiene 2/4, ¿quién tiene más?",
    image: "compare2",
    options: ["Tú", "Tu amigo", "Los dos tienen lo mismo"],
    correctAnswer: "Los dos tienen lo mismo",
    explanation: "1/2 y 2/4 son fracciones equivalentes, ambos representan la mitad."
  },
  {
    id: 3,
    question: "¿Qué fracción es equivalente a 2/6?",
    image: "equivalent1",
    options: ["1/2", "1/3", "3/6"],
    correctAnswer: "1/3",
    explanation: "2/6 simplificado es 1/3 (dividiendo numerador y denominador por 2)."
  },
  {
    id: 4,
    question: "En una receta necesitas 1/3 de taza de azúcar y tienes una taza medidora de 2/6. ¿Es suficiente?",
    image: "equivalent2",
    options: ["Sí", "No", "Tal vez"],
    correctAnswer: "Sí",
    explanation: "2/6 simplificado es 1/3, por lo tanto sí es suficiente."
  },
  {
    id: 5,
    question: "¿Cuál de estas fracciones representa la misma cantidad que 4/8?",
    image: "equivalent3",
    options: ["1/4", "1/2", "3/4"],
    correctAnswer: "1/2",
    explanation: "4/8 simplificado es 1/2 (dividiendo numerador y denominador por 4)."
  }
];

const MathFractionLevel3 = () => {
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
      case 'compare1':
        return (
          <div className="flex gap-8 justify-center">
            <div className="text-center">
              <div className="w-16 h-16 relative bg-gray-200 rounded-full mb-2">
                <div className="absolute w-16 h-12 bg-blue-400 rounded-t-full"></div>
                <p className="absolute w-full text-center top-full mt-1">3/4</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 relative bg-gray-200 rounded-full mb-2">
                <div className="absolute w-16 h-8 bg-green-400 rounded-t-full"></div>
                <p className="absolute w-full text-center top-full mt-1">2/4</p>
              </div>
            </div>
          </div>
        );
      case 'compare2':
        return (
          <div className="flex gap-8 justify-center">
            <div className="text-center">
              <div className="w-16 h-16 relative bg-gray-200 rounded-full mb-2">
                <div className="absolute w-16 h-8 bg-pink-400 rounded-t-full"></div>
                <p className="absolute w-full text-center top-full mt-1">1/2</p>
              </div>
              <p>Tú</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 relative bg-gray-200 rounded-full mb-2">
                <div className="absolute w-16 h-8 bg-purple-400 rounded-t-full"></div>
                <p className="absolute w-full text-center top-full mt-1">2/4</p>
              </div>
              <p>Tu amigo</p>
            </div>
          </div>
        );
      case 'equivalent1':
        return (
          <div className="flex flex-col items-center">
            <div className="flex mb-4">
              <div className="w-10 h-10 border border-gray-300 bg-blue-400"></div>
              <div className="w-10 h-10 border border-gray-300 bg-blue-400"></div>
              <div className="w-10 h-10 border border-gray-300"></div>
              <div className="w-10 h-10 border border-gray-300"></div>
              <div className="w-10 h-10 border border-gray-300"></div>
              <div className="w-10 h-10 border border-gray-300"></div>
            </div>
            <p>2/6</p>
          </div>
        );
      case 'equivalent2':
        return (
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="w-10 h-24 border-2 border-gray-800 rounded-md relative">
                <div className="absolute bottom-0 w-full h-1/3 bg-yellow-200"></div>
                <div className="absolute w-full top-1/3 border-t border-dashed border-gray-800"></div>
                <div className="absolute w-full top-2/3 border-t border-dashed border-gray-800"></div>
              </div>
              <p className="mt-2">1/3 necesario</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-24 border-2 border-gray-800 rounded-md relative">
                <div className="absolute bottom-0 w-full h-1/3 bg-yellow-200"></div>
                <div className="absolute w-full top-1/6 border-t border-dashed border-gray-800"></div>
                <div className="absolute w-full top-2/6 border-t border-dashed border-gray-800"></div>
                <div className="absolute w-full top-3/6 border-t border-dashed border-gray-800"></div>
                <div className="absolute w-full top-4/6 border-t border-dashed border-gray-800"></div>
                <div className="absolute w-full top-5/6 border-t border-dashed border-gray-800"></div>
              </div>
              <p className="mt-2">2/6 disponible</p>
            </div>
          </div>
        );
      case 'equivalent3':
        return (
          <div className="flex flex-col items-center gap-4">
            <div>
              <div className="w-32 h-8 flex mb-1">
                <div className="flex-1 bg-blue-200 border border-gray-300"></div>
                <div className="flex-1 bg-blue-200 border border-gray-300"></div>
                <div className="flex-1 bg-blue-200 border border-gray-300"></div>
                <div className="flex-1 bg-blue-200 border border-gray-300"></div>
                <div className="flex-1 border border-gray-300"></div>
                <div className="flex-1 border border-gray-300"></div>
                <div className="flex-1 border border-gray-300"></div>
                <div className="flex-1 border border-gray-300"></div>
              </div>
              <p className="text-center">4/8</p>
            </div>
            <div className="text-lg">=</div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="w-16 h-16 relative bg-gray-200 rounded-full mb-2">
                  <div className="absolute w-16 h-4 bg-red-400 rounded-t-full"></div>
                  <p className="absolute w-full text-center top-full mt-1">1/4</p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 relative bg-gray-200 rounded-full mb-2">
                  <div className="absolute w-16 h-8 bg-green-400 rounded-t-full"></div>
                  <p className="absolute w-full text-center top-full mt-1">1/2</p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 relative bg-gray-200 rounded-full mb-2">
                  <div className="absolute w-16 h-12 bg-blue-400 rounded-t-full"></div>
                  <p className="absolute w-full text-center top-full mt-1">3/4</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <PieChart className="w-16 h-16 text-yellow-600" />;
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
          <h1 className="text-3xl font-bold mb-2">Fracciones - Nivel Avanzado</h1>
          <p className="text-gray-700">Aprende a comparar fracciones y encontrar equivalencias</p>
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
                  <p className="text-green-600 font-bold text-lg">¡Puntuación Perfecta! ¡Has dominado las fracciones avanzadas!</p>
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
                    Nivel 3 · Avanzado
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

export default MathFractionLevel3;
