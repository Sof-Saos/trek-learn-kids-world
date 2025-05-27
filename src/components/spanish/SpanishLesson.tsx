
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Check, X } from 'lucide-react';

export interface Question {
  id: number;
  question: string;
  options: { id: string; text: string; }[];
  correctAnswer: string;
}

export interface SpanishLessonProps {
  title: string;
  icon: React.ReactNode;
  questions: Question[];
  activityTitle: string;
  activityDescription: string;
}

const SpanishLesson: React.FC<SpanishLessonProps> = ({ 
  title, 
  icon, 
  questions,
  activityTitle,
  activityDescription
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("quiz");
  const { toast } = useToast();

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      toast({
        title: "Selecciona una respuesta",
        description: "Por favor, elige una opción antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    
    // Update answered questions
    setAnsweredQuestions({
      ...answeredQuestions,
      [currentQuestion]: selectedAnswer
    });
    
    if (isCorrect) {
      toast({
        title: "¡Correcto!",
        description: "¡Muy bien! Esa es la respuesta correcta.",
        variant: "default",
      });
    } else {
      toast({
        title: "¡Incorrecto!",
        description: `La respuesta correcta es "${
          questions[currentQuestion].options.find(
            opt => opt.id === questions[currentQuestion].correctAnswer
          )?.text
        }"`,
        variant: "destructive",
      });
    }
    
    // Go to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnsweredQuestions({});
    setShowResults(false);
    setActiveTab("quiz");
  };
  
  const calculateScore = () => {
    let score = 0;
    Object.keys(answeredQuestions).forEach(questionIndex => {
      const index = parseInt(questionIndex);
      if (answeredQuestions[index] === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-soft-orange rounded-t-lg">
          <div className="flex items-center justify-center gap-3">
            {icon}
            <CardTitle className="text-2xl">{title}</CardTitle>
          </div>
        </CardHeader>
        
        <Tabs
          defaultValue="quiz"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quiz">Cuestionario</TabsTrigger>
            <TabsTrigger value="activity">Actividad</TabsTrigger>
          </TabsList>
          
          <TabsContent value="quiz" className="p-4">
            {showResults ? (
              <div className="text-center py-6">
                <h3 className="text-2xl font-bold mb-4">¡Has completado el cuestionario!</h3>
                <div className="mb-4">
                  <div className="text-5xl font-bold mb-2 text-kid-orange">
                    {calculateScore()} / {questions.length}
                  </div>
                  <p className="text-gray-600">Respuestas correctas</p>
                </div>
                
                {calculateScore() === questions.length ? (
                  <div className="bg-green-100 p-4 rounded-lg mb-6">
                    <div className="flex justify-center mb-2">
                      <div className="bg-green-200 p-2 rounded-full">
                        <Check className="h-8 w-8 text-green-700" />
                      </div>
                    </div>
                    <p className="text-green-700 font-medium">
                      ¡Excelente trabajo! Has respondido todas las preguntas correctamente.
                    </p>
                  </div>
                ) : (
                  <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                    <p className="text-yellow-700">
                      ¡Buen trabajo! Puedes intentarlo de nuevo para mejorar tu puntuación.
                    </p>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={resetQuiz} className="bg-kid-orange hover:bg-orange-600">
                    Intentar de nuevo
                  </Button>
                  <Button 
                    onClick={() => setActiveTab("activity")}
                    variant="outline"
                  >
                    Ver actividad
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Pregunta {currentQuestion + 1} de {questions.length}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold my-4">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswerSelect(option.id)}
                      className={`w-full p-4 text-left rounded-lg transition ${
                        selectedAnswer === option.id
                          ? 'bg-kid-orange text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="mr-3 font-bold">{option.id})</div>
                        <div>{option.text}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <Button 
                    onClick={handleSubmit}
                    className="bg-kid-orange hover:bg-orange-600"
                  >
                    {currentQuestion < questions.length - 1 
                      ? "Siguiente pregunta" 
                      : "Ver resultados"}
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="activity" className="p-6">
            <CardTitle className="text-xl mb-2">{activityTitle}</CardTitle>
            <CardDescription className="text-base mb-4">
              {activityDescription}
            </CardDescription>
            
            <div className="bg-soft-orange bg-opacity-30 p-4 rounded-lg">
              <p className="italic">
                Deja volar tu imaginación, ¡Comparte tu creación con tus padres, maestros y amigos!
              </p>
            </div>
            
            <CardFooter className="justify-center mt-6 px-0">
              <Button 
                onClick={() => setActiveTab("quiz")} 
                variant="outline"
              >
                Volver al cuestionario
              </Button>
            </CardFooter>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default SpanishLesson;
