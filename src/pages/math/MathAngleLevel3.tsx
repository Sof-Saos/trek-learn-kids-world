
import { useState } from 'react';
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
    question: "El ángulo mostrado mide 120°. ¿Qué tipo de ángulo es?",
    image: "angle-120-degrees.png", // Placeholder for the image
    options: ["Ángulo obtuso", "Ángulo agudo", "Ángulo recto"],
    correctAnswer: "Ángulo obtuso"
  },
  {
    id: 2,
    question: "Compara estos dos ángulos: uno mide 45° y el otro 135°. ¿Cuál afirmación es correcta?",
    image: "angle-comparison.png", // Placeholder for the image
    options: ["45° > 135°", "45° = 135°", "45° < 135°"],
    correctAnswer: "45° < 135°"
  },
  {
    id: 3,
    question: "Un ángulo se mide como 270°. ¿Qué tipo de ángulo es?",
    image: "angle-270-degrees.png", // Placeholder for the image
    options: ["Ángulo recto", "Ángulo reflejo", "Ángulo llano"],
    correctAnswer: "Ángulo reflejo"
  },
  {
    id: 4,
    question: "Si sumas un ángulo de 60° y otro de 30°, ¿cuál es la medida del ángulo resultante?",
    image: "angle-addition.png", // Placeholder for the image
    options: ["90°", "120°", "45°"],
    correctAnswer: "90°"
  },
  {
    id: 5,
    question: "¿Cuál de estos pares de ángulos son suplementarios (suman 180°)?",
    image: "angle-supplementary.png", // Placeholder for the image
    options: ["30° y 150°", "45° y 90°", "100° y 100°"],
    correctAnswer: "30° y 150°"
  },
];

const MathAngleLevel3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const { toast } = useToast();

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
          <h1 className="text-3xl font-bold mb-2">Ángulos - Nivel 3</h1>
          <p className="text-gray-700">Midiendo y comparando ángulos</p>
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
                  <p className="text-green-600 font-bold text-lg">¡Felicidades! ¡Has dominado todos los niveles de ángulos!</p>
                </div>
              ) : (
                <p className="mb-6">Sigue practicando - ¡estás progresando muy bien!</p>
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
                    Nivel 3 · Avanzado
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {questions[currentQuestion].question}
                </h2>
                
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <p className="text-gray-500">
                    La imagen del ángulo se mostrará aquí
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(option)}
                    className={`p-4 text-lg font-medium rounded-xl transition-all ${
                      selectedAnswer === option
                        ? 'bg-kid-purple text-white'
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
                    {attemptCount === 1 ? "¡Sigue intentándolo!" : 
                     attemptCount === 2 ? "Recuerda las propiedades de los ángulos." : 
                     "Pista: Observa con cuidado la medida del ángulo."}
                  </p>
                </div>
              )}

              <div className="flex justify-center">
                <Button 
                  onClick={handleSubmit}
                  className="kid-button bg-kid-purple"
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

export default MathAngleLevel3;
