
import Header from '@/components/Header';
import { useAnglesQuiz } from '@/hooks/useAnglesQuiz';
import { basicAngleQuestions } from '@/components/math/angles/BasicQuestionsData';
import AngleQuestion from '@/components/math/angles/AngleQuestion';
import ResultsCard from '@/components/math/angles/ResultsCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MathAngleLevel1 = () => {
  const { 
    currentQuestion,
    selectedAnswer,
    score,
    showResults,
    attemptCount,
    handleAnswerSelect,
    handleSubmit,
    resetQuiz
  } = useAnglesQuiz(basicAngleQuestions);

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
          <h1 className="text-3xl font-bold mb-2">Conociendo los ángulos</h1>
          <p className="text-gray-700">Aprende los tipos básicos de ángulos</p>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Pregunta {currentQuestion + 1} de {basicAngleQuestions.length}
          </span>
          <span className="text-sm text-gray-500">
            Nivel 1 · Básico
          </span>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {showResults ? (
            <ResultsCard 
              score={score}
              totalQuestions={basicAngleQuestions.length}
              onReset={resetQuiz}
              nextLevelPath="/matematicas/angulos/2"
              nextLevelText="Ir al Nivel 2"
            />
          ) : (
            <AngleQuestion 
              question={basicAngleQuestions[currentQuestion]}
              selectedAnswer={selectedAnswer}
              attemptCount={attemptCount}
              onSelectAnswer={handleAnswerSelect}
              onSubmit={handleSubmit}
              hideImage={true}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default MathAngleLevel1;
