
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Box, Plus, Minus } from 'lucide-react';
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
    question: "Un camión reparte 8 cajas y en cada caja hay 6 botellas. ¿Cuántas botellas hay en total?",
    image: "boxes",
    options: ["42", "48", "54"],
    correctAnswer: "48",
    explanation: "Si hay 8 cajas con 6 botellas en cada una, entonces: 8 × 6 = 48 botellas en total."
  },
  {
    id: 2,
    question: "En un torneo hay 36 jugadores y se arman equipos de 4. ¿Cuántos equipos se forman?",
    image: "teams",
    options: ["8", "9", "10"],
    correctAnswer: "9",
    explanation: "Si hay 36 jugadores en total y cada equipo tiene 4 jugadores, entonces: 36 ÷ 4 = 9 equipos."
  },
  {
    id: 3,
    question: "Si compras 3 paquetes de galletas con 12 galletas cada uno y comes 10, ¿cuántas te quedan?",
    image: "cookies",
    options: ["26", "30", "20"],
    correctAnswer: "26",
    explanation: "Tienes 3 × 12 = 36 galletas en total. Si comes 10, te quedan 36 - 10 = 26 galletas."
  },
  {
    id: 4,
    question: "Un teatro tiene 5 filas con 9 sillas cada una. Si 2 filas están vacías, ¿cuántas sillas están ocupadas?",
    image: "theater",
    options: ["27", "45", "36"],
    correctAnswer: "27",
    explanation: "El teatro tiene 5 × 9 = 45 sillas en total. Si 2 filas (2 × 9 = 18 sillas) están vacías, entonces hay 45 - 18 = 27 sillas ocupadas."
  },
  {
    id: 5,
    question: "Juan tiene 4 cajas con 8 pelotas cada una. Si reparte todas las pelotas entre 8 niños, ¿cuántas recibe cada niño?",
    image: "balls",
    options: ["4", "8", "6"],
    correctAnswer: "4",
    explanation: "Juan tiene 4 × 8 = 32 pelotas en total. Si las reparte entre 8 niños, cada niño recibe 32 ÷ 8 = 4 pelotas."
  }
];

const MathMultDivLevel3 = () => {
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
          <div className="flex flex-wrap justify-center gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-2 border-amber-700 p-1 rounded">
                <div className="grid grid-cols-3 grid-rows-2 gap-1">
                  {[...Array(6)].map((_, j) => (
                    <div key={j} className="w-3 h-6 bg-blue-400 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'teams':
        return (
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap justify-center gap-1">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-6 h-8 bg-blue-100 rounded-t-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Box className="w-5 h-5 text-gray-500" />
              <Plus className="w-4 h-4 text-gray-500 mx-1" />
              <Box className="w-5 h-5 text-gray-500" />
              <Plus className="w-4 h-4 text-gray-500 mx-1" />
              <Box className="w-5 h-5 text-gray-500" />
              <Plus className="w-4 h-4 text-gray-500 mx-1" />
              <Box className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        );
      case 'cookies':
        return (
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center space-x-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border-2 border-amber-300 rounded p-2">
                  <div className="grid grid-cols-4 grid-rows-3 gap-1">
                    {[...Array(12)].map((_, j) => (
                      <div key={j} className="w-3 h-3 rounded-full bg-amber-600"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <div className="border-2 border-red-300 p-1 rounded">
                <div className="grid grid-cols-5 grid-rows-2 gap-1">
                  {[...Array(10)].map((_, j) => (
                    <div key={j} className="w-3 h-3 rounded-full bg-amber-600"></div>
                  ))}
                </div>
              </div>
              <Minus className="mx-2 text-red-500" />
            </div>
          </div>
        );
      case 'theater':
        return (
          <div className="flex flex-col space-y-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`flex justify-center space-x-1 ${i >= 3 ? 'opacity-30' : ''}`}>
                {[...Array(9)].map((_, j) => (
                  <div key={j} className="w-4 h-4 bg-purple-400 rounded"></div>
                ))}
              </div>
            ))}
          </div>
        );
      case 'balls':
        return (
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-2 border-gray-300 rounded p-1">
                  <div className="grid grid-cols-2 grid-rows-4 gap-1">
                    {[...Array(8)].map((_, j) => (
                      <div key={j} className="w-4 h-4 rounded-full bg-orange-400"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-6 h-8 bg-blue-100 rounded-t-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
              ))}
            </div>
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
          <h1 className="text-3xl font-bold mb-2">Multiplicación y División - Avanzado</h1>
          <p className="text-gray-700">Resuelve problemas complejos de múltiples pasos</p>
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
                  <p className="text-green-600 font-bold text-lg">¡Puntuación Perfecta! ¡Has dominado la multiplicación y división avanzada!</p>
                </div>
              ) : (
                <p className="mb-6">Sigue practicando - ¡lo estás haciendo muy bien!</p>
              )}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={resetQuiz}
                  className="kid-button bg-kid-red"
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
                    className="kid-button bg-kid-red"
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

export default MathMultDivLevel3;
