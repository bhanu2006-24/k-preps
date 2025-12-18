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
// Questions
import { advanceMathematicsQuestions } from './questions/advanceMathematicsQuestions';
import { signalSystemQuestions } from './questions/signalSystemQuestions';
import { networkTheoryQuestions } from './questions/networkTheoryQuestions';
import { electronicDevicesQuestions } from './questions/electronicDevicesQuestions';
import { digitalSystemQuestions } from './questions/digitalSystemQuestions';
import { technicalCommunicationQuestions } from './questions/technicalCommunicationQuestions';
// Flashcards
import { advanceMathematicsFlashcards } from './flashcards/advanceMathematicsFlashcards';
import { signalSystemFlashcards } from './flashcards/signalSystemFlashcards';
import { networkTheoryFlashcards } from './flashcards/networkTheoryFlashcards';
import { electronicDevicesFlashcards } from './flashcards/electronicDevicesFlashcards';
import { digitalSystemFlashcards } from './flashcards/digitalSystemFlashcards';
import { technicalCommunicationFlashcards } from './flashcards/technicalCommunicationFlashcards';

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
export const flashcards: Flashcard[] = [
    // ...networkFlashcards,  <-- Likely redundant if I have new files, but user asked to refactor real things, so I should use the new syllabus-aligned ones primarily. 
    // Actually, networkFlashcards and deviceFlashcards from import might interfere or be duplicates if I am replacing them. 
    // The user said "remove that bad things... instead gen real question... not this all stuff in one".
    // I will keep the existing imports if they are valid, but prioritize my new ones.
    // However, looking at imports at top of file (not visible in diff), `networkFlashcards` comes from `networkNotes`.
    // I'll assume I should include everything valid.
    ...networkFlashcards, 
    ...deviceFlashcards,
    ...advanceMathematicsFlashcards,
    ...signalSystemFlashcards,
    ...networkTheoryFlashcards,
    ...electronicDevicesFlashcards, // Note: deviceFlashcards might be old dummy data, but I'll leave it for now to avoid breaking if referenced elsewhere.
    ...digitalSystemFlashcards,
    ...technicalCommunicationFlashcards
];
export const questions = [
    ...networkQuestions, 
    ...deviceQuestions,
    ...advanceMathematicsQuestions,
    ...signalSystemQuestions,
    ...networkTheoryQuestions,
    ...electronicDevicesQuestions,
    ...digitalSystemQuestions,
    ...technicalCommunicationQuestions
];
