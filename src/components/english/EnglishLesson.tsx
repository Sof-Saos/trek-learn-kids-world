
import { useState } from 'react';
import { HeadphonesIcon, BookOpen, BookIcon, Library, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface Question {
  id: number;
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
}

export interface LessonContent {
  grammar: {
    table: {
      headers: string[];
      rows: string[][];
    };
    questions: Question[];
  };
  vocabulary: {
    words: string[];
    questions: Question[];
  };
  reading: {
    story: string;
    questions: Question[];
  };
  listening: {
    videoId: string;
    questions: Question[];
  };
}

interface EnglishLessonProps {
  topic: string;
  content: LessonContent;
}

const EnglishLesson = ({ topic, content }: EnglishLessonProps) => {
  const [activeTab, setActiveTab] = useState('grammar');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | null>>({});
  const [showAnswers, setShowAnswers] = useState(false);

  const tabs = ['grammar', 'vocabulary', 'reading', 'listening'];
  
  const getNextTab = (currentTab: string): string => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      return tabs[currentIndex + 1];
    }
    return tabs[0]; // Loop back to first tab if at end
  };

  const handleTabChange = (nextTab: string) => {
    setActiveTab(nextTab);
    setShowAnswers(false);
  };

  const getContentForTab = () => {
    switch (activeTab) {
      case 'grammar':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-500" />
              Grammar
            </h3>
            
            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-blue-100">
                  <tr>
                    {content.grammar.table.headers.map((header, index) => (
                      <th key={index} className="py-2 px-4 text-left">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.grammar.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="py-2 px-4">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="space-y-4 mt-6">
              <h4 className="font-bold text-lg">Practice Questions</h4>
              {renderQuestions('grammar')}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => handleTabChange('vocabulary')}
                className="flex items-center gap-2 bg-kid-blue hover:bg-blue-600"
              >
                Next: Vocabulary <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );
      
      case 'vocabulary':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Library className="w-6 h-6 text-green-500" />
              Vocabulary
            </h3>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold mb-2">Key Words:</h4>
              <ul className="list-disc pl-5 grid grid-cols-2 gap-2">
                {content.vocabulary.words.map((word, index) => (
                  <li key={index} className="mb-1">{word}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 mt-6">
              <h4 className="font-bold text-lg">Practice Questions</h4>
              {renderQuestions('vocabulary')}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => handleTabChange('reading')}
                className="flex items-center gap-2 bg-kid-blue hover:bg-blue-600"
              >
                Next: Reading <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );
      
      case 'reading':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookIcon className="w-6 h-6 text-purple-500" />
              Reading
            </h3>
            
            <Card className="p-4">
              <div className="bg-soft-blue p-4 rounded-lg mb-4">
                <p className="whitespace-pre-line leading-relaxed">{content.reading.story}</p>
              </div>
            </Card>
            
            <div className="space-y-4 mt-6">
              <h4 className="font-bold text-lg">Comprehension Questions</h4>
              {renderQuestions('reading')}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => handleTabChange('listening')}
                className="flex items-center gap-2 bg-kid-blue hover:bg-blue-600"
              >
                Next: Listening <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );
      
      case 'listening':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <HeadphonesIcon className="w-6 h-6 text-amber-500" />
              Listening
            </h3>
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={`https://www.youtube.com/embed/${content.listening.videoId}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-lg shadow-lg w-full aspect-video"
              ></iframe>
            </div>
            
            <div className="space-y-4 mt-6">
              <h4 className="font-bold text-lg">Listening Questions</h4>
              {renderQuestions('listening')}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => handleTabChange('grammar')}
                className="flex items-center gap-2 bg-kid-blue hover:bg-blue-600"
              >
                Back to Start: Grammar <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );
      
      default:
        return <div>Select a lesson type</div>;
    }
  };

  const renderQuestions = (section: 'grammar' | 'vocabulary' | 'reading' | 'listening') => {
    const questions = content[section].questions;
    
    return (
      <div className="space-y-4">
        {questions.map((question, qIndex) => (
          <Card key={qIndex} className="overflow-hidden">
            <div className="bg-white p-4 border-b">
              <h5 className="font-bold text-lg mb-2">{question.question}</h5>
              
              <div className="space-y-2">
                {question.options.map((option) => {
                  const isSelected = selectedAnswers[`${section}-${question.id}`] === option.id;
                  const isCorrect = option.id === question.correctAnswer;
                  const showResult = showAnswers && isSelected;
                  
                  return (
                    <div 
                      key={option.id}
                      onClick={() => {
                        if (!showAnswers) {
                          setSelectedAnswers({
                            ...selectedAnswers,
                            [`${section}-${question.id}`]: option.id
                          });
                        }
                      }}
                      className={`
                        p-3 rounded-lg cursor-pointer transition-colors flex justify-between items-center
                        ${isSelected ? 'bg-blue-100 border border-blue-300' : 'bg-gray-50 hover:bg-gray-100'}
                        ${showResult && isCorrect ? 'bg-green-100 border border-green-500' : ''}
                        ${showResult && !isCorrect ? 'bg-red-100 border border-red-500' : ''}
                      `}
                    >
                      <span>{option.text}</span>
                      {showAnswers && isCorrect && (
                        <span className="text-green-500 font-bold">✓</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        ))}
        
        <div className="flex justify-end mt-4">
          <Button 
            onClick={() => setShowAnswers(!showAnswers)} 
            variant={showAnswers ? "outline" : "default"}
          >
            {showAnswers ? "Hide Answers" : "Check Answers"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {topic}
      </h2>

      <Tabs defaultValue="grammar" className="w-full" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="grammar" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Grammar</span>
          </TabsTrigger>
          <TabsTrigger value="vocabulary" className="flex items-center gap-2">
            <Library className="w-4 h-4" />
            <span>Vocabulary</span>
          </TabsTrigger>
          <TabsTrigger value="reading" className="flex items-center gap-2">
            <BookIcon className="w-4 h-4" />
            <span>Reading</span>
          </TabsTrigger>
          <TabsTrigger value="listening" className="flex items-center gap-2">
            <HeadphonesIcon className="w-4 h-4" />
            <span>Listening</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="border-0 p-0">
          {getContentForTab()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EnglishLesson;
