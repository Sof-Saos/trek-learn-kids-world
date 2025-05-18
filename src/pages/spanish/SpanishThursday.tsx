
import React from 'react';
import { Bot } from 'lucide-react';
import Header from '@/components/Header';
import SpanishLesson from '@/components/spanish/SpanishLesson';

const SpanishThursday = () => {
  const robotQuestions = [
    {
      id: 1,
      question: "¿Por qué Timmy dice que Robi es un gran amigo?",
      options: [
        { id: "A", text: "Porque le ayuda a hacer travesuras" },
        { id: "B", text: "Porque Robi hace su tarea por él" },
        { id: "C", text: "Porque aprenden y se divierten juntos" },
      ],
      correctAnswer: "C",
    },
    {
      id: 2,
      question: "¿Qué hizo Timmy primero con las piezas del robot?",
      options: [
        { id: "A", text: "Las tiró al suelo" },
        { id: "B", text: "Siguió las instrucciones para armarlo" },
        { id: "C", text: "Las pintó" },
      ],
      correctAnswer: "B",
    },
    {
      id: 3,
      question: "¿Qué hizo Robi para ayudar a Timmy con su tarea?",
      options: [
        { id: "A", text: "Lanzó una pantalla con números y sumas" },
        { id: "B", text: "Escribió la tarea por él" },
        { id: "C", text: "Le dio un libro de matemáticas" },
      ],
      correctAnswer: "A",
    },
    {
      id: 4,
      question: "¿Qué dijo Robi cuando lo encendieron?",
      options: [
        { id: "A", text: "\"¡Hola, Timmy! ¿Qué vamos a hacer hoy?\"" },
        { id: "B", text: "\"¿Quieres jugar?\"" },
        { id: "C", text: "\"Adiós, Timmy\"" },
      ],
      correctAnswer: "A",
    },
    {
      id: 5,
      question: "¿Qué hicieron Timmy y Robi juntos?",
      options: [
        { id: "A", text: "Solo estudiaron matemáticas" },
        { id: "B", text: "Dibujaron, estudiaron, y jugaron" },
        { id: "C", text: "Salieron a pasear" },
      ],
      correctAnswer: "B",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-orange">
      <Header />
      
      <main className="kid-container pt-8">
        <div className="mb-8 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-md">
          <p className="text-amber-700 font-medium">
            Primero lee la historia "Mi amigo tecnológico" de tu cartilla análoga y después responde las preguntas.
          </p>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8">Mi amigo tecnológico</h1>
        
        <SpanishLesson
          title="Mi amigo tecnológico"
          icon={<Bot className="h-8 w-8 text-orange-500" />}
          questions={robotQuestions}
          activityTitle="¡Diseña tu robot!"
          activityDescription="Imagina tu propio robot. ¿Qué funciones tendría? ¿Cómo te ayudaría? Dibuja cómo sería y escribe qué cosas podría hacer."
        />
      </main>
    </div>
  );
};

export default SpanishThursday;
