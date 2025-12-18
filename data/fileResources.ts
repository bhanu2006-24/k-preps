import { Resource } from '../types';

export const fileResources: Resource[] = [
  // --- Advance Mathematics ---
  { id: 'am-u1a', title: 'Unit 1 A - Numerical Methods', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%201%20A.pdf', description: 'Advance Maths Unit 1 Part A' },
  { id: 'am-u1b', title: 'Unit 1 B - Numerical Methods', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%201%20B.pdf', description: 'Advance Maths Unit 1 Part B' },
  { id: 'am-u2', title: 'Unit 2 - Complex Analysis', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%202.pdf', description: 'Advance Maths Unit 2' },
  { id: 'am-u3a', title: 'Unit 3 A - Presentation', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%203%20A.pptx', description: 'Advance Maths Unit 3 Part A Slides' },
  { id: 'am-u3b', title: 'Unit 3 B - Presentation', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%203%20B.pptx', description: 'Advance Maths Unit 3 Part B Slides' },
  { id: 'am-u3c', title: 'Unit 3 C - Presentation', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%203%20C.pptx', description: 'Advance Maths Unit 3 Part C Slides' },
  { id: 'am-u3d', title: 'Unit 3 D - Presentation', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%203%20D.pptx', description: 'Advance Maths Unit 3 Part D Slides' },
  { id: 'am-u4', title: 'Unit 4 - Complex Integration', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%204.pdf', description: 'Advance Maths Unit 4' },
  { id: 'am-u5', title: 'Unit 5 - Probability', type: 'PDF', subjectId: 'advance-mathematics', url: '/files/Advance%20Maths/Unit%205.pdf', description: 'Advance Maths Unit 5' },

  // --- Computer Programming ---
  { id: 'cp-lab', title: 'Computer Lab Manual', type: 'PDF', subjectId: 'computer-programming', url: '/files/Computer%20Programming%20LAB/Computer-lab-manual.docx', description: 'Comprehensive Lab Manual' },

  // --- Digital System Design (Digital Electronics) ---
  { id: 'de-ref', title: '18EC34 - Hamsavahini Ref', type: 'PDF', subjectId: 'digital-electronics', url: '/files/Digital%20System%20Design/18EC34%20-%20Hamsavahini%20R.pdf', description: 'Reference Book / Notes' },
  { id: 'de-lab-u1', title: 'Lab Unit 1', type: 'PDF', subjectId: 'digital-electronics', url: '/files/Digital%20System%20Design%20lab/Unit%201.pdf', description: 'Lab Notes Unit 1' },
  { id: 'de-lab-u2', title: 'Lab Unit 2', type: 'PDF', subjectId: 'digital-electronics', url: '/files/Digital%20System%20Design%20lab/Unit%202.pdf', description: 'Lab Notes Unit 2' },
  { id: 'de-lab-u3', title: 'Lab Unit 3', type: 'PDF', subjectId: 'digital-electronics', url: '/files/Digital%20System%20Design%20lab/Unit%3.pdf', description: 'Lab Notes Unit 3' },
  { id: 'de-lab-u4', title: 'Lab Unit 4', type: 'PDF', subjectId: 'digital-electronics', url: '/files/Digital%20System%20Design%20lab/Unit%204.pdf', description: 'Lab Notes Unit 4' },
  { id: 'de-lab-u5', title: 'Lab Unit 5', type: 'PDF', subjectId: 'digital-electronics', url: '/files/Digital%20System%20Design%20lab/Unit%205.pdf', description: 'Lab Notes Unit 5' },

  // --- Electronic Devices ---
  { id: 'ed-lec', title: 'EDC Lecture Notes', type: 'PDF', subjectId: 'electronic-devices', url: '/files/Electronic%20Devices/EDC%20Lecture%20Notes.pdf', description: 'Complete Lecture Notes' },
  { id: 'ed-book', title: 'Electronic Devices (3EC4-07)', type: 'PDF', subjectId: 'electronic-devices', url: '/files/Electronics%20Devices%20(3EC4-07).pdf', description: 'Course Syllabus/Book' },
  { id: 'ed-lab-comp', title: 'Devices Lab Complete', type: 'PDF', subjectId: 'electronic-devices', url: '/files/Electronic%20Devices%20Lab/Electronics%20devices%20%20complete.pdf', description: 'Complete Lab Manual' },
  { id: 'ed-lab-doc', title: 'Lab Manual Doc', type: 'PDF', subjectId: 'electronic-devices', url: '/files/Electronic%20Devices%20Lab/Electronics-Devices-Lab.docx', description: 'Lab Manual Word Doc' },

  // --- Network Theory ---
  { id: 'nt-book', title: 'Network Theory (3EC4-06)', type: 'PDF', subjectId: 'network-theory', url: '/files/Network%20Theory%20(3EC4-06).pdf', description: 'Course Syllabus/Book' },
  { id: 'nt-u1', title: 'Unit 1 Notes', type: 'PDF', subjectId: 'network-theory', url: '/files/Network%20Theory/Unit%201.docx', description: 'Unit 1 Word Document' },
  { id: 'nt-u2', title: 'Unit 2 Notes', type: 'PDF', subjectId: 'network-theory', url: '/files/Network%20Theory/unit%202.docx', description: 'Unit 2 Word Document' },
  { id: 'nt-u3', title: 'Unit 3 Notes', type: 'PDF', subjectId: 'network-theory', url: '/files/Network%20Theory/Unit%203.docx', description: 'Unit 3 Word Document' },
  { id: 'nt-u4', title: 'Unit 4 Notes', type: 'PDF', subjectId: 'network-theory', url: '/files/Network%20Theory/Unit%204.docx', description: 'Unit 4 Word Document' },
  { id: 'nt-u5', title: 'Unit 5 Notes', type: 'PDF', subjectId: 'network-theory', url: '/files/Network%20Theory/Unit%205.ppt', description: 'Unit 5 Presentation' },
  { id: 'nt-vid', title: 'Network Theory Video', type: 'Video', subjectId: 'network-theory', url: '/files/Network_Theory.mp4', description: 'Course Video Lecture' },

  // --- Signal & Systems ---
  { id: 'ss-u1', title: 'Unit 1 - Raj Kumar Jain', type: 'PDF', subjectId: 'signal-system', url: '/files/Signal%20System/S-S%20UNIT%201%20BY%20%20RAJ%20KUMAR%20JAIN.pdf', description: 'Unit 1 Detailed Notes' },
  { id: 'ss-u2', title: 'Unit 2 - Raj Kumar Jain', type: 'PDF', subjectId: 'signal-system', url: '/files/Signal%20System/S-S%20UNIT%202%20BY%20RAJ%20KUMAR%20JAIN.pdf', description: 'Unit 2 Detailed Notes' },
  { id: 'ss-u3p1', title: 'Unit 3 Part 1 - Fourier Series', type: 'PDF', subjectId: 'signal-system', url: '/files/Signal%20System/S-S%20UNIT%203%20PART%201%20%20FS%20BY%20RAJ%20KUMAR%20JAIN.pdf', description: 'Fourier Series Notes' },
  { id: 'ss-u3p2', title: 'Unit 3 Part 2 - Fourier', type: 'PDF', subjectId: 'signal-system', url: '/files/Signal%20System/S-S%20UNIT%203%20PART%202%20FOURIER%20SERIES%20BY%20RAJ%20KUMAR%20JAIN.pdf', description: 'Fourier Series Part 2' },
  { id: 'ss-u4lt', title: 'Unit 4 - Laplace Transform', type: 'PDF', subjectId: 'signal-system', url: '/files/Signal%20System/S-S%20UNIT%204%20LAPLACE%20TRANSFORM%20BY%20RAJ%20KUMAR%20JAIN.pdf', description: 'Laplace Transform Notes' },
  { id: 'ss-u4zt', title: 'Unit 4 - Z Transform', type: 'PDF', subjectId: 'signal-system', url: '/files/Signal%20System/S-S%20UNIT%204%20Z%20TRNASFORM%20PART%201%20BY%20RAJ%20KUMAR%20JAIN.pdf', description: 'Z Transform Notes' },
  { id: 'ss-u5', title: 'Unit 5 - Notes', type: 'PDF', subjectId: 'signal-system', url: '/files/Signal%20System/UNIT%205%20PART%201%20NOTES%20BY%20RAJ%20KUMAR%20JAIN.pdf', description: 'Unit 5 Part 1' },
  { id: 'sp-lab', title: 'SP Lab Manual', type: 'PDF', subjectId: 'signal-system', url: '/files/Signal%20Proccessing%20Lab/SP-LAB-Manual.docx', description: 'Signal Processing Lab Manual' },

  // --- Technical Communication ---
  { id: 'tc-u1b', title: 'Unit 1 B', type: 'PDF', subjectId: 'technical-communication', url: '/files/Techinal%20Communication/Unit%201%20B.pdf', description: 'Unit 1 Part B' },
  { id: 'tc-u1c', title: 'Unit 1 C', type: 'PDF', subjectId: 'technical-communication', url: '/files/Techinal%20Communication/Unit%201%20c.pdf', description: 'Unit 1 Part C' },
  { id: 'tc-u2', title: 'Unit 2', type: 'PDF', subjectId: 'technical-communication', url: '/files/Techinal%20Communication/Unit%202.pdf', description: 'Unit 2 Notes' },
  { id: 'tc-u3a', title: 'Unit 3 A', type: 'PDF', subjectId: 'technical-communication', url: '/files/Techinal%20Communication/Unit%203%20A.pdf', description: 'Unit 3 Part A' },
  { id: 'tc-u3b', title: 'Unit 3 B', type: 'PDF', subjectId: 'technical-communication', url: '/files/Techinal%20Communication/Unit%203%20B.pdf', description: 'Unit 3 Part B' },
  { id: 'tc-u3c', title: 'Unit 3 C', type: 'PDF', subjectId: 'technical-communication', url: '/files/Techinal%20Communication/unit%20-3%20C.pdf', description: 'Unit 3 Part C' },
  { id: 'tc-u4', title: 'Unit 4', type: 'PDF', subjectId: 'technical-communication', url: '/files/Techinal%20Communication/Unit%204.pptx', description: 'Unit 4 Slides' },
  { id: 'tc-outcomes', title: 'Course Outcomes', type: 'PDF', subjectId: 'technical-communication', url: '/files/Course-outcomes.pdf', description: 'Course Outcomes Document' },
];
