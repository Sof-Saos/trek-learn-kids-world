
import Header from '@/components/Header';
import EnglishLesson, { LessonContent } from '@/components/english/EnglishLesson';

const emotionsLessonContent: LessonContent = {
  grammar: {
    table: {
      headers: ['Subject', 'Verb "to be"', 'Emotion example'],
      rows: [
        ['I', 'am', 'I am happy.'],
        ['She', 'is', 'She is sad.'],
        ['They', 'are', 'They are excited.'],
        ['He', 'is', 'He is angry.'],
      ],
    },
    questions: [
      {
        id: 1,
        question: '"I ___ happy." Choose the correct form.',
        options: [
          { id: 'A', text: 'is' },
          { id: 'B', text: 'am' },
          { id: 'C', text: 'are' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: 'Choose the sentence with the correct subject and verb.',
        options: [
          { id: 'A', text: 'They is happy.' },
          { id: 'B', text: 'He are angry.' },
          { id: 'C', text: 'She is sad.' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: 'What is the subject in "He is excited"?',
        options: [
          { id: 'A', text: 'excited' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'He' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 4,
        question: 'Complete: "They ___ scared."',
        options: [
          { id: 'A', text: 'are' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'am' },
        ],
        correctAnswer: 'A',
      },
    ],
  },
  vocabulary: {
    words: [
      'Happy - Feliz',
      'Sad - Triste',
      'Angry - Enojado',
      'Scared - Asustado',
      'Excited - Emocionado',
      'Bored - Aburrido',
      'Tired - Cansado',
      'Nervous - Nervioso',
      'Proud - Orgulloso',
      'Surprised - Sorprendido',
      'Calm - Tranquilo',
      'Shy - Tímido',
    ],
    questions: [
      {
        id: 1,
        question: '¿Qué significa "angry"?',
        options: [
          { id: 'A', text: 'Muy feliz' },
          { id: 'B', text: 'Muy enojado' },
          { id: 'C', text: 'Muy cansado' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: 'Si ganas un juego, puedes sentirte...',
        options: [
          { id: 'A', text: 'sad' },
          { id: 'B', text: 'scared' },
          { id: 'C', text: 'proud' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: '¿Cuál NO es una emoción?',
        options: [
          { id: 'A', text: 'Chair' },
          { id: 'B', text: 'Happy' },
          { id: 'C', text: 'Nervous' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Qué emoción sientes cuando sonríes?',
        options: [
          { id: 'A', text: 'Happy' },
          { id: 'B', text: 'Angry' },
          { id: 'C', text: 'Crying' },
        ],
        correctAnswer: 'A',
      },
    ],
  },
  reading: {
    story: "Emma's Day at the Park\n\nEmma is at the park. She sees a big dog and feels scared. Then the dog smiles and licks her hand. Emma laughs and feels happy. She plays with the dog all afternoon.",
    questions: [
      {
        id: 1,
        question: '¿Cómo se siente Emma cuando ve al perro?',
        options: [
          { id: 'A', text: 'Happy' },
          { id: 'B', text: 'Scared' },
          { id: 'C', text: 'Angry' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Qué hace el perro?',
        options: [
          { id: 'A', text: 'Barks' },
          { id: 'B', text: 'Sleeps' },
          { id: 'C', text: 'Smiles and licks her hand' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: '¿Cómo se siente Emma al final de la historia?',
        options: [
          { id: 'A', text: 'Happy' },
          { id: 'B', text: 'Sad' },
          { id: 'C', text: 'Bored' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Qué hace Emma con el perro?',
        options: [
          { id: 'A', text: 'She runs away' },
          { id: 'B', text: 'She plays with it' },
          { id: 'C', text: 'She feeds it' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  listening: {
    videoId: 'l4WNrvVjiTw',
    questions: [
      {
        id: 1,
        question: '¿Cómo nos sentimos a veces, según la canción?',
        options: [
          { id: 'A', text: 'Angry' },
          { id: 'B', text: 'Sleepy' },
          { id: 'C', text: 'Bored' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 2,
        question: '¿Qué emoción es lo opuesto a "sad" en la canción?',
        options: [
          { id: 'A', text: 'Mad' },
          { id: 'B', text: 'Happy' },
          { id: 'C', text: 'Sleepy' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 3,
        question: '¿Qué palabra NO está en la canción?',
        options: [
          { id: 'A', text: 'Glad' },
          { id: 'B', text: 'Sad' },
          { id: 'C', text: 'Sleepy' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 4,
        question: '¿Qué dice la canción sobre las emociones?',
        options: [
          { id: 'A', text: 'Siempre nos sentimos igual' },
          { id: 'B', text: 'Sentimos muchas cosas' },
          { id: 'C', text: 'Solo nos sentimos felices' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
};

const EnglishEmotionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      <main className="kid-container py-8">
        <EnglishLesson topic="Emotions" content={emotionsLessonContent} />
      </main>
    </div>
  );
};

export default EnglishEmotionsPage;
