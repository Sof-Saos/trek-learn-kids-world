
import Header from '@/components/Header';
import PathView, { LessonNode } from '@/components/PathView';
import { Calendar, Book } from 'lucide-react';

const spanishNodes: LessonNode[] = [
  // Monday - Day 1
  {
    id: 'monday',
    title: 'Monday with Timmy',
    description: 'Timmy\'s first day at school',
    status: 'available',
    to: '/spanish/monday',
  },
  
  // Tuesday - Day 2
  {
    id: 'tuesday',
    title: 'Tuesday with Timmy',
    description: 'Timmy makes new friends',
    status: 'locked',
    to: '/spanish/tuesday',
  },
  
  // Wednesday - Day 3
  {
    id: 'wednesday',
    title: 'Wednesday with Timmy',
    description: 'Timmy faces a challenge',
    status: 'locked',
    to: '/spanish/wednesday',
  },
  
  // Thursday - Day 4
  {
    id: 'thursday',
    title: 'Thursday with Timmy',
    description: 'Timmy learns something new',
    status: 'locked',
    to: '/spanish/thursday',
  },
  
  // Friday - Day 5
  {
    id: 'friday',
    title: 'Friday with Timmy',
    description: 'Timmy celebrates with friends',
    status: 'locked',
    to: '/spanish/friday',
  },
];

const SpanishPath = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-orange">
      <Header />
      
      <main className="kid-container pt-8">
        <PathView 
          nodes={spanishNodes} 
          title="Spanish Learning Path" 
          subtitle="Follow Timmy through his week and learn Spanish" 
          pathColor="#F97316"
          pathBgColor="#FEC6A1"
        />
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center justify-center mb-6 gap-4">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <Book className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Timmy's Adventures</h3>
              <p className="text-gray-600">Read Timmy's story in your booklet first</p>
            </div>
          </div>
          
          <div className="bg-soft-orange p-5 rounded-xl">
            <h4 className="font-bold text-lg mb-2 text-center">How it works:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Read the corresponding day's story in your printed booklet</li>
              <li>Complete the quiz to test your understanding</li>
              <li>Unlock the next day's adventure after completing each quiz</li>
            </ol>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Complete one day at a time</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpanishPath;
