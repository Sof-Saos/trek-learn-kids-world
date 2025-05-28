
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Dice3, Dice5, Dice6 } from 'lucide-react';
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
    question: "En una granja hay 7 gallinas. Si cada una pone 3 huevos al día, ¿cuántos huevos ponen en total?",
    image: "chickens",
    options: ["21", "10", "14"],
    correctAnswer: "21",
    explanation: "Si cada gallina pone 3 huevos y hay 7 gallinas, entonces: 7 × 3 = 21 huevos en total."
  },
  {
    id: 2,
    question: "Luis tiene 36 canicas y quiere repartirlas entre 6 cajas. ¿Cuántas canicas pondrá en cada caja?",
    image: "marbles",
    options: ["5", "8", "6"],
    correctAnswer: "6",
    explanation: "Si Luis reparte 36 canicas en 6 cajas por igual, entonces: 36 ÷ 6 = 6 canicas en cada caja."
  },
  {
    id: 3,
    question: "Una niña compra 4 bolsas de dulces. Si cada bolsa tiene 9 dulces, ¿cuántos dulces tiene en total?",
    image: "candies",
    options: ["36", "32", "40"],
    correctAnswer: "36",
    explanation: "Si cada bolsa tiene 9 dulces y compró 4 bolsas, entonces: 4 × 9 = 36 dulces en total."
  },
  {
    id: 4,
    question: "Una bicicleta tiene 2 ruedas. Si hay 9 bicicletas en un parque, ¿cuántas ruedas hay en total?",
    image: "bikes",
    options: ["20", "18", "12"],
    correctAnswer: "18",
    explanation: "Si cada bicicleta tiene 2 ruedas y hay 9 bicicletas, entonces: 9 × 2 = 18 ruedas en total."
  },
  {
    id: 5,
    question: "Hay 40 fichas para repartir entre 5 niños de forma equitativa. ¿Cuántas fichas recibe cada niño?",
    image: "tokens",
    options: ["10", "8", "5"],
    correctAnswer: "8",
    explanation: "Si se reparten 40 fichas entre 5 niños por igual, entonces: 40 ÷ 5 = 8 fichas para cada niño."
  }
];

const MathMultDivLevel2 = () => {
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
      case 'chickens':
        return (
          <div className="flex flex-wrap justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-10 h-10 bg-amber-200 rounded-full"></div>
                <div className="w-6 h-6 bg-amber-600 -mt-4 rounded-t-full"></div>
                <div className="flex mt-1">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="w-4 h-5 bg-white rounded-full mx-0.5"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'marbles':
        return (
          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-2 border-gray-400 rounded w-12 h-12 flex items-center justify-center">
                <Dice6 className="w-8 h-8 text-blue-500" />
              </div>
            ))}
          </div>
        );
      case 'candies':
        return (
          <div className="flex space-x-4 justify-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-2 border-pink-300 rounded-lg p-2">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, j) => (
                    <div key={j} className="w-3 h-3 rounded-full bg-pink-400"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'bikes':
        return (
          <div className="flex flex-wrap justify-center gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-8 h-4 bg-red-500"></div>
                <div className="flex space-x-6 -mt-1">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-700"></div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-700"></div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'tokens':
        return (
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-12 bg-yellow-200 rounded-t-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-blue-400"></div>
              ))}
            </div>
          </div>
        );
      default:
        return <Dice5 className="w-16 h-16 text-blue-500" />;
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
          <h1 className="text-3xl font-bold mb-2">Multiplicación y División - Intermedio</h1>
          <p className="text-gray-700">Resuelve problemas con multiplicación y división</p>
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
                  <p className="text-green-600 font-bold text-lg">¡Puntuación Perfecta! ¡Has dominado la multiplicación y división intermedia!</p>
                </div>
              ) : (
                <p className="mb-6">Sigue practicando - ¡lo estás haciendo muy bien!</p>
              )}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={resetQuiz}
                  // className="kid-button bg-kid-yellow"
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
                    Nivel 2 · Intermedio
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
                    // className="kid-button bg-kid-yellow"
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

export default MathMultDivLevel2;
