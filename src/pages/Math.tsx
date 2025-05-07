
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const mathQuestions: Question[] = [
  {
    id: 1,
    question: "What is 5 + 3?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8"
  },
  {
    id: 2,
    question: "What is 10 - 4?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6"
  },
  {
    id: 3,
    question: "What is 2 × 3?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6"
  },
  {
    id: 4,
    question: "Which shape has 4 equal sides?",
    options: ["Rectangle", "Triangle", "Circle", "Square"],
    correctAnswer: "Square"
  },
  {
    id: 5,
    question: "What comes next? 2, 4, 6, ___",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8"
  }
];

const Math = () => {
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

    if (selectedAnswer === mathQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "Great job! 🎉",
        variant: "default",
      });
    } else {
      toast({
        title: "Not quite!",
        description: `The correct answer is ${mathQuestions[currentQuestion].correctAnswer}`,
        variant: "destructive",
      });
    }

    if (currentQuestion < mathQuestions.length - 1) {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-green">
      <Header />
      
      <main className="kid-container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Math Fun</h1>
          <p className="text-gray-700">Let's practice our math skills!</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {showResults ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
              <p className="text-xl mb-4">
                You scored {score} out of {mathQuestions.length}
              </p>
              {score === mathQuestions.length ? (
                <div className="mb-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-12 h-12 text-green-500" />
                  </div>
                  <p className="text-green-600 font-bold text-lg">Perfect Score! Amazing job!</p>
                </div>
              ) : (
                <p className="mb-6">Keep practicing - you're doing great!</p>
              )}
              <Button 
                onClick={resetQuiz}
                className="kid-button bg-kid-purple"
              >
                Try Again
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Question {currentQuestion + 1} of {mathQuestions.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    Score: {score}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {mathQuestions[currentQuestion].question}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {mathQuestions[currentQuestion].options.map((option) => (
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

              <div className="flex justify-center">
                <Button 
                  onClick={handleSubmit}
                  className="kid-button bg-kid-purple"
                >
                  Submit Answer
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Math;
