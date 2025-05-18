
import Header from '@/components/Header';
import { useAnglesQuiz } from '@/hooks/useAnglesQuiz';
import { angleQuestions } from '@/components/math/angles/QuestionsData';
import QuizHeader from '@/components/math/angles/QuizHeader';
import AngleQuestion from '@/components/math/angles/AngleQuestion';
import ResultsCard from '@/components/math/angles/ResultsCard';

const MathAngleLevel2 = () => {
  const { 
    currentQuestion,
    selectedAnswer,
    score,
    showResults,
    attemptCount,
    handleAnswerSelect,
    handleSubmit,
    resetQuiz
  } = useAnglesQuiz(angleQuestions);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-green">
      <Header />
      
      <main className="kid-container">
        <QuizHeader 
          currentQuestion={currentQuestion}
          totalQuestions={angleQuestions.length}
        />

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {showResults ? (
            <ResultsCard 
              score={score}
              totalQuestions={angleQuestions.length}
              onReset={resetQuiz}
            />
          ) : (
            <AngleQuestion 
              question={angleQuestions[currentQuestion]}
              selectedAnswer={selectedAnswer}
              attemptCount={attemptCount}
              onSelectAnswer={handleAnswerSelect}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default MathAngleLevel2;
