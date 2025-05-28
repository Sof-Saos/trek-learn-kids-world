
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Music, ChevronDown, ChevronUp } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  theme: string;
  lyrics: string[];
  translation: string[];
  glossary: { word: string; definition: string; translation: string }[];
}

const songs: Song[] = [
  {
    id: 1,
    title: "My Family",
    theme: "Family",
    lyrics: [
      "Mother, father, sister, brother,",
      "We are family together.",
      "Grandma, grandpa, uncle, aunt,",
      "My family is what I want!",
      "",
      "I love my mom, I love my dad,",
      "With my family, I am glad!",
      "We play together, we laugh and sing,",
      "My family means everything!"
    ],
    translation: [
      "Madre, padre, hermana, hermano,",
      "Somos familia juntos.",
      "Abuela, abuelo, tío, tía,",
      "¡Mi familia es lo que quiero!",
      "",
      "Amo a mi mamá, amo a mi papá,",
      "¡Con mi familia, estoy feliz!",
      "Jugamos juntos, reímos y cantamos,",
      "¡Mi familia lo es todo!"
    ],
    glossary: [
      { word: "mother", definition: "female parent", translation: "madre" },
      { word: "father", definition: "male parent", translation: "padre" },
      { word: "sister", definition: "female sibling", translation: "hermana" },
      { word: "brother", definition: "male sibling", translation: "hermano" },
      { word: "together", definition: "with each other", translation: "juntos" },
      { word: "grandma", definition: "mother's or father's mother", translation: "abuela" }
    ]
  },
  {
    id: 2,
    title: "Animals All Around",
    theme: "Animals",
    lyrics: [
      "Dogs go woof and cats go meow,",
      "Birds fly high and cows say 'moo'!",
      "Fish swim fast, sheep go 'baa',",
      "Animals all around, near and far!",
      "",
      "Horses gallop, rabbits hop,",
      "Frogs jump high, then they stop.",
      "Snakes slither, lions roar,",
      "So many animals to explore!"
    ],
    translation: [
      "Los perros hacen 'guau' y los gatos 'miau',",
      "¡Los pájaros vuelan alto y las vacas dicen 'muu'!",
      "Los peces nadan rápido, las ovejas hacen 'bee',",
      "¡Animales por todas partes, cerca y lejos!",
      "",
      "Los caballos galopan, los conejos saltan,",
      "Las ranas saltan alto, luego se detienen.",
      "Las serpientes se deslizan, los leones rugen,",
      "¡Tantos animales para explorar!"
    ],
    glossary: [
      { word: "dog", definition: "a domestic animal, often kept as a pet", translation: "perro" },
      { word: "cat", definition: "a small furry animal with whiskers", translation: "gato" },
      { word: "bird", definition: "an animal with feathers and wings", translation: "pájaro" },
      { word: "cow", definition: "a large farm animal that gives milk", translation: "vaca" },
      { word: "fish", definition: "an animal that lives in water", translation: "pez" },
      { word: "sheep", definition: "a farm animal with wool", translation: "oveja" }
    ],

    
  },
  {
    id: 3,
    title: "Animals All Around",
    theme: "Animals",
    lyrics: [
      "Dogs go woof and cats go meow,",
      "Birds fly high and cows say 'moo'!",
      "Fish swim fast, sheep go 'baa',",
      "Animals all around, near and far!",
      "",
      "Horses gallop, rabbits hop,",
      "Frogs jump high, then they stop.",
      "Snakes slither, lions roar,",
      "So many animals to explore!"
    ],
    translation: [
      "Los perros hacen 'guau' y los gatos 'miau',",
      "¡Los pájaros vuelan alto y las vacas dicen 'muu'!",
      "Los peces nadan rápido, las ovejas hacen 'bee',",
      "¡Animales por todas partes, cerca y lejos!",
      "",
      "Los caballos galopan, los conejos saltan,",
      "Las ranas saltan alto, luego se detienen.",
      "Las serpientes se deslizan, los leones rugen,",
      "¡Tantos animales para explorar!"
    ],
    glossary: [
      { word: "dog", definition: "a domestic animal, often kept as a pet", translation: "perro" },
      { word: "cat", definition: "a small furry animal with whiskers", translation: "gato" },
      { word: "bird", definition: "an animal with feathers and wings", translation: "pájaro" },
      { word: "cow", definition: "a large farm animal that gives milk", translation: "vaca" },
      { word: "fish", definition: "an animal that lives in water", translation: "pez" },
      { word: "sheep", definition: "a farm animal with wool", translation: "oveja" }
    ],

    
  }
];

const EnglishSongs = () => {
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const [showGlossary, setShowGlossary] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      
      <main className="kid-container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">English Songs</h1>
          <p className="text-gray-700">Learn English with fun and catchy songs!</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <h2 className="text-xl font-bold mb-4">Song List</h2>
              
              <div className="space-y-3">
                {songs.map((song) => (
                  <button
                    key={song.id}
                    onClick={() => setSelectedSong(song)}
                    className={`w-full flex items-center p-3 rounded-xl transition-colors ${
                      selectedSong.id === song.id
                        ? 'bg-kid-blue text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <Music className={`w-5 h-5 ${selectedSong.id === song.id ? 'text-white' : 'text-kid-blue'} mr-3`} />
                    <div className="text-left">
                      <p className="font-medium">{song.title}</p>
                      <p className={`text-sm ${selectedSong.id === song.id ? 'text-blue-100' : 'text-gray-500'}`}>
                        {song.theme}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card className="overflow-hidden">
              <div className="bg-kid-blue text-white p-4">
                <h2 className="text-xl font-bold">{selectedSong.title}</h2>
                <p className="text-sm">Theme: {selectedSong.theme}</p>
              </div>
              
              <div className="p-6">
                <div className="bg-soft-blue rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold mb-2">English Lyrics</h3>
                      {selectedSong.lyrics.map((line, index) => (
                        <p key={index} className={line === "" ? "mb-2" : "mb-1"}>
                          {line}
                        </p>
                      ))}
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2">Spanish Translation</h3>
                      {selectedSong.translation.map((line, index) => (
                        <p key={index} className={line === "" ? "mb-2" : "mb-1 text-gray-600"}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <button 
                    onClick={() => setShowGlossary(!showGlossary)}
                    className="flex items-center justify-between w-full bg-gray-100 hover:bg-gray-200 p-3 rounded-lg"
                  >
                    <span className="font-bold">Vocabulary Glossary</span>
                    {showGlossary ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  
                  {showGlossary && (
                    <div className="mt-4 grid grid-cols-1 gap-2">
                      {selectedSong.glossary.map((item, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-50 p-3 rounded-lg flex flex-col"
                        >
                          <div className="flex justify-between">
                            <span className="font-bold">{item.word}</span>
                            <span className="text-kid-blue">{item.translation}</span>
                          </div>
                          <p className="text-sm text-gray-600">{item.definition}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnglishSongs;
