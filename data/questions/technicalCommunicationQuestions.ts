
import { Question } from '../../types';

export const technicalCommunicationQuestions: Question[] = [
  {
    id: 'tc-1',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'Which of the following is NOT a barrier to communication?',
    options: ['Noise', 'Feedback', 'Technical Jargon', 'Cultural Differences'],
    correctAnswer: 'Feedback',
    explanation: 'Feedback is a crucial part of the effective communication loop, not a barrier. It confirms understanding.',
    difficulty: 'Easy'
  },
  {
    id: 'tc-2',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'In technical writing, "Conciseness" means:',
    options: ['Using difficult words', 'Using few words to convey the message', 'Writing long paragraphs', 'Repeating ideas'],
    correctAnswer: 'Using few words to convey the message',
    explanation: 'Conciseness involves conveying the intended meaning using the fewest possible words without sacrificing clarity.',
    difficulty: 'Easy'
  },
  {
    id: 'tc-3',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'Kinesics in communication refers to:',
    options: ['Space language', 'Time language', 'Body language', 'Touch language'],
    correctAnswer: 'Body language',
    explanation: 'Kinesics is the study of non-verbal communication related to body movements, gestures, and facial expressions.',
    difficulty: 'Medium'
  },
  {
    id: 'tc-4',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'A formal technical report should always include:',
    options: ['Slang', 'Abstract/Executive Summary', 'Personal emotions', 'Unverified data'],
    correctAnswer: 'Abstract/Executive Summary',
    explanation: 'An abstract or executive summary provides a brief overview of the report\'s content, essential for formal technical documents.',
    difficulty: 'Easy'
  },
  {
    id: 'tc-5',
    subjectId: 'technical-communication',
    type: 'MCQ',
    text: 'Which listening type involves analyzing and evaluating the message?',
    options: ['Passive listening', 'Critical listening', 'Appreciative listening', 'Marginal listening'],
    correctAnswer: 'Critical listening',
    explanation: 'Critical listening involves analyzing, evaluating, and judging the content of the message.',
    difficulty: 'Medium'
  }
];
