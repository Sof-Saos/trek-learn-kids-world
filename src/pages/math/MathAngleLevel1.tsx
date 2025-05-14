
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
    question: "What type of angle is shown in the image?",
    image: "angle-90-degrees.png", // Placeholder for an image of a right angle
    options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
    correctAnswer: "Right angle"
  },
  {
    id: 2,
    question: "How many degrees are in a right angle?",
    options: ["45°", "90°", "180°", "360°"],
    correctAnswer: "90°"
  },
  {
    id: 3,
    question: "Which of these is an acute angle?",
    options: ["30°", "90°", "120°", "180°"],
    correctAnswer: "30°"
  },
];

const MathAngleLevel1 = () => {
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
        title: "Correct!",
        description: "Great job! 🎉",
        variant: "default",
      });
    } else {
      toast({
        title: "Not quite!",
        description: `The correct answer is ${questions[currentQuestion].correctAnswer}`,
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
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-green">
      <Header />
      
      <main className="kid-container">
        <div className="flex items-center mb-4 mt-4">
          <Link to="/math" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to Math Path</span>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Angles - Level 1</h1>
          <p className="text-gray-700">Learn to identify and measure basic angles</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {showResults ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
              <p className="text-xl mb-4">
                You scored {score} out of {questions.length}
              </p>
              {score === questions.length ? (
                <div className="mb-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-12 h-12 text-green-500" />
                  </div>
                  <p className="text-green-600 font-bold text-lg">Perfect Score! You've mastered basic angles!</p>
                </div>
              ) : (
                <p className="mb-6">Keep practicing - you're doing great!</p>
              )}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={resetQuiz}
                  className="kid-button bg-kid-purple"
                >
                  Try Again
                </Button>
                <Link to="/math">
                  <Button variant="outline">
                    Return to Path
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    Level 1 · Basic
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {questions[currentQuestion].question}
                </h2>
                
                {questions[currentQuestion].image && (
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <p className="text-gray-500">Angle image will be displayed here</p>
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

              <div className="flex justify-center">
                <Button 
                  onClick={handleSubmit}
                  className="kid-button bg-kid-green"
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

export default MathAngleLevel1;
