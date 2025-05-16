
import React from 'react';
import { Map } from 'lucide-react';
import Header from '@/components/Header';
import SpanishLesson from '@/components/spanish/SpanishLesson';

const SpanishFriday = () => {
  const treasureQuestions = [
    {
      id: 1,
      question: "¿Qué encontró Timmy mientras jugaba en el parque?",
      options: [
        { id: "A", text: "Una caja de juguetes" },
        { id: "B", text: "Un mapa del tesoro" },
        { id: "C", text: "Una botella con un mensaje" },
      ],
      correctAnswer: "B",
    },
    {
      id: 2,
      question: "¿Qué había dentro del cofre que encontró Timmy?",
      options: [
        { id: "A", text: "Monedas de oro" },
        { id: "B", text: "Monedas de chocolate" },
        { id: "C", text: "Juguetes" },
      ],
      correctAnswer: "B",
    },
    {
      id: 3,
      question: "¿Qué decía la nota que encontró en el cofre?",
      options: [
        { id: "A", text: "\"El tesoro está en otro lugar\"" },
        { id: "B", text: "\"El verdadero tesoro es la aventura que viviste\"" },
        { id: "C", text: "\"Comparte las monedas con tus amigos\"" },
      ],
      correctAnswer: "B",
    },
    {
      id: 4,
      question: "¿Qué hizo Timmy después de encontrar el cofre?",
      options: [
        { id: "A", text: "Se lo quedó para él" },
        { id: "B", text: "Corrió a buscar a sus amigos para compartir" },
        { id: "C", text: "Lo enterró de nuevo" },
      ],
      correctAnswer: "B",
    },
    {
      id: 5,
      question: "¿Qué fue lo más importante para Timmy en esta aventura?",
      options: [
        { id: "A", text: "Encontrar monedas de oro" },
        { id: "B", text: "Vivir una aventura con sus amigos" },
        { id: "C", text: "Ganar un premio" },
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
            Primero lee la historia "El Tesoro Perdido" de tu cartilla análoga y después responde las preguntas.
          </p>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8">El Tesoro Perdido</h1>
        
        <SpanishLesson
          title="El Tesoro Perdido"
          icon={<Map className="h-8 w-8 text-orange-500" />}
          questions={treasureQuestions}
          activityTitle="¡Crea tu mapa del tesoro!"
          activityDescription="Dibuja tu propio mapa del tesoro y escóndelo en tu casa para jugar con algún amigo o familiar. ¿Qué tesoro esconderás para encontrar?"
        />
      </main>
    </div>
  );
};

export default SpanishFriday;
