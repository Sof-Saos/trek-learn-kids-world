
import Header from '@/components/Header';
import EnglishLesson, { LessonContent } from '@/components/english/EnglishLesson';

const bodyLessonContent: LessonContent = {
  grammar: {
    table: {
      headers: ['Subject', 'Verb "to be"', 'Example'],
      rows: [
        ['It', 'is', 'It is a hand.'],
        ['They', 'are', 'They are legs.'],
        ['He', 'is', 'He is touching his ear.'],
        ['She', 'is', 'She is moving her arms.'],
      ],
    },
    questions: [
      {
        id: 1,
        question: '"They ___ feet." What is the correct form?',
        options: [
          { id: 'A', text: 'are' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'am' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 2,
        question: 'What is the subject in: "She is moving her arms"?',
        options: [
          { id: 'A', text: 'She' },
          { id: 'B', text: 'moving' },
          { id: 'C', text: 'arms' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 3,
        question: 'Choose the correct sentence.',
        options: [
          { id: 'A', text: 'It are a nose' },
          { id: 'B', text: 'It is a nose' },
          { id: 'C', text: 'It am a nose' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: 'What is the verb in: "He is touching his head"?',
        options: [
          { id: 'A', text: 'head' },
          { id: 'B', text: 'touching' },
          { id: 'C', text: 'his' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  vocabulary: {
    words: [
      'Head - Cabeza',
      'Eyes - Ojos',
      'Nose - Nariz',
      'Mouth - Boca',
      'Ears - Orejas',
      'Arms - Brazos',
      'Hands - Manos',
      'Legs - Piernas',
      'Feet - Pies',
      'Toes - Dedos del pie',
      'Fingers - Dedos de la mano',
      'Hair - Cabello',
    ],
    questions: [
      {
        id: 1,
        question: '¿Cuál de estos está en tu cara?',
        options: [
          { id: 'A', text: 'Nose' },
          { id: 'B', text: 'Leg' },
          { id: 'C', text: 'Foot' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 2,
        question: '¿Cuál de estos te ayuda a caminar?',
        options: [
          { id: 'A', text: 'Hands' },
          { id: 'B', text: 'Feet' },
          { id: 'C', text: 'Ears' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 3,
        question: '¿Qué usas para ver?',
        options: [
          { id: 'A', text: 'Eyes' },
          { id: 'B', text: 'Nose' },
          { id: 'C', text: 'Hands' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Qué parte está en la parte superior de tu cuerpo?',
        options: [
          { id: 'A', text: 'Head' },
          { id: 'B', text: 'Toes' },
          { id: 'C', text: 'Belly' },
        ],
        correctAnswer: 'A',
      },
    ],
  },
  reading: {
    story: "Tom's Body\n\nTom is a funny boy. He has big eyes and a little nose. He likes to run and jump. His legs are strong and his arms are fast. He always waves with his hands.",
    questions: [
      {
        id: 1,
        question: '¿Qué tiene Tom?',
        options: [
          { id: 'A', text: 'Big ears' },
          { id: 'B', text: 'Big eyes' },
          { id: 'C', text: 'Big feet' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Qué le gusta hacer a Tom?',
        options: [
          { id: 'A', text: 'Sleep' },
          { id: 'B', text: 'Run and jump' },
          { id: 'C', text: 'Eat' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 3,
        question: '¿Qué hace Tom con sus manos?',
        options: [
          { id: 'A', text: 'Write' },
          { id: 'B', text: 'Wave' },
          { id: 'C', text: 'Clap' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: '¿Qué parte de Tom es rápida?',
        options: [
          { id: 'A', text: 'His arms' },
          { id: 'B', text: 'His legs' },
          { id: 'C', text: 'His eyes' },
        ],
        correctAnswer: 'A',
      },
    ],
  },
  listening: {
    videoId: 'h4eueDYPTIg',
    questions: [
      {
        id: 1,
        question: '¿Qué dice la canción que podemos tocar?',
        options: [
          { id: 'A', text: 'Our shoes' },
          { id: 'B', text: 'Our head' },
          { id: 'C', text: 'Our eyes' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Qué parte movemos después de nuestros brazos en la canción?',
        options: [
          { id: 'A', text: 'Nose' },
          { id: 'B', text: 'Legs' },
          { id: 'C', text: 'Ears' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 3,
        question: '¿Qué tocamos después de nuestra cabeza?',
        options: [
          { id: 'A', text: 'Toes' },
          { id: 'B', text: 'Mouth' },
          { id: 'C', text: 'Hands' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿De qué trata la canción?',
        options: [
          { id: 'A', text: 'Clothes' },
          { id: 'B', text: 'Feelings' },
          { id: 'C', text: 'Body parts' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
};

const EnglishBodyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      <main className="kid-container py-8">
        <EnglishLesson topic="Body" content={bodyLessonContent} />
      </main>
    </div>
  );
};

export default EnglishBodyPage;
