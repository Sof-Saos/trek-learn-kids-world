
import Header from '@/components/Header';
import EnglishLesson, { LessonContent } from '@/components/english/EnglishLesson';

const schoolLessonContent: LessonContent = {
  grammar: {
    table: {
      headers: ['Subject', 'Verb "to be"', 'Example'],
      rows: [
        ['I', 'am', 'I am in class.'],
        ['You', 'are', 'You are my friend.'],
        ['He', 'is', 'He is the teacher.'],
        ['She', 'is', 'She is in school.'],
        ['We', 'are', 'We are students.'],
        ['They', 'are', 'They are in the library.'],
      ],
    },
    questions: [
      {
        id: 1,
        question: 'Choose the correct form: "She ___ in the classroom."',
        options: [
          { id: 'A', text: 'are' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'am' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: 'What is the correct sentence?',
        options: [
          { id: 'A', text: 'We are learning' },
          { id: 'B', text: 'We am learning' },
          { id: 'C', text: 'We is learning' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 3,
        question: 'Identify the verb in the sentence: "The teacher is kind."',
        options: [
          { id: 'A', text: 'teacher' },
          { id: 'B', text: 'is' },
          { id: 'C', text: 'kind' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: 'Find the subject in: "You are my best friend."',
        options: [
          { id: 'A', text: 'friend' },
          { id: 'B', text: 'You' },
          { id: 'C', text: 'are' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  vocabulary: {
    words: [
      'Teacher - Profesor/a',
      'Student - Estudiante',
      'Book - Libro',
      'Notebook - Cuaderno',
      'Pencil - Lápiz',
      'Classroom - Aula',
      'Board - Pizarra',
      'Backpack - Mochila',
      'Library - Biblioteca',
      'School - Escuela',
      'Desk - Escritorio',
      'Chair - Silla',
    ],
    questions: [
      {
        id: 1,
        question: '¿Dónde escriben los estudiantes?',
        options: [
          { id: 'A', text: 'En el suelo' },
          { id: 'B', text: 'En la pizarra' },
          { id: 'C', text: 'En un cuaderno' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 2,
        question: '¿Qué usas para leer?',
        options: [
          { id: 'A', text: 'Un lápiz' },
          { id: 'B', text: 'Un libro' },
          { id: 'C', text: 'Una regla' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 3,
        question: '¿Qué haces con un lápiz?',
        options: [
          { id: 'A', text: 'Dormir' },
          { id: 'B', text: 'Escribir' },
          { id: 'C', text: 'Cortar' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: '¿Cuál es el trabajo del profesor?',
        options: [
          { id: 'A', text: 'Cocinar' },
          { id: 'B', text: 'Enseñar' },
          { id: 'C', text: 'Pintar' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  reading: {
    story: "Anna's School Day\n\nAnna wakes up early to go to school. She puts her books in her backpack. At school, she learns math and reads stories. Her favorite subject is art.",
    questions: [
      {
        id: 1,
        question: '¿Dónde va Anna por la mañana?',
        options: [
          { id: 'A', text: 'Al parque' },
          { id: 'B', text: 'A la escuela' },
          { id: 'C', text: 'A la tienda' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿Qué guarda Anna en su mochila?',
        options: [
          { id: 'A', text: 'Ropa' },
          { id: 'B', text: 'Juguetes' },
          { id: 'C', text: 'Libros' },
        ],
        correctAnswer: 'C',
      },
      {
        id: 3,
        question: '¿Qué aprende Anna en la escuela?',
        options: [
          { id: 'A', text: 'Matemáticas' },
          { id: 'B', text: 'Cocina' },
          { id: 'C', text: 'Baile' },
        ],
        correctAnswer: 'A',
      },
      {
        id: 4,
        question: '¿Cuál es la asignatura favorita de Anna?',
        options: [
          { id: 'A', text: 'Lectura' },
          { id: 'B', text: 'Arte' },
          { id: 'C', text: 'Matemáticas' },
        ],
        correctAnswer: 'B',
      },
    ],
  },
  listening: {
    videoId: 'XZv5Wd7cg-k',
    questions: [
      {
        id: 1,
        question: '¿Qué hace el niño todos los días según la canción?',
        options: [
          { id: 'A', text: 'Dormir' },
          { id: 'B', text: 'Leer un libro' },
          { id: 'C', text: 'Bailar' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 2,
        question: '¿A dónde va el niño?',
        options: [
          { id: 'A', text: 'Al parque' },
          { id: 'B', text: 'A la escuela' },
          { id: 'C', text: 'Al zoológico' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 3,
        question: '¿Qué dos cosas dice el niño que hace en la escuela?',
        options: [
          { id: 'A', text: 'Comer y dormir' },
          { id: 'B', text: 'Aprender y jugar' },
          { id: 'C', text: 'Bailar y cantar' },
        ],
        correctAnswer: 'B',
      },
      {
        id: 4,
        question: '¿Cuál actividad NO se menciona en la canción?',
        options: [
          { id: 'A', text: 'Leer' },
          { id: 'B', text: 'Jugar' },
          { id: 'C', text: 'Nadar' },
        ],
        correctAnswer: 'C',
      },
    ],
  },
};

const EnglishSchoolPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-soft-blue">
      <Header />
      <main className="kid-container py-8">
        <EnglishLesson topic="School" content={schoolLessonContent} />
      </main>
    </div>
  );
};

export default EnglishSchoolPage;
