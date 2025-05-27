
import Header from '@/components/Header';
import EnglishLesson, { LessonContent } from '@/components/english/EnglishLesson';

const houseLessonContent: LessonContent = {
  grammar: {
    table: {
      headers: ['Subject', 'Verb "to be"', 'Example'],
      rows: [
        ['It', 'is', 'It is a bathroom.'],
        ['They', 'are', 'They are bedrooms.'],
        ['He', 'is', 'He is in the living room.'],
        ['She', 'is', 'She is in the kitchen.'],
      ],
    },
    questions: [
      {
        id: 1,
        question: '"It ___ the living room." Choose the correct form.',
        options: [
          { id: 'A', text: 'is' },
          { id: 'B', text: 'are' },
          { id: 'C', text: 'am' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 2,
        question: 'Choose the correct sentence.',
        options: [
          { id: 'A', text: 'They are in the kitchen.' },
          { id: 'B', text: 'They is in the kitchen.' },
          { id: 'C', text: 'They am in the kitchen.' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 3,
        question: 'What is the subject in: "She is in the bedroom."',
        options: [
          { id: 'A', text: 'She' },
          { id: 'B', text: 'bedroom' },
          { id: 'C', text: 'is' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: 'What is the verb in: "It is the bathroom."',
        options: [
          { id: 'A', text: 'bathroom' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'the' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  vocabulary: {
    words: [
      'Kitchen - Cocina',
      'Bedroom - Dormitorio',
      'Bathroom - Baño',
      'Living room - Sala de estar',
      'Garden - Jardín',
      'Garage - Garaje',
      'Chair - Silla',
      'Table - Mesa',
      'Bed - Cama',
      'Sofa - Sofá',
      'Lamp - Lámpara',
      'Window - Ventana',
    ],
    questions: [
      {
        id: 1,
        question: '¿Dónde cocinas?',
        options: [
          { id: 'A', text: 'In the bathroom' },
          { id: 'B', text: 'In the kitchen' },
          { id: 'C', text: 'In the garage' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Cuál de estos es una parte de la casa?',
        options: [
          { id: 'A', text: 'Chair' },
          { id: 'B', text: 'Sofa' },
          { id: 'C', text: 'Bedroom' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: '¿Cuál de estos NO está en la casa?',
        options: [
          { id: 'A', text: 'Tree' },
          { id: 'B', text: 'Table' },
          { id: 'C', text: 'Bed' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Qué usas para dormir?',
        options: [
          { id: 'A', text: 'A lamp' },
          { id: 'B', text: 'A bed' },
          { id: 'C', text: 'A fridge' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  reading: {
    story: "Anna's House\n\nAnna lives in a big house. She eats in the kitchen and sleeps in her bedroom. She watches TV in the living room with her cat. Her favorite room is the bathroom because it is blue.",
    questions: [
      {
        id: 1,
        question: '¿Dónde come Anna?',
        options: [
          { id: 'A', text: 'In the kitchen' },
          { id: 'B', text: 'In the living room' },
          { id: 'C', text: 'In the garden' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 2,
        question: '¿De qué color es el baño?',
        options: [
          { id: 'A', text: 'Red' },
          { id: 'B', text: 'Yellow' },
          { id: 'C', text: 'Blue' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: '¿Quién ve televisión con Anna?',
        options: [
          { id: 'A', text: 'Her dog' },
          { id: 'B', text: 'Her cat' },
          { id: 'C', text: 'Her brother' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: '¿Cuál habitación es la favorita de Anna?',
        options: [
          { id: 'A', text: 'The bedroom' },
          { id: 'B', text: 'The bathroom' },
          { id: 'C', text: 'The kitchen' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  listening: {
    videoId: 'NSxAcXwvIQs',
    questions: [
      {
        id: 1,
        question: '¿Qué parte de la casa se menciona en la canción?',
        options: [
          { id: 'A', text: 'Kitchen' },
          { id: 'B', text: 'Garage' },
          { id: 'C', text: 'Garden' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 2,
        question: '¿Qué hay al lado de la cocina en la canción?',
        options: [
          { id: 'A', text: 'The TV' },
          { id: 'B', text: 'The slide' },
          { id: 'C', text: 'The table' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 3,
        question: '¿Qué invita a hacer la canción?',
        options: [
          { id: 'A', text: 'Go to school' },
          { id: 'B', text: 'Clean the house' },
          { id: 'C', text: 'Come inside' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 4,
        question: '¿De qué trata la canción?',
        options: [
          { id: 'A', text: 'A zoo' },
          { id: 'B', text: 'A house' },
          { id: 'C', text: 'A forest' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
};

const EnglishHousePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      <main className="kid-container py-8">
        <EnglishLesson topic="House" content={houseLessonContent} />
      </main>
    </div>
  );
};

export default EnglishHousePage;
