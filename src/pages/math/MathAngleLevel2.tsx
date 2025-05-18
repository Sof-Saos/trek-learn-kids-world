
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface Question {
  id: number;
  question: string;
  imageDescription: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué tipo de ángulo forma la esquina de esta mesa?",
    imageDescription: "Imagen de una mesa con esquina en ángulo recto",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo recto"
  },
  {
    id: 2,
    question: "¿Qué ángulo ves en la punta de esta rebanada de pizza?",
    imageDescription: "Imagen de una rebanada de pizza que forma un ángulo agudo",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 3,
    question: "Observa la apertura de la puerta: ¿qué ángulo está formando?",
    imageDescription: "Imagen de una puerta abierta formando un ángulo obtuso",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo obtuso"
  },
  {
    id: 4,
    question: "En este libro abierto, ¿qué ángulo forman sus páginas?",
    imageDescription: "Imagen de un libro abierto con las páginas formando un ángulo obtuso",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo obtuso"
  },
  {
    id: 5,
    question: "¿Qué tipo de ángulo forman las manecillas de este reloj marcando las 2 PM?",
    imageDescription: "Imagen de un reloj marcando las 2 PM con las manecillas formando ángulo agudo",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 6,
    question: "Fíjate en la punta de este cono de helado: ¿qué ángulo es?",
    imageDescription: "Imagen de un cono de helado cuya punta forma un ángulo agudo",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 7,
    question: "¿Qué ángulo ves en el extremo de este lápiz?",
    imageDescription: "Imagen de la punta de un lápiz que forma un ángulo agudo",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 8,
    question: "El respaldo de esta silla y el asiento: ¿qué ángulo forman?",
    imageDescription: "Imagen de una silla donde el respaldo y el asiento forman un ángulo recto",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo recto"
  },
  {
    id: 9,
    question: "¿Cómo es el ángulo de la engrapadora abierta en esta imagen?",
    imageDescription: "Imagen de una engrapadora abierta formando un ángulo obtuso",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo obtuso"
  },
  {
    id: 10,
    question: "¿Qué ángulo hay entre el poste y el semáforo?",
    imageDescription: "Imagen de un semáforo con un poste formando un ángulo recto",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo recto"
  },
  {
    id: 11,
    question: "¿Qué tipo de ángulo hay entre la escalera y el suelo?",
    imageDescription: "Imagen de una escalera apoyada en la pared formando un ángulo agudo con el suelo",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 12,
    question: "Fíjate en el brazo de este columpio: ¿qué ángulo forma?",
    imageDescription: "Imagen de un columpio con el brazo formando un ángulo obtuso",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo obtuso"
  },
  {
    id: 13,
    question: "¿Qué ángulo forman las alas de este avión de papel?",
    imageDescription: "Imagen de un avión de papel con sus alas formando un ángulo agudo",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 14,
    question: "Observa esta rampa: ¿qué ángulo forma con el piso?",
    imageDescription: "Imagen de una rampa formando un ángulo agudo con el piso",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 15,
    question: "¿Qué ángulo tiene el asiento de esta silla?",
    imageDescription: "Imagen de una silla con el asiento formando un ángulo recto con las patas",
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo recto"
  },
];

const MathAngleLevel2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Mark Angles Level 3 as available in localStorage when quiz is completed successfully
    if (showResults && score >= questions.length * 0.7) {  // 70% correct to unlock next level
      localStorage.setItem('math_angles_level3_unlocked', 'true');
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
          <h1 className="text-3xl font-bold mb-2">Ángulos - Nivel 2</h1>
          <p className="text-gray-700">Identifica ángulos en objetos cotidianos</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {showResults ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">¡Cuestionario Completo!</h2>
              <p className="text-xl mb-4">
                Tu puntuación: {score} de {questions.length}
              </p>
              {score >= questions.length * 0.7 ? (
                <div className="mb-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-12 h-12 text-green-500" />
                  </div>
                  <p className="text-green-600 font-bold text-lg">
                    ¡Has desbloqueado el Nivel 3! Ya puedes pasar a ángulos avanzados.
                  </p>
                </div>
              ) : (
                <p className="mb-6">
                  Sigue practicando para desbloquear el nivel avanzado. ¡Lo lograrás!
                </p>
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
                {score >= questions.length * 0.7 && (
                  <Link to="/matematicas/angulos/3">
                    <Button className="kid-button bg-kid-purple">
                      Ir al Nivel 3
                    </Button>
                  </Link>
                )}
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
                
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6 relative">
                  <img 
                    src={`{placeholder_link}`} 
                    alt={questions[currentQuestion].imageDescription}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute bottom-2 right-2 bg-white/70 rounded-full p-1">
                    <Info size={16} className="text-gray-500" />
                  </div>
                  <p className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-100 bg-opacity-80">
                    {questions[currentQuestion].imageDescription}
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

export default MathAngleLevel2;
