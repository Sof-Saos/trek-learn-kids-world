
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
    question: "¿Qué significa 'madre' en inglés?",
    options: ["sister", "mother", "aunt", "grandmother"],
    correctAnswer: "mother",
    theme: "Familia"
  },
  {
    id: 2,
    question: "¿Qué significa 'perro' en inglés?",
    options: ["cat", "bird", "dog", "fish"],
    correctAnswer: "dog",
    theme: "Animales"
  },
  {
    id: 3,
    question: "¿Qué significa 'cocina' en inglés?",
    options: ["kitchen", "bedroom", "bathroom", "living room"],
    correctAnswer: "kitchen",
    theme: "Casa"
  },
  {
    id: 4,
    question: "¿Qué significa 'hermano' en inglés?",
    options: ["sister", "brother", "father", "cousin"],
    correctAnswer: "brother",
    theme: "Familia"
  },
  {
    id: 5,
    question: "¿Qué significa 'gato' en inglés?",
    options: ["dog", "cat", "mouse", "rabbit"],
    correctAnswer: "cat",
    theme: "Animales"
  }
];

const Spanish = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState("quiz");
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

    if (selectedAnswer === spanishQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({
        title: "¡Correcto!",
        description: "¡Muy bien hecho! 🎉",
        variant: "default",
      });
      
      // Move to next question or show results
      if (currentQuestion < spanishQuestions.length - 1) {
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
        description: `La respuesta correcta es "${spanishQuestions[currentQuestion].correctAnswer}"`,
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">¡Español!</h1>
          <p className="text-gray-700">¡Aprendamos español juntos!</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="quiz" className="text-lg">Cuestionarios</TabsTrigger>
            <TabsTrigger value="vocabulary" className="text-lg">Vocabulario</TabsTrigger>
          </TabsList>

          <TabsContent value="quiz" className="focus:outline-none">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {showResults ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">¡Terminado!</h2>
                  <p className="text-xl mb-4">
                    Tu puntuación: {score} de {spanishQuestions.length}
                  </p>
                  {score === spanishQuestions.length ? (
                    <div className="mb-6">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-12 h-12 text-green-500" />
                      </div>
                      <p className="text-green-600 font-bold text-lg">¡Perfecto! ¡Excelente trabajo!</p>
                    </div>
                  ) : (
                    <p className="mb-6">Sigue practicando - ¡lo estás haciendo muy bien!</p>
                  )}
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      onClick={resetQuiz}
                      className="kid-button bg-kid-orange"
                    >
                      Intentar de nuevo
                    </Button>
                    <Button 
                      onClick={() => setActiveTab("vocabulary")}
                      variant="outline"
                    >
                      Ver vocabulario
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">
                        Pregunta {currentQuestion + 1} de {spanishQuestions.length}
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
                  
                  {attemptCount > 0 && (
                    <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-md text-center">
                      <p className="text-orange-700">
                        {attemptCount === 1 ? "Intenta de nuevo. ¡Tú puedes!" : 
                         attemptCount === 2 ? "Revisa las opciones con cuidado." : 
                         "Pista: Revisa el vocabulario para esta palabra."}
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
          </TabsContent>

          <TabsContent value="vocabulary" className="focus:outline-none">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-kid-orange text-white p-4">
                  <h3 className="text-xl font-bold">Familia / Family</h3>
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
                  <h3 className="text-xl font-bold">Animales / Animals</h3>
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
                  <h3 className="text-xl font-bold">Casa / House</h3>
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
