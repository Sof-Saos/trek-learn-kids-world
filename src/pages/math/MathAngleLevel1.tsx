
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
  imageDescription?: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cómo se llama un ángulo que mide 90°?",
    imageDescription: "Imagen de un ángulo recto de 90 grados",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo recto"
  },
  {
    id: 2,
    question: "¿Cuál ángulo es menor que 90°?",
    imageDescription: "Imagen de un ángulo agudo menor de 90 grados",
    options: ["Ángulo obtuso", "Ángulo recto", "Ángulo agudo"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 3,
    question: "¿Cuántos grados tiene un ángulo llano?",
    imageDescription: "Imagen de un ángulo llano de 180 grados",
    options: ["180°", "90°", "360°"],
    correctAnswer: "180°"
  },
  {
    id: 4,
    question: "¿Cómo se llama un ángulo mayor de 90° pero menor de 180°?",
    imageDescription: "Imagen de un ángulo obtuso entre 90 y 180 grados",
    options: ["Ángulo agudo", "Ángulo obtuso", "Ángulo reflejo"],
    correctAnswer: "Ángulo obtuso"
  },
  {
    id: 5,
    question: "¿Cuál de estos NO es un ángulo?",
    imageDescription: "Imagen comparativa de objetos con y sin ángulos",
    options: ["La apertura de un libro", "Una esquina de un cuadrado", "La curva de una regla"],
    correctAnswer: "La curva de una regla"
  },
];

const MathAngleLevel1 = () => {
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
          <h1 className="text-3xl font-bold mb-2">Conceptos y vocabulario de ángulos</h1>
          <p className="text-gray-700">Aprende los diferentes tipos de ángulos</p>
        </div>

        {/* Introduction section */}
        {!showResults && currentQuestion === 0 && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Tipos de Ángulos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Ángulo Agudo</h3>
                <p className="mb-3">Mide menos de 90 grados</p>
                <div className="aspect-square max-w-[120px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                  <img src="{placeholder}" alt="Ángulo agudo" className="max-h-full" />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Ángulo Recto</h3>
                <p className="mb-3">Mide exactamente 90 grados</p>
                <div className="aspect-square max-w-[120px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                  <img src="{placeholder}" alt="Ángulo recto" className="max-h-full" />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Ángulo Obtuso</h3>
                <p className="mb-3">Mide más de 90 pero menos de 180 grados</p>
                <div className="aspect-square max-w-[120px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                  <img src="{placeholder}" alt="Ángulo obtuso" className="max-h-full" />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Ángulo Llano</h3>
                <p className="mb-3">Mide exactamente 180 grados</p>
                <div className="aspect-square max-w-[120px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                  <img src="{placeholder}" alt="Ángulo llano" className="max-h-full" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={() => setCurrentQuestion(1)}
                className="kid-button bg-kid-green"
              >
                ¡Vamos a practicar!
              </Button>
            </div>
          </div>
        )}

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
                  <p className="text-green-600 font-bold text-lg">¡Puntuación Perfecta! ¡Felicidades!</p>
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
                <Link to="/matematicas/angulos/2">
                  <Button className="kid-button bg-kid-green">
                    Ir al Nivel 2
                  </Button>
                </Link>
              </div>
            </div>
          ) : currentQuestion > 0 ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Pregunta {currentQuestion} de {questions.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    Nivel 1 · Básico
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {questions[currentQuestion-1].question}
                </h2>
                
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <img 
                    src="{placeholder}" 
                    alt={questions[currentQuestion-1].imageDescription}
                    className="max-h-full"
                  />
                  <p className="text-center text-gray-500 text-sm mt-1">
                    {questions[currentQuestion-1].imageDescription}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {questions[currentQuestion-1].options.map((option) => (
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
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default MathAngleLevel1;
