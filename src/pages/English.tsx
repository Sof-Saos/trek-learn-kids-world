
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ActivityCard from '@/components/ActivityCard';
import { Music, Book, Headphones, Search } from 'lucide-react';

const English = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      
      <main className="kid-container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">English Learning</h1>
          <p className="text-gray-700">Songs, grammar, quizzes, and listening activities</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <ActivityCard 
            title="Songs" 
            icon={<Music className="w-6 h-6 text-white" />} 
            color="#33C3F0" 
            to="/english/songs" 
          />
          
          <ActivityCard 
            title="Grammar" 
            icon={<Book className="w-6 h-6 text-white" />} 
            color="#33C3F0" 
            to="/english/grammar" 
          />
          
          <ActivityCard 
            title="Listening" 
            icon={<Headphones className="w-6 h-6 text-white" />} 
            color="#33C3F0" 
            to="/english/listening" 
          />
          
          <ActivityCard 
            title="Quizzes" 
            icon={<Search className="w-6 h-6 text-white" />} 
            color="#33C3F0" 
            to="/english/quizzes" 
          />
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Popular Activities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-soft-blue rounded-xl p-4 flex items-center gap-4">
                <div className="bg-kid-blue rounded-full p-3">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">My Family Song</h3>
                  <p className="text-sm text-gray-600">Learn family words with a catchy tune</p>
                </div>
              </div>
              
              <div className="bg-soft-blue rounded-xl p-4 flex items-center gap-4">
                <div className="bg-kid-blue rounded-full p-3">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Animals Quiz</h3>
                  <p className="text-sm text-gray-600">Test your knowledge of animal words</p>
                </div>
              </div>
              
              <div className="bg-soft-blue rounded-xl p-4 flex items-center gap-4">
                <div className="bg-kid-blue rounded-full p-3">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Body Parts</h3>
                  <p className="text-sm text-gray-600">Learn words for different body parts</p>
                </div>
              </div>
              
              <div className="bg-soft-blue rounded-xl p-4 flex items-center gap-4">
                <div className="bg-kid-blue rounded-full p-3">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">At School</h3>
                  <p className="text-sm text-gray-600">Listen to a story about school activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-4">Start with any activity to begin learning English!</p>
          <Link to="/english/songs">
            <button className="kid-button bg-kid-blue">
              Start with Songs
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default English;
