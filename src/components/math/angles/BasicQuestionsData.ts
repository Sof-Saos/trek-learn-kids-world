
import { Question } from './types';

export const basicAngleQuestions: Question[] = [
  {
    id: 1,
    question: "¿Cómo se llama un ángulo que mide 90°?",
    imageDescription: "", // No image needed for basic questions
    options: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso"],
    correctAnswer: "Ángulo recto"
  },
  {
    id: 2,
    question: "¿Cuál ángulo es menor que 90°?",
    imageDescription: "", // No image needed for basic questions
    options: ["Ángulo obtuso", "Ángulo recto", "Ángulo agudo"],
    correctAnswer: "Ángulo agudo"
  },
  {
    id: 3,
    question: "¿Cuántos grados tiene un ángulo llano?",
    imageDescription: "", // No image needed for basic questions
    options: ["180°", "90°", "360°"],
    correctAnswer: "180°"
  },
  {
    id: 4,
    question: "¿Cómo se llama un ángulo mayor de 90° pero menor de 180°?",
    imageDescription: "", // No image needed for basic questions
    options: ["Ángulo agudo", "Ángulo obtuso", "Ángulo reflejo"],
    correctAnswer: "Ángulo obtuso"
  },
  {
    id: 5,
    question: "¿Cuál de estos NO es un ángulo?",
    imageDescription: "", // No image needed for basic questions
    options: ["La superficie de una mesa", "Una esquina de un cuadrado", "La curva de una regla"],
    correctAnswer: "La curva de una regla"
  }
];
