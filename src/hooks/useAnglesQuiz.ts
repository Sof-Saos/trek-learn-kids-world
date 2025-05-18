
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Question } from '@/components/math/angles/types';

export const useAnglesQuiz = (questions: Question[]) => {
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

  return {
    currentQuestion,
    selectedAnswer,
    score,
    showResults,
    attemptCount,
    handleAnswerSelect,
    handleSubmit,
    resetQuiz
  };
};
