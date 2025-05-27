
import Header from '@/components/Header';
import EnglishLesson, { LessonContent } from '@/components/english/EnglishLesson';

const familyLessonContent: LessonContent = {
  grammar: {
    table: {
      headers: ['Subject', 'Verb "to be"', 'Example'],
      rows: [
        ['I', 'am', 'I am a son/daughter.'],
        ['You', 'are', 'You are my brother.'],
        ['He', 'is', 'He is my father.'],
        ['She', 'is', 'She is my mother.'],
        ['It', 'is', 'It is a family photo.'],
        ['We', 'are', 'We are a family.'],
        ['You', 'are', 'You are my parents.'],
        ['They', 'are', 'They are my grandparents.'],
      ],
    },
    questions: [
      {
        id: 1,
        question: '"She ___ my sister."',
        options: [
          { id: 'A', text: 'am' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'are' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '"They ___ my parents."',
        options: [
          { id: 'A', text: 'is' },
          { id: 'B', text: 'am' },
          { id: 'C', text: 'are' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: '¿Cuál es el sujeto en: "He is my brother."?',
        options: [
          { id: 'A', text: 'He' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'brother' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Cuál es el verbo en: "We are a happy family."?',
        options: [
          { id: 'A', text: 'We' },
          { id: 'B', text: 'are' },
          { id: 'C', text: 'happy' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  vocabulary: {
    words: [
      'Mother - Madre',
      'Father - Padre',
      'Sister - Hermana',
      'Brother - Hermano',
      'Grandmother - Abuela',
      'Grandfather - Abuelo',
      'Aunt - Tía',
      'Uncle - Tío',
      'Cousin - Primo/a',
      'Daughter - Hija',
      'Son - Hijo',
      'Baby - Bebé',
    ],
    questions: [
      {
        id: 1,
        question: '¿Quién es la hermana de tu padre o madre?',
        options: [
          { id: 'A', text: 'Cousin' },
          { id: 'B', text: 'Aunt' },
          { id: 'C', text: 'Grandmother' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Cómo se dice "hija" en inglés?',
        options: [
          { id: 'A', text: 'Sister' },
          { id: 'B', text: 'Mother' },
          { id: 'C', text: 'Daughter' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: '¿Qué palabra NO es un miembro de la familia?',
        options: [
          { id: 'A', text: 'Teacher' },
          { id: 'B', text: 'Cousin' },
          { id: 'C', text: 'Uncle' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Quién es la madre de tu madre?',
        options: [
          { id: 'A', text: 'Grandmother' },
          { id: 'B', text: 'Aunt' },
          { id: 'C', text: 'Sister' },
        ],
        correctAnswer: 'A',
      },
    ],
  },
  reading: {
    story: "My Family\n\nHi! My name is Emma. I have a big family. My mother's name is Laura and my father's name is David. I have one sister and one brother. My sister's name is Sophia. She is 12 years old. My brother's name is James. He is 8 years old. I am 10 years old.\n\nMy grandparents live with us. My grandmother's name is Mary and my grandfather's name is John. We also have a dog. Its name is Rocky. It is 3 years old.\n\nI love my family very much. On weekends, we go to the park together. We play games and eat ice cream. My family is very happy!",
    questions: [
      {
        id: 1,
        question: '¿Cuántos años tiene Emma?',
        options: [
          { id: 'A', text: '8 años' },
          { id: 'B', text: '10 años' },
          { id: 'C', text: '12 años' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Cómo se llama la hermana de Emma?',
        options: [
          { id: 'A', text: 'Laura' },
          { id: 'B', text: 'Mary' },
          { id: 'C', text: 'Sophia' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: '¿Qué mascota tiene la familia?',
        options: [
          { id: 'A', text: 'Un perro' },
          { id: 'B', text: 'Un gato' },
          { id: 'C', text: 'Un pez' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Qué hacen juntos los fines de semana?',
        options: [
          { id: 'A', text: 'Van al cine' },
          { id: 'B', text: 'Van al parque' },
          { id: 'C', text: 'Van a la playa' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  listening: {
    videoId: 'Tz5fr_FBsiQ',
    questions: [
      {
        id: 1,
        question: '¿De qué trata la canción?',
        options: [
          { id: 'A', text: 'Los colores' },
          { id: 'B', text: 'La familia' },
          { id: 'C', text: 'Los animales' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Quién aparece primero en la canción?',
        options: [
          { id: 'A', text: 'Mother' },
          { id: 'B', text: 'Father' },
          { id: 'C', text: 'Baby' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 3,
        question: '¿Qué miembro de la familia se menciona después de "brother"?',
        options: [
          { id: 'A', text: 'Sister' },
          { id: 'B', text: 'Baby' },
          { id: 'C', text: 'Grandfather' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Cuántos miembros de la familia se mencionan en la canción?',
        options: [
          { id: 'A', text: '3' },
          { id: 'B', text: '5' },
          { id: 'C', text: '6' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
};

const EnglishFamilyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      <main className="kid-container py-8">
        <EnglishLesson topic="Family" content={familyLessonContent} />
      </main>
    </div>
  );
};

export default EnglishFamilyPage;
