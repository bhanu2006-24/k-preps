import { networkTheory } from './subjects/networkTheory';
import { electronicDevices } from './subjects/electronicDevices';
import { digitalElectronics } from './subjects/digitalElectronics';
import { controlSystems } from './subjects/controlSystems';
import { advanceMathematics } from './subjects/advanceMathematics';
import { signalSystem } from './subjects/signalSystem';
import { technicalCommunication } from './subjects/technicalCommunication';
import { computerProgramming } from './subjects/computerProgramming';
import { Resource, Flashcard } from '../types';

// Modular Data Imports
import { networkQuestions } from './questions/networkQuestions';
import { deviceQuestions } from './questions/deviceQuestions';
import { networkNotes } from './notes/networkNotes';
import { deviceNotes } from './notes/deviceNotes';
import { digitalNotes } from './notes/digitalNotes';
import { controlNotes } from './notes/controlNotes';
import { networkFlashcards } from './flashcards/networkFlashcards';
import { deviceFlashcards } from './flashcards/deviceFlashcards';
import { networkCheatsheets } from './cheatsheets/networkCheatsheets';
import { deviceCheatsheets } from './cheatsheets/deviceCheatsheets';
import { miscResources } from './miscResources';
import { fileResources } from './fileResources';

export const subjects = [
  networkTheory, 
  electronicDevices, 
  digitalElectronics, 
  controlSystems,
  advanceMathematics,
  signalSystem,
  technicalCommunication,
  computerProgramming
];

export const resources: Resource[] = [
  ...networkNotes, 
  ...deviceNotes, 
  ...digitalNotes,
  ...controlNotes,
  ...networkCheatsheets, 
  ...deviceCheatsheets, 
  ...miscResources,
  ...fileResources
];
export const flashcards: Flashcard[] = [...networkFlashcards, ...deviceFlashcards];
export const questions = [...networkQuestions, ...deviceQuestions];
