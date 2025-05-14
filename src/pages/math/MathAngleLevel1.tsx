
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Question {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué tipo de ángulo se muestra en la imagen?",
    image: "angle-90-degrees.png", // Placeholder for an image of a right angle
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso", "Ángulo llano"],
    correctAnswer: "Ángulo recto"
  },
  {
    id: 2,
    question: "¿Cuántos grados hay en un ángulo recto?",
    options: ["45°", "90°", "180°", "360°"],
    correctAnswer: "90°"
  },
  {
    id: 3,
    question: "¿Cuál de estos es un ángulo agudo?",
    options: ["30°", "90°", "120°", "180°"],
    correctAnswer: "30°"
  },
];

const MathAngleLevel1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Mark Angles Level 2 as available in localStorage when quiz is completed successfully
    if (showResults && score === questions.length) {
      localStorage.setItem('math_angles_level2_unlocked', 'true');
    }
  }, [showResults, score, questions.length]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Por favor selecciona una respuesta",
        description: "Necesitas elegir una opción antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({
        title: "¡Correcto!",
        description: "¡Muy bien hecho! 🎉",
        variant: "default",
      });
      
      // Move to next question or show results
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAttemptCount(0);
      } else {
        setShowResults(true);
      }
    } else {
      setAttemptCount(attemptCount + 1);
      toast({
        title: "¡Incorrecto!",
        description: "Intenta de nuevo con otra respuesta.",
        variant: "destructive",
      });
      // Don't advance to next question, just clear selection
      setSelectedAnswer(null);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setAttemptCount(0);
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
          <h1 className="text-3xl font-bold mb-2">Ángulos - Nivel 1</h1>
          <p className="text-gray-700">Aprende a identificar y medir ángulos básicos</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
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
                  <p className="text-green-600 font-bold text-lg">¡Puntuación Perfecta! ¡Has dominado los ángulos básicos!</p>
                </div>
              ) : (
                <p className="mb-6">Sigue practicando - ¡lo estás haciendo muy bien!</p>
              )}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={resetQuiz}
                  className="kid-button bg-kid-purple"
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
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <p className="text-gray-500">La imagen del ángulo se mostrará aquí</p>
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
                     attemptCount === 2 ? "Revisa las opciones con cuidado." : 
                     "Pista: Recuerda lo que has aprendido sobre los ángulos."}
                  </p>
                </div>
              )}

              <div className="flex justify-center">
                <Button 
                  onClick={handleSubmit}
                  className="kid-button bg-kid-green"
                >
                  Enviar respuesta
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default MathAngleLevel1;
