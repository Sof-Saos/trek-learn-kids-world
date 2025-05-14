
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Headphones, Book, Search, Check, X } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { toast } from "@/components/ui/use-toast";

const EnglishFamily = () => {
  const [activeTab, setActiveTab] = useState("listening");
  const [listeningAnswers, setListeningAnswers] = useState({
    exercise1: null,
    exercise2: null
  });
  const [readingAnswers, setReadingAnswers] = useState({
    question1: null,
    question2: null
  });
  const [vocabularyAnswers, setVocabularyAnswers] = useState({
    mother: '',
    father: '',
    sister: ''
  });

  // Answer handling for listening exercises
  const handleListeningAnswer = (exercise, answer, isCorrect) => {
    if (isCorrect) {
      setListeningAnswers(prev => ({ ...prev, [exercise]: answer }));
      toast({
        title: "¡Respuesta correcta!",
        description: "Muy bien hecho.",
        duration: 2000,
      });
    } else {
      toast({
        title: "Inténtalo de nuevo",
        description: "Esa no es la respuesta correcta.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  // Answer handling for reading exercises
  const handleReadingAnswer = (question, answer, isCorrect) => {
    if (isCorrect) {
      setReadingAnswers(prev => ({ ...prev, [question]: answer }));
      toast({
        title: "¡Respuesta correcta!",
        description: "Muy bien hecho.",
        duration: 2000,
      });
    } else {
      toast({
        title: "Inténtalo de nuevo",
        description: "Esa no es la respuesta correcta.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  // Answer handling for vocabulary exercise
  const handleVocabularyAnswer = (word, translation) => {
    setVocabularyAnswers(prev => ({ ...prev, [word]: translation }));
    
    // Check if the translation is correct
    const correctTranslations = {
      mother: 'Madre',
      father: 'Padre',
      sister: 'Hermana',
    };
    
    if (correctTranslations[word] === translation) {
      toast({
        title: "¡Respuesta correcta!",
        description: "Muy bien hecho.",
        duration: 2000,
      });
    } else {
      toast({
        title: "Inténtalo de nuevo",
        description: "Esa no es la respuesta correcta.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const isExerciseCompleted = (exerciseId) => {
    if (exerciseId === 'listening') {
      return listeningAnswers.exercise1 !== null && listeningAnswers.exercise2 !== null;
    } else if (exerciseId === 'reading') {
      return readingAnswers.question1 !== null && readingAnswers.question2 !== null;
    } else if (exerciseId === 'vocabulary') {
      return vocabularyAnswers.mother === 'Madre' && 
             vocabularyAnswers.father === 'Padre' && 
             vocabularyAnswers.sister === 'Hermana';
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      
      <main className="kid-container">
        <div className="flex items-center mb-4 mt-4">
          <Link to="/english" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Volver a la Ruta de Inglés</span>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Familia</h1>
          <p className="text-gray-700">Aprende sobre los miembros de la familia y sus relaciones</p>
        </div>

        {/* Added recommendation banner */}
        <div className="mb-6 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-md max-w-4xl mx-auto">
          <p className="text-amber-700 font-medium">
            Te recomendamos resolver primero el rompecabezas con cubos y escanear el contenido oculto en realidad aumentada antes de comenzar el cuestionario.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="listening" className="text-lg">
              <Headphones className="w-4 h-4 mr-2" />
              Escuchar
            </TabsTrigger>
            <TabsTrigger value="reading" className="text-lg">
              <Book className="w-4 h-4 mr-2" />
              Leer
            </TabsTrigger>
            <TabsTrigger value="vocabulary" className="text-lg">
              <Search className="w-4 h-4 mr-2" />
              Vocabulario
            </TabsTrigger>
          </TabsList>

          {/* Listening Tab Content */}
          <TabsContent value="listening" className="focus:outline-none">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="aspect-video bg-gray-100 rounded-lg mb-8">
                {/* YouTube video embed placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">El video con letra se incorporará aquí</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-soft-blue p-5 rounded-xl">
                  <h3 className="font-bold text-xl mb-4">Ejercicio de Escucha 1</h3>
                  <p className="mb-4">Escucha la canción y responde la pregunta:</p>
                  <p className="font-medium mb-3">¿Quién es la persona más mayor de la familia?</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        listeningAnswers.exercise1 === 'grandmother' 
                          ? 'bg-green-100 hover:bg-green-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleListeningAnswer('exercise1', 'grandmother', true)}
                    >
                      <span>Abuela</span>
                      {listeningAnswers.exercise1 === 'grandmother' && <Check className="w-5 h-5 text-green-600" />}
                    </button>
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        listeningAnswers.exercise1 === 'father' 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleListeningAnswer('exercise1', 'father', false)}
                    >
                      <span>Padre</span>
                      {listeningAnswers.exercise1 === 'father' && <X className="w-5 h-5 text-red-600" />}
                    </button>
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        listeningAnswers.exercise1 === 'grandfather' 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleListeningAnswer('exercise1', 'grandfather', false)}
                    >
                      <span>Abuelo</span>
                      {listeningAnswers.exercise1 === 'grandfather' && <X className="w-5 h-5 text-red-600" />}
                    </button>
                  </div>
                </div>
                
                <div className="bg-soft-blue p-5 rounded-xl">
                  <h3 className="font-bold text-xl mb-4">Ejercicio de Escucha 2</h3>
                  <p className="mb-4">Escucha la canción y responde la pregunta:</p>
                  <p className="font-medium mb-3">¿Cuántas personas hay en la familia?</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        listeningAnswers.exercise2 === '5' 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleListeningAnswer('exercise2', '5', false)}
                    >
                      <span>5</span>
                      {listeningAnswers.exercise2 === '5' && <X className="w-5 h-5 text-red-600" />}
                    </button>
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        listeningAnswers.exercise2 === '6' 
                          ? 'bg-green-100 hover:bg-green-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleListeningAnswer('exercise2', '6', true)}
                    >
                      <span>6</span>
                      {listeningAnswers.exercise2 === '6' && <Check className="w-5 h-5 text-green-600" />}
                    </button>
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        listeningAnswers.exercise2 === '7' 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleListeningAnswer('exercise2', '7', false)}
                    >
                      <span>7</span>
                      {listeningAnswers.exercise2 === '7' && <X className="w-5 h-5 text-red-600" />}
                    </button>
                  </div>
                </div>
              </div>
              
              {isExerciseCompleted('listening') && (
                <div className="mt-8 text-center">
                  <Link to="/english">
                    <Button className="kid-button bg-kid-blue">
                      Volver a la Ruta
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Reading Tab Content */}
          <TabsContent value="reading" className="focus:outline-none">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="bg-soft-blue p-5 rounded-xl mb-8">
                <h3 className="font-bold text-xl mb-4">Mi Familia</h3>
                <p className="mb-3">
                  ¡Hola! Mi nombre es Emma. Quiero contarte sobre mi familia. Tengo una familia grande.
                  El nombre de mi madre es Sarah. Ella es profesora. El nombre de mi padre es John. Él es doctor.
                  Tengo un hermano llamado Tom. Él es menor que yo. Mis abuelos viven con nosotros también.
                  Mi abuela es muy amable. Ella hornea galletas para nosotros. Mi abuelo cuenta historias divertidas.
                  Tenemos un perro llamado Max. ¡Él también es parte de nuestra familia!
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-soft-blue p-5 rounded-xl">
                  <h3 className="font-bold text-xl mb-4">Comprensión de Lectura</h3>
                  <p className="font-medium mb-3">1. ¿Quién es el hermano de Emma?</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        readingAnswers.question1 === 'john' 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleReadingAnswer('question1', 'john', false)}
                    >
                      <span>John</span>
                      {readingAnswers.question1 === 'john' && <X className="w-5 h-5 text-red-600" />}
                    </button>
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        readingAnswers.question1 === 'tom' 
                          ? 'bg-green-100 hover:bg-green-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleReadingAnswer('question1', 'tom', true)}
                    >
                      <span>Tom</span>
                      {readingAnswers.question1 === 'tom' && <Check className="w-5 h-5 text-green-600" />}
                    </button>
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        readingAnswers.question1 === 'max' 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleReadingAnswer('question1', 'max', false)}
                    >
                      <span>Max</span>
                      {readingAnswers.question1 === 'max' && <X className="w-5 h-5 text-red-600" />}
                    </button>
                  </div>
                </div>
                
                <div className="bg-soft-blue p-5 rounded-xl">
                  <h3 className="font-bold text-xl mb-4">Comprensión de Lectura</h3>
                  <p className="font-medium mb-3">2. ¿Qué hace la abuela de Emma?</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        readingAnswers.question2 === 'stories' 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleReadingAnswer('question2', 'stories', false)}
                    >
                      <span>Cuenta historias divertidas</span>
                      {readingAnswers.question2 === 'stories' && <X className="w-5 h-5 text-red-600" />}
                    </button>
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        readingAnswers.question2 === 'cookies' 
                          ? 'bg-green-100 hover:bg-green-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleReadingAnswer('question2', 'cookies', true)}
                    >
                      <span>Hornea galletas</span>
                      {readingAnswers.question2 === 'cookies' && <Check className="w-5 h-5 text-green-600" />}
                    </button>
                    <button 
                      className={`p-4 text-lg font-medium rounded-xl transition-colors flex justify-between items-center ${
                        readingAnswers.question2 === 'teacher' 
                          ? 'bg-red-100 hover:bg-red-200' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      onClick={() => handleReadingAnswer('question2', 'teacher', false)}
                    >
                      <span>Es profesora</span>
                      {readingAnswers.question2 === 'teacher' && <X className="w-5 h-5 text-red-600" />}
                    </button>
                  </div>
                </div>
              </div>
              
              {isExerciseCompleted('reading') && (
                <div className="mt-8 text-center">
                  <Link to="/english">
                    <Button className="kid-button bg-kid-blue">
                      Volver a la Ruta
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Vocabulary Tab Content */}
          <TabsContent value="vocabulary" className="focus:outline-none">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="font-bold text-2xl mb-6 text-center">Vocabulario de la Familia</h3>
              
              <Carousel className="mb-8">
                <CarouselContent>
                  {[
                    { word: "Mother", spanish: "Madre", image: "👩" },
                    { word: "Father", spanish: "Padre", image: "👨" },
                    { word: "Sister", spanish: "Hermana", image: "👧" },
                    { word: "Brother", spanish: "Hermano", image: "👦" },
                    { word: "Grandmother", spanish: "Abuela", image: "👵" },
                    { word: "Grandfather", spanish: "Abuelo", image: "👴" },
                  ].map((item) => (
                    <CarouselItem key={item.word} className="md:basis-1/3">
                      <div className="p-4 text-center">
                        <div className="bg-soft-blue rounded-xl p-6">
                          <div className="text-5xl mb-4">{item.image}</div>
                          <h4 className="text-xl font-bold mb-1">{item.word}</h4>
                          <p className="text-gray-600">{item.spanish}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="position-static" />
                  <CarouselNext className="position-static" />
                </div>
              </Carousel>
              
              <div className="bg-soft-blue p-5 rounded-xl mt-8">
                <h3 className="font-bold text-xl mb-4">Ejercicio de Vocabulario</h3>
                <p className="font-medium mb-3">Conecta las palabras con su significado correcto:</p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <span className="font-medium">Mother</span>
                    <select 
                      className={`rounded-md border px-3 py-1 ${
                        vocabularyAnswers.mother === 'Madre' 
                          ? 'border-green-500 bg-green-50' 
                          : vocabularyAnswers.mother 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-300'
                      }`}
                      value={vocabularyAnswers.mother}
                      onChange={(e) => handleVocabularyAnswer('mother', e.target.value)}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Madre">Madre</option>
                      <option value="Padre">Padre</option>
                      <option value="Hermana">Hermana</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <span className="font-medium">Father</span>
                    <select 
                      className={`rounded-md border px-3 py-1 ${
                        vocabularyAnswers.father === 'Padre' 
                          ? 'border-green-500 bg-green-50' 
                          : vocabularyAnswers.father 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-300'
                      }`}
                      value={vocabularyAnswers.father}
                      onChange={(e) => handleVocabularyAnswer('father', e.target.value)}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Madre">Madre</option>
                      <option value="Padre">Padre</option>
                      <option value="Hermano">Hermano</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <span className="font-medium">Sister</span>
                    <select 
                      className={`rounded-md border px-3 py-1 ${
                        vocabularyAnswers.sister === 'Hermana' 
                          ? 'border-green-500 bg-green-50' 
                          : vocabularyAnswers.sister 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-300'
                      }`}
                      value={vocabularyAnswers.sister}
                      onChange={(e) => handleVocabularyAnswer('sister', e.target.value)}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Hermana">Hermana</option>
                      <option value="Hermano">Hermano</option>
                      <option value="Abuela">Abuela</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {isExerciseCompleted('vocabulary') && (
                <div className="mt-8 text-center">
                  <Link to="/english">
                    <Button className="kid-button bg-kid-blue">
                      Volver a la Ruta
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default EnglishFamily;
