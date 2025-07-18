
import React from 'react';
import { Flame } from 'lucide-react';
import Header from '@/components/Header';
import SpanishLesson from '@/components/spanish/SpanishLesson';

const SpanishMonday = () => {
  const dragonQuestions = [
    {
      id: 1,
      question: "¿Qué hizo especial al dibujo de Timmy?",
      options: [
        { id: "A", text: "Que lo colgó en la pared de su cuarto" },
        { id: "B", text: "Que su hermana también lo pintó con él" },
        { id: "C", text: "Que comenzó a moverse y cobró vida" },
        { id: "D", text: "Que se rompió cuando lo tocó" },
      ],
      correctAnswer: "C",
    },
    {
      id: 2,
      question: "¿Cómo se llamaba el dragón que dibujó Timmy?",
      options: [
        { id: "A", text: "Gus" },
        { id: "B", text: "Flamy" },
        { id: "C", text: "Azulito" },
        { id: "D", text: "Rojozón" },
      ],
      correctAnswer: "A",
    },
    {
      id: 3,
      question: "¿Qué pensó Timmy que olía la cueva del dragón?",
      options: [
        { id: "A", text: "A flores frescas" },
        { id: "B", text: "A galletas recién horneadas" },
        { id: "C", text: "A pastel de manzana" },
        { id: "D", text: "A sopa caliente" },
      ],
      correctAnswer: "B",
    },
    {
      id: 4,
      question: "¿Quién no pudo ver el dibujo moverse?",
      options: [
        { id: "A", text: "La mamá de Timmy" },
        { id: "B", text: "Su hermana" },
        { id: "C", text: "Su papá" },
        { id: "D", text: "El vecino" },
      ],
      correctAnswer: "B",
    },
    {
      id: 5,
      question: "¿Qué soñó Timmy esa noche?",
      options: [
        { id: "A", text: "Que estaba volando con Gus y dejando estrellas" },
        { id: "B", text: "Que el dragón desapareció" },
        { id: "C", text: "Que estaba pintando más dragones" },
        { id: "D", text: "Que se perdía en una cueva oscura" },
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
            Primero lee la historia "El dibujo mágico" de tu cartilla análoga y después responde las preguntas.
          </p>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8">El dibujo mágico</h1>
        
        <SpanishLesson
          title="El dibujo mágico"
          icon={<Flame className="h-8 w-8 text-orange-500" />}
          questions={dragonQuestions}
          activityTitle="¡Dibuja tu propio dragón mágico!"
          activityDescription="Dibuja un dragón que te gustaría que cobrara vida. ¿Qué colores tendría? ¿Qué poderes especiales tendría? ¿Cómo se llamaría?"
        />
      </main>
    </div>
  );
};

export default SpanishMonday;
