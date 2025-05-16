
import Header from '@/components/Header';
import EnglishLesson, { LessonContent } from '@/components/english/EnglishLesson';

const animalsLessonContent: LessonContent = {
  grammar: {
    table: {
      headers: ['Subject', 'Verb "to be"', 'Example'],
      rows: [
        ['It', 'is', 'It is a cat.'],
        ['They', 'are', 'They are animals.'],
        ['He', 'is', 'He is a dog.'],
        ['She', 'is', 'She is a bird.'],
      ],
    },
    questions: [
      {
        id: 1,
        question: '"It ___ a lion." Choose the correct form.',
        options: [
          { id: 'A', text: 'are' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'am' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: 'Choose the correct sentence.',
        options: [
          { id: 'A', text: 'They is birds' },
          { id: 'B', text: 'They are birds' },
          { id: 'C', text: 'They am birds' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 3,
        question: 'Find the verb in: "It is a fish."',
        options: [
          { id: 'A', text: 'fish' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'a' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: 'Find the subject in: "She is a cat."',
        options: [
          { id: 'A', text: 'is' },
          { id: 'B', text: 'cat' },
          { id: 'C', text: 'She' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
  vocabulary: {
    words: [
      'Dog - Perro',
      'Cat - Gato',
      'Bird - Pájaro',
      'Fish - Pez',
      'Rabbit - Conejo',
      'Monkey - Mono',
      'Lion - León',
      'Tiger - Tigre',
      'Snake - Serpiente',
      'Elephant - Elefante',
      'Cow - Vaca',
      'Horse - Caballo',
    ],
    questions: [
      {
        id: 1,
        question: '¿Cuál de estos es un animal de granja?',
        options: [
          { id: 'A', text: 'Cow' },
          { id: 'B', text: 'Lion' },
          { id: 'C', text: 'Shark' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 2,
        question: '¿Qué animal puede volar?',
        options: [
          { id: 'A', text: 'Bird' },
          { id: 'B', text: 'Rabbit' },
          { id: 'C', text: 'Horse' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 3,
        question: '¿Qué animal vive en el agua?',
        options: [
          { id: 'A', text: 'Fish' },
          { id: 'B', text: 'Dog' },
          { id: 'C', text: 'Chicken' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Cuál NO es un animal?',
        options: [
          { id: 'A', text: 'Elephant' },
          { id: 'B', text: 'Pencil' },
          { id: 'C', text: 'Monkey' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  reading: {
    story: "At the Zoo\n\nTom goes to the zoo. He sees a big elephant, a jumping monkey, and a long snake. His favorite animal is the tiger because it is fast and strong.",
    questions: [
      {
        id: 1,
        question: '¿A dónde va Tom?',
        options: [
          { id: 'A', text: 'A la escuela' },
          { id: 'B', text: 'Al zoológico' },
          { id: 'C', text: 'Al parque' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Qué animal está saltando?',
        options: [
          { id: 'A', text: 'Monkey' },
          { id: 'B', text: 'Elephant' },
          { id: 'C', text: 'Snake' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 3,
        question: '¿Qué animal es largo?',
        options: [
          { id: 'A', text: 'Tiger' },
          { id: 'B', text: 'Snake' },
          { id: 'C', text: 'Bird' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: '¿Cuál es el animal favorito de Tom?',
        options: [
          { id: 'A', text: 'The lion' },
          { id: 'B', text: 'The tiger' },
          { id: 'C', text: 'The giraffe' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  listening: {
    videoId: 'pJm1lbpEAzE',
    questions: [
      {
        id: 1,
        question: '¿Qué hacen los animales en la canción?',
        options: [
          { id: 'A', text: 'Duermen' },
          { id: 'B', text: 'Saltan y corren' },
          { id: 'C', text: 'Cantan' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Cómo se describen los animales en la canción?',
        options: [
          { id: 'A', text: 'Gordos y perezosos' },
          { id: 'B', text: 'Grandes y pequeños' },
          { id: 'C', text: 'Rápidos y lentos' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 3,
        question: '¿Qué movimiento animal se menciona en la canción?',
        options: [
          { id: 'A', text: 'Volar' },
          { id: 'B', text: 'Arrastrarse' },
          { id: 'C', text: 'Nadar' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: '¿De qué trata la canción?',
        options: [
          { id: 'A', text: 'Frutas' },
          { id: 'B', text: 'Animales' },
          { id: 'C', text: 'Números' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
};

const EnglishAnimalsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      <main className="kid-container py-8">
        <EnglishLesson topic="Animals" content={animalsLessonContent} />
      </main>
    </div>
  );
};

export default EnglishAnimalsPage;
