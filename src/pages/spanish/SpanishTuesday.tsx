
import React from 'react';
import { FlaskConical } from 'lucide-react';
import Header from '@/components/Header';
import SpanishLesson from '@/components/spanish/SpanishLesson';

const SpanishTuesday = () => {
  const scienceQuestions = [
    {
      id: 1,
      question: "¿Por qué Timmy y Laura usaron guantes y gafas durante el experimento?",
      options: [
        { id: "A", text: "Porque querían parecerse a los bomberos" },
        { id: "B", text: "Porque iban a limpiar la clase" },
        { id: "C", text: "Porque necesitaban protegerse durante el experimento" },
        { id: "D", text: "Porque les daba frío" },
      ],
      correctAnswer: "C",
    },
    {
      id: 2,
      question: "¿Qué sucede cuando se mezcla vinagre con bicarbonato de sodio?",
      options: [
        { id: "A", text: "Se forma una espuma blanca y burbujeante" },
        { id: "B", text: "Cambia de color" },
        { id: "C", text: "Se vuelve sólido" },
        { id: "D", text: "Desaparece por completo" },
      ],
      correctAnswer: "A",
    },
    {
      id: 3,
      question: "¿Qué gas se crea durante el experimento?",
      options: [
        { id: "A", text: "Oxígeno" },
        { id: "B", text: "Dióxido de carbono" },
        { id: "C", text: "Hidrógeno" },
        { id: "D", text: "Vapor de agua" },
      ],
      correctAnswer: "B",
    },
    {
      id: 4,
      question: "¿Cómo se sintió Timmy al hacer el experimento?",
      options: [
        { id: "A", text: "Aburrido" },
        { id: "B", text: "Como un verdadero científico" },
        { id: "C", text: "Cansado" },
        { id: "D", text: "Muy confundido" },
      ],
      correctAnswer: "B",
    },
    {
      id: 5,
      question: "¿Qué escribió Timmy en su cuaderno después del experimento?",
      options: [
        { id: "A", text: "Que la ciencia puede ser divertida y sorprendente" },
        { id: "B", text: "Que no le gustó la ciencia" },
        { id: "C", text: "Que prefiere la magia" },
        { id: "D", text: "Que fue un desastre" },
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
            Primero lee la historia "El experimento de ciencias" de tu cartilla análoga y después responde las preguntas.
          </p>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8">El experimento de ciencias</h1>
        
        <SpanishLesson
          title="El experimento de ciencias"
          icon={<FlaskConical className="h-8 w-8 text-orange-500" />}
          questions={scienceQuestions}
          activityTitle="¡Experimento de ciencias!"
          activityDescription="Con ayuda de un adulto, repite el experimento en casa mezclando bicarbonato de sodio con vinagre. Dibuja o escribe qué ocurrió durante el experimento."
        />
      </main>
    </div>
  );
};

export default SpanishTuesday;
