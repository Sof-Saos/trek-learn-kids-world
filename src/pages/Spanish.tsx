
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VocabularyItem {
  spanish: string;
  english: string;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  theme: string;
}

const familyVocabulary: VocabularyItem[] = [
  { spanish: "madre", english: "mother" },
  { spanish: "padre", english: "father" },
  { spanish: "hermano", english: "brother" },
  { spanish: "hermana", english: "sister" },
  { spanish: "abuelo", english: "grandfather" },
  { spanish: "abuela", english: "grandmother" },
];

const animalVocabulary: VocabularyItem[] = [
  { spanish: "perro", english: "dog" },
  { spanish: "gato", english: "cat" },
  { spanish: "pájaro", english: "bird" },
  { spanish: "pez", english: "fish" },
  { spanish: "caballo", english: "horse" },
  { spanish: "conejo", english: "rabbit" },
];

const houseVocabulary: VocabularyItem[] = [
  { spanish: "casa", english: "house" },
  { spanish: "cocina", english: "kitchen" },
  { spanish: "dormitorio", english: "bedroom" },
  { spanish: "baño", english: "bathroom" },
  { spanish: "sala", english: "living room" },
  { spanish: "jardín", english: "garden" },
];

const spanishQuestions: Question[] = [
  {
    id: 1,
    question: "What is 'madre' in English?",
    options: ["sister", "mother", "aunt", "grandmother"],
    correctAnswer: "mother",
    theme: "Family"
  },
  {
    id: 2,
    question: "What is 'perro' in English?",
    options: ["cat", "bird", "dog", "fish"],
    correctAnswer: "dog",
    theme: "Animals"
  },
  {
    id: 3,
    question: "What is 'cocina' in English?",
    options: ["kitchen", "bedroom", "bathroom", "living room"],
    correctAnswer: "kitchen",
    theme: "House"
  },
  {
    id: 4,
    question: "What is 'hermano' in English?",
    options: ["sister", "brother", "father", "cousin"],
    correctAnswer: "brother",
    theme: "Family"
  },
  {
    id: 5,
    question: "What is 'gato' in English?",
    options: ["dog", "cat", "mouse", "rabbit"],
    correctAnswer: "cat",
    theme: "Animals"
  }
];

const Spanish = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState("quiz");
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

    if (selectedAnswer === spanishQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({
        title: "¡Correcto!",
        description: "Great job! 🎉",
        variant: "default",
      });
    } else {
      toast({
        title: "¡Incorrecto!",
        description: `The correct answer is "${spanishQuestions[currentQuestion].correctAnswer}"`,
        variant: "destructive",
      });
    }

    if (currentQuestion < spanishQuestions.length - 1) {
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">¡Español!</h1>
          <p className="text-gray-700">Let's learn Spanish together!</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="quiz" className="text-lg">Quizzes</TabsTrigger>
            <TabsTrigger value="vocabulary" className="text-lg">Vocabulary</TabsTrigger>
          </TabsList>

          <TabsContent value="quiz" className="focus:outline-none">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {showResults ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">¡Terminado!</h2>
                  <p className="text-xl mb-4">
                    You scored {score} out of {spanishQuestions.length}
                  </p>
                  {score === spanishQuestions.length ? (
                    <div className="mb-6">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-12 h-12 text-green-500" />
                      </div>
                      <p className="text-green-600 font-bold text-lg">¡Perfecto! Amazing job!</p>
                    </div>
                  ) : (
                    <p className="mb-6">Keep practicing - you're doing great!</p>
                  )}
                  <Button 
                    onClick={resetQuiz}
                    className="kid-button bg-kid-orange"
                  >
                    Try Again
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">
                        Question {currentQuestion + 1} of {spanishQuestions.length}
                      </span>
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-soft-orange">
                        {spanishQuestions[currentQuestion].theme}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      {spanishQuestions[currentQuestion].question}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {spanishQuestions[currentQuestion].options.map((option) => (
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
          </TabsContent>

          <TabsContent value="vocabulary" className="focus:outline-none">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-kid-orange text-white p-4">
                  <h3 className="text-xl font-bold">Family / Familia</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {familyVocabulary.map((item) => (
                      <div key={item.spanish} className="border-b pb-2">
                        <p className="font-bold">{item.spanish}</p>
                        <p className="text-gray-700">{item.english}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-kid-orange text-white p-4">
                  <h3 className="text-xl font-bold">Animals / Animales</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {animalVocabulary.map((item) => (
                      <div key={item.spanish} className="border-b pb-2">
                        <p className="font-bold">{item.spanish}</p>
                        <p className="text-gray-700">{item.english}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-kid-orange text-white p-4">
                  <h3 className="text-xl font-bold">House / Casa</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {houseVocabulary.map((item) => (
                      <div key={item.spanish} className="border-b pb-2">
                        <p className="font-bold">{item.spanish}</p>
                        <p className="text-gray-700">{item.english}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Spanish;
