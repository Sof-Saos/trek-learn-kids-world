
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Headphones, Book, Search } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const EnglishFamily = () => {
  const [activeTab, setActiveTab] = useState("listening");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      
      <main className="kid-container">
        <div className="flex items-center mb-4 mt-4">
          <Link to="/english" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to English Path</span>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Family</h1>
          <p className="text-gray-700">Learn about family members and relationships</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="listening" className="text-lg">
              <Headphones className="w-4 h-4 mr-2" />
              Listening
            </TabsTrigger>
            <TabsTrigger value="reading" className="text-lg">
              <Book className="w-4 h-4 mr-2" />
              Reading
            </TabsTrigger>
            <TabsTrigger value="vocabulary" className="text-lg">
              <Search className="w-4 h-4 mr-2" />
              Vocabulary
            </TabsTrigger>
          </TabsList>

          {/* Listening Tab Content */}
          <TabsContent value="listening" className="focus:outline-none">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="aspect-video bg-gray-100 rounded-lg mb-8">
                {/* YouTube video embed placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">YouTube video lyrics will be embedded here</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-soft-blue p-5 rounded-xl">
                  <h3 className="font-bold text-xl mb-4">Listening Exercise 1</h3>
                  <p className="mb-4">Listen to the song and answer the question:</p>
                  <p className="font-medium mb-3">Who is the oldest person in the family?</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      Grandmother
                    </button>
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      Father
                    </button>
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      Grandfather
                    </button>
                  </div>
                </div>
                
                <div className="bg-soft-blue p-5 rounded-xl">
                  <h3 className="font-bold text-xl mb-4">Listening Exercise 2</h3>
                  <p className="mb-4">Listen to the song and answer the question:</p>
                  <p className="font-medium mb-3">How many people are in the family?</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      5
                    </button>
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      6
                    </button>
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      7
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Reading Tab Content */}
          <TabsContent value="reading" className="focus:outline-none">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="bg-soft-blue p-5 rounded-xl mb-8">
                <h3 className="font-bold text-xl mb-4">My Family</h3>
                <p className="mb-3">
                  Hi! My name is Emma. I want to tell you about my family. I have a big family.
                  My mother's name is Sarah. She is a teacher. My father's name is John. He is a doctor.
                  I have one brother named Tom. He is younger than me. My grandparents live with us too.
                  My grandmother is very kind. She bakes cookies for us. My grandfather tells funny stories.
                  We have a dog named Max. He is part of our family too!
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-soft-blue p-5 rounded-xl">
                  <h3 className="font-bold text-xl mb-4">Reading Comprehension</h3>
                  <p className="font-medium mb-3">1. Who is Emma's brother?</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      John
                    </button>
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      Tom
                    </button>
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      Max
                    </button>
                  </div>
                </div>
                
                <div className="bg-soft-blue p-5 rounded-xl">
                  <h3 className="font-bold text-xl mb-4">Reading Comprehension</h3>
                  <p className="font-medium mb-3">2. What does Emma's grandmother do?</p>
                  
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      She tells funny stories
                    </button>
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      She bakes cookies
                    </button>
                    <button className="p-4 text-lg font-medium rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                      She is a teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Vocabulary Tab Content */}
          <TabsContent value="vocabulary" className="focus:outline-none">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="font-bold text-2xl mb-6 text-center">Family Vocabulary</h3>
              
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
                <h3 className="font-bold text-xl mb-4">Vocabulary Exercise</h3>
                <p className="font-medium mb-3">Connect the words to the right meanings:</p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <span className="font-medium">Mother</span>
                    <select className="rounded-md border border-gray-300 px-3 py-1">
                      <option value="">Select...</option>
                      <option value="madre">Madre</option>
                      <option value="padre">Padre</option>
                      <option value="hermana">Hermana</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <span className="font-medium">Father</span>
                    <select className="rounded-md border border-gray-300 px-3 py-1">
                      <option value="">Select...</option>
                      <option value="madre">Madre</option>
                      <option value="padre">Padre</option>
                      <option value="hermano">Hermano</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <span className="font-medium">Sister</span>
                    <select className="rounded-md border border-gray-300 px-3 py-1">
                      <option value="">Select...</option>
                      <option value="hermana">Hermana</option>
                      <option value="hermano">Hermano</option>
                      <option value="abuela">Abuela</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button className="kid-button bg-kid-blue">
                    Check Answers
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default EnglishFamily;
