
import React from 'react';
import { Campfire } from 'lucide-react';
import Header from '@/components/Header';
import SpanishLesson from '@/components/spanish/SpanishLesson';

const SpanishSaturday = () => {
  const campingQuestions = [
    {
      id: 1,
      question: "¿Qué estaban haciendo Timmy y su familia?",
      options: [
        { id: "A", text: "Yendo a la playa" },
        { id: "B", text: "Pasando la noche de camping en el bosque" },
        { id: "C", text: "Visitando un museo" },
      ],
      correctAnswer: "B",
    },
    {
      id: 2,
      question: "¿Qué ayudó a Timmy y su hermana a encontrar el camino de regreso al campamento?",
      options: [
        { id: "A", text: "Un mapa antiguo escondido en el bosque" },
        { id: "B", text: "Un grupo de luciérnagas que iluminaron el sendero" },
        { id: "C", text: "Los sonidos de los animales nocturnos" },
      ],
      correctAnswer: "B",
    },
    {
      id: 3,
      question: "¿Qué hicieron Timmy y su familia alrededor de la fogata?",
      options: [
        { id: "A", text: "Asaron malvaviscos y contaron historias" },
        { id: "B", text: "Se fueron a dormir rápido" },
        { id: "C", text: "Jugaron fútbol" },
      ],
      correctAnswer: "A",
    },
    {
      id: 4,
      question: "¿Qué sintió Timmy cuando escuchó un aullido en el bosque?",
      options: [
        { id: "A", text: "Miedo" },
        { id: "B", text: "Felicidad" },
        { id: "C", text: "Sueño" },
      ],
      correctAnswer: "A",
    },
    {
      id: 5,
      question: "¿Qué soñó Timmy esa noche?",
      options: [
        { id: "A", text: "Con más campamentos y valentía" },
        { id: "B", text: "Con dragones voladores" },
        { id: "C", text: "Con ser astronauta" },
      ],
      correctAnswer: "A",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-orange">
      <Header />
      
      <main className="kid-container pt-8">
        <div className="mb-8 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-md">
          <p className="text-amber-700 font-medium">
            Primero lee la historia "La Noche de Camping" de tu cartilla análoga y después responde las preguntas.
          </p>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8">La Noche de Camping</h1>
        
        <SpanishLesson
          title="La Noche de Camping"
          icon={<Campfire className="h-8 w-8 text-orange-500" />}
          questions={campingQuestions}
          activityTitle="¡Crea una historia de camping!"
          activityDescription="Dibuja una fogata y escribe una historia corta que contarías en una noche de camping. ¿Sería una historia de miedo, de aventura o divertida?"
        />
      </main>
    </div>
  );
};

export default SpanishSaturday;
