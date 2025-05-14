
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Book } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es la palabra en español para 'school'?",
    options: ["casa", "escuela", "parque", "tienda"],
    correctAnswer: "escuela"
  },
  {
    id: 2,
    question: "En la historia, ¿qué come Timmy para el desayuno?",
    options: ["Cereal", "Pan tostado", "Huevos", "Panqueques"],
    correctAnswer: "Cereal"
  },
  {
    id: 3,
    question: "¿De qué color es la mochila de Timmy?",
    options: ["Azul", "Rojo", "Verde", "Amarillo"],
    correctAnswer: "Azul"
  },
  {
    id: 4,
    question: "¿Cómo se siente Timmy sobre su primer día de escuela?",
    options: ["Feliz", "Triste", "Nervioso", "Enojado"],
    correctAnswer: "Nervioso"
  },
  {
    id: 5,
    question: "¿A quién conoce Timmy en la escuela?",
    options: ["Su primo", "Su amigo", "Una nueva amiga", "Su profesor"],
    correctAnswer: "Una nueva amiga"
  },
];

const SpanishMonday = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Mark Tuesday as available in localStorage when quiz is completed
    if (showResults && score >= 4) {
      localStorage.setItem('spanish_tuesday_unlocked', 'true');
    }
  }, [showResults, score]);

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
        description: "¡Muy bien! 🎉",
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
        description: "Intenta de nuevo, ¡tú puedes hacerlo!",
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
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-orange">
      <Header />
      
      <main className="kid-container">
        <div className="flex items-center mb-4 mt-4">
          <Link to="/espanol" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Regresar al Camino</span>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Lunes con Timmy</h1>
          <p className="text-gray-700">El primer día de Timmy en la escuela</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Book className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold">Recordatorio</h2>
            </div>
            
            <p className="text-center text-lg mb-4">
              Asegúrate de leer "Lunes: El Primer Día de Timmy en la Escuela" 
              en tu folleto impreso antes de tomar esta prueba.
            </p>
            
            <div className="bg-soft-orange p-5 rounded-xl mb-6">
              <h3 className="font-bold mb-2 text-center">Vocabulario Clave</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded">escuela - school</div>
                <div className="bg-white p-2 rounded">maestro - teacher</div>
                <div className="bg-white p-2 rounded">estudiante - student</div>
                <div className="bg-white p-2 rounded">amigos - friends</div>
                <div className="bg-white p-2 rounded">nervioso - nervous</div>
                <div className="bg-white p-2 rounded">feliz - happy</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {showResults ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">¡Cuestionario Completo!</h2>
                <p className="text-xl mb-4">
                  Tu puntuación: {score} de {questions.length}
                </p>
                {score >= 4 ? (
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-12 h-12 text-green-500" />
                    </div>
                    <p className="text-green-600 font-bold text-lg">¡Excelente! ¡Has desbloqueado la lección del martes!</p>
                  </div>
                ) : (
                  <p className="mb-6">Sigue practicando - ¡necesitas obtener al menos 4 puntos para desbloquear el siguiente día!</p>
                )}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    onClick={resetQuiz}
                    className="kid-button bg-kid-orange"
                  >
                    Intentar de nuevo
                  </Button>
                  <Link to="/espanol">
                    <Button variant="outline">
                      Volver al Camino
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
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-soft-orange">
                      Cuestionario del Lunes
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 mb-6">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(option)}
                      className={`p-4 text-lg font-medium rounded-xl transition-all ${
                        selectedAnswer === option
                          ? 'bg-kid-orange text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {attemptCount > 0 && (
                  <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-md text-center">
                    <p className="text-orange-700">
                      {attemptCount === 1 ? "Intenta de nuevo. ¡Tú puedes!" : 
                       attemptCount === 2 ? "Revisa las opciones con cuidado." : 
                       "Pista: Revisa el vocabulario clave."}
                    </p>
                  </div>
                )}

                <div className="flex justify-center">
                  <Button 
                    onClick={handleSubmit}
                    className="kid-button bg-kid-orange"
                  >
                    Enviar respuesta
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpanishMonday;
