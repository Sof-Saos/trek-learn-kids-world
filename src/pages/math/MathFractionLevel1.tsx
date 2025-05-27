
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
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
    question: "María cortó una manzana en 4 partes iguales y se comió una. ¿Qué fracción de la manzana se comió María?",
    image: "apple",
    options: ["1/2", "1/4", "1/3"],
    correctAnswer: "1/4",
    explanation: "Al dividir la manzana en 4 partes iguales, cada parte representa 1/4 del total."
  },
  {
    id: 2,
    question: "Pedro tiene una barra de chocolate dividida en 8 pedacitos. Si se come 2, ¿cuánto ha comido?",
    image: "chocolate",
    options: ["2/8", "1/2", "3/8"],
    correctAnswer: "2/8",
    explanation: "De 8 pedacitos totales, comió 2, por lo tanto comió 2/8 de la barra."
  },
  {
    id: 3,
    question: "En una pizza hay 6 porciones. Si Ana se comió 3, ¿qué fracción representa lo que comió?",
    image: "pizza",
    options: ["3/6", "1/3", "2/6"],
    correctAnswer: "3/6",
    explanation: "De 6 porciones totales, comió 3, por lo tanto comió 3/6 de la pizza."
  },
  {
    id: 4,
    question: "Luis pintó una figura dividida en 2 partes iguales, pero solo una parte está pintada. ¿Qué fracción está pintada?",
    image: "figure",
    options: ["1/2", "1/3", "2/2"],
    correctAnswer: "1/2",
    explanation: "De 2 partes totales, pintó 1, por lo tanto pintó 1/2 de la figura."
  },
  {
    id: 5,
    question: "Hay 10 globos y solo 5 son rojos. ¿Qué fracción de los globos son rojos?",
    image: "balloons",
    options: ["5/10", "4/10", "2/10"],
    correctAnswer: "5/10",
    explanation: "De 10 globos totales, 5 son rojos, por lo tanto 5/10 = 1/2 son rojos."
  }
];

const MathFractionLevel1 = () => {
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

  // Helper function to get the image URL for the current question
  const getImageUrl = (imageKey: string) => {
    const imageUrls = {
      apple: "/img/fractions/Manzana.png", 
      chocolate: "/img/fractions/Chocolate.png", 
      pizza: "/img/fractions/Pizza.png", 
      figure: "/img/fractions/Figurapintada.png", 
      balloons: "/img/fractions/Globos.png", 
    };
    return imageUrls[imageKey as keyof typeof imageUrls] || "";
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
          <h1 className="text-3xl font-bold mb-2">Fracciones - Nivel Básico</h1>
          <p className="text-gray-700">Aprende a identificar y comprender fracciones simples</p>
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
                  <p className="text-green-600 font-bold text-lg">¡Puntuación Perfecta! ¡Has dominado las fracciones básicas!</p>
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
                    <img 
                      src={getImageUrl(questions[currentQuestion].image!)}
                      alt={`Ilustración para la pregunta ${currentQuestion + 1}`}
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded-xl mx-auto"
                    />
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

export default MathFractionLevel1;
