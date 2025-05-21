
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Question } from '@/components/math/angles/types';

const angleProblems: Question[] = [
  {
    id: 1,
    image_url: "",
    question: "Un ángulo de 27° quiere convertirse en un ángulo llano. ¿Cuántos grados le faltan?",
    imageDescription: "",
    options: ["90°", "153°", "63°", "180°"],
    correctAnswer: "153°"
  },
  {
    id: 2,
    image_url: "",
    question: "Si un ángulo recto mide 90°, ¿cuánto mide la mitad de un ángulo recto?",
    imageDescription: "",
    options: ["30°", "45°", "60°", "180°"],
    correctAnswer: "45°"
  },
  {
    id: 3,
    image_url: "",
    question: "Un ángulo mide 135°. ¿Qué tipo de ángulo es?",
    imageDescription: "",
    options: ["Agudo", "Recto", "Obtuso", "Llano"],
    correctAnswer: "Obtuso"
  },
  {
    id: 4,
    image_url: "",
    question: "¿Cuántos grados más necesita un ángulo de 80° para volverse un ángulo recto?",
    imageDescription: "",
    options: ["20°", "10°", "15°", "5°"],
    correctAnswer: "10°"
  },
  {
    id: 5,
    image_url: "",
    question: "Un ángulo llano mide 180°. Si ya tienes un ángulo de 90°, ¿cuántos grados faltan para que sea llano?",
    imageDescription: "",
    options: ["45°", "60°", "90°", "180°"],
    correctAnswer: "90°"
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

    if (selectedAnswer === angleProblems[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({
        title: "¡Correcto!",
        description: "¡Muy bien hecho! 🎉",
        variant: "default",
      });
      
      // Move to next question or show results
      if (currentQuestion < angleProblems.length - 1) {
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
          <h1 className="text-3xl font-bold mb-2">Problemas con ángulos</h1>
          <p className="text-gray-700">Resuelve problemas basados en las propiedades de los ángulos</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {showResults ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">¡Cuestionario Completo!</h2>
              <p className="text-xl mb-4">
                Tu puntuación: {score} de {angleProblems.length}
              </p>
              {score === angleProblems.length ? (
                <div className="mb-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-12 h-12 text-green-500" />
                  </div>
                  <p className="text-green-600 font-bold text-lg">¡Eres un experto resolviendo problemas con ángulos! ¡Felicidades!</p>
                </div>
              ) : (
                <p className="mb-6">Sigue practicando para mejorar tu habilidad con los problemas de ángulos.</p>
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
                    Pregunta {currentQuestion + 1} de {angleProblems.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    Nivel 3 · Avanzado
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {angleProblems[currentQuestion].question}
                </h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        Recuerda: Un ángulo llano mide 180°, un ángulo recto mide 90°, los ángulos agudos son menores a 90° y los obtusos son mayores a 90° pero menores a 180°.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {angleProblems[currentQuestion].options.map((option) => (
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
                    {attemptCount === 1 ? "Intenta de nuevo. Piensa en las propiedades de los ángulos." : 
                     attemptCount === 2 ? "Recuerda cómo calcular ángulos complementarios y suplementarios." : 
                     "Pista: Para calcular el ángulo faltante, resta el ángulo dado del ángulo total que necesitas formar."}
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
