
import { useState } from 'react';
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
    question: "What is the Spanish word for 'school'?",
    options: ["casa", "escuela", "parque", "tienda"],
    correctAnswer: "escuela"
  },
  {
    id: 2,
    question: "In the story, what does Timmy eat for breakfast?",
    options: ["Cereal", "Toast", "Eggs", "Pancakes"],
    correctAnswer: "Cereal"
  },
  {
    id: 3,
    question: "What color is Timmy's backpack?",
    options: ["Azul (blue)", "Rojo (red)", "Verde (green)", "Amarillo (yellow)"],
    correctAnswer: "Azul (blue)"
  },
  {
    id: 4,
    question: "How does Timmy feel about his first day of school?",
    options: ["Feliz (happy)", "Triste (sad)", "Nervioso (nervous)", "Enojado (angry)"],
    correctAnswer: "Nervioso (nervous)"
  },
  {
    id: 5,
    question: "Who does Timmy meet at school?",
    options: ["Su primo (his cousin)", "Su amigo (his friend)", "Una nueva amiga (a new friend)", "Su profesor (his teacher)"],
    correctAnswer: "Una nueva amiga (a new friend)"
  },
];

const SpanishMonday = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "You need to choose an option before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({
        title: "¡Correcto!",
        description: "Great job! 🎉",
        variant: "default",
      });
    } else {
      toast({
        title: "¡Incorrecto!",
        description: `The correct answer is "${questions[currentQuestion].correctAnswer}"`,
        variant: "destructive",
      });
    }

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
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-orange">
      <Header />
      
      <main className="kid-container">
        <div className="flex items-center mb-4 mt-4">
          <Link to="/spanish" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to Spanish Path</span>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Monday with Timmy</h1>
          <p className="text-gray-700">Timmy's first day at school</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Book className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold">Reminder</h2>
            </div>
            
            <p className="text-center text-lg mb-4">
              Make sure to read "Monday: Timmy's First Day at School" in your 
              printed booklet before taking this quiz!
            </p>
            
            <div className="bg-soft-orange p-5 rounded-xl mb-6">
              <h3 className="font-bold mb-2 text-center">Key Vocabulary</h3>
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
                <h2 className="text-2xl font-bold mb-4">¡Quiz Completo!</h2>
                <p className="text-xl mb-4">
                  You scored {score} out of {questions.length}
                </p>
                {score >= 4 ? (
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-12 h-12 text-green-500" />
                    </div>
                    <p className="text-green-600 font-bold text-lg">¡Excelente! You've unlocked Tuesday's lesson!</p>
                  </div>
                ) : (
                  <p className="mb-6">Keep practicing - you need to score at least 4 points to unlock the next day!</p>
                )}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    onClick={resetQuiz}
                    className="kid-button bg-kid-orange"
                  >
                    Try Again
                  </Button>
                  {score >= 4 && (
                    <Link to="/spanish">
                      <Button variant="outline">
                        Back to Path
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
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-soft-orange">
                      Monday Quiz
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

                <div className="flex justify-center">
                  <Button 
                    onClick={handleSubmit}
                    className="kid-button bg-kid-orange"
                  >
                    Submit Answer
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
