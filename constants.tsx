import React from 'react';
import { PracticeSession, Question, Passage } from './types';

export const MOCK_USER = {
  name: 'John Doe',
  email: 'john.doe@email.com',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFgGsKMgMsoJjKxI0GqxLArhwhRShqTscOycT3OFe8TGjVLHfZqyG9GYz7PGkLDdVkBp-42-JVLLW9_aMdx5ZI1qRuJiyvmPyKoBQfyEOyXowT1px7dyVY2KL9RIcYFHUrhBHwE0gwXaJvX9FnVA1wYvnGvrVNG9LfeIJ9XOBAERTcEpHzRJvT9CEosop1H8fX47NaO_5cQ0F22hLCekcd12eEL9sqt9JAdr6H_iLu7V2Cs3AkBHNAa6YsdpfMU38zI_Td7OP7tew'
};

export const RECENT_PRACTICES: PracticeSession[] = [
  { id: '1', title: 'TPO 54 - Integrated Writing', date: 'October 26, 2023', type: 'Writing', score: '90%', accuracy: 90, timeSpent: '20m', completed: true },
  { id: '2', title: 'TPO 54 - Reading Section 1', date: 'October 24, 2023', type: 'Reading', score: '75%', accuracy: 75, timeSpent: '18m', completed: true },
  { id: '3', title: 'TPO 53 - Listening Section 2', date: 'October 22, 2023', type: 'Listening', score: '95%', accuracy: 95, timeSpent: '15m', completed: true },
  { id: '4', title: 'TPO 52 - Speaking Task 1', date: 'October 20, 2023', type: 'Speaking', score: 'Good', timeSpent: '5m', completed: true },
];

export const READING_PASSAGE: Passage = {
  id: 'tpo54-1',
  title: 'The Geology of the Grand Canyon',
  topic: 'Geology',
  content: [
    `The Grand Canyon is a spectacular example of erosion. The canyon, carved by the Colorado River, is 277 miles (446 km) long, up to 18 miles (29 km) wide, and attains a depth of over a mile (6,093 feet or 1,857 meters). For thousands of years, the area has been continuously inhabited by Native Americans, who built settlements within the canyon and its many caves. The Pueblo people considered the Grand Canyon a holy site, and made pilgrimages to it.`,
    `The geological history of the canyon is complex, involving a series of events that occurred over billions of years. The primary force behind the canyon's formation was the Colorado River, which began carving its path through the Colorado Plateau an estimated 5 to 6 million years ago. The river's erosive power was amplified by the uplift of the plateau, which increased the river's gradient and speed.`,
    `The rock layers tell a story of ancient seas, deserts, and swamps. The Vishnu Schist, at the canyon's bottom, is among the oldest exposed rocks in North America. Above it, layers of sedimentary rock—sandstone, shale, and limestone—record periods when the region was covered by shallow seas. For example, the Redwall Limestone, a prominent cliff-forming layer, is rich in marine fossils such as corals and brachiopods.`
  ]
};

export const READING_QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'According to paragraph 2, what was the primary force that created the Grand Canyon?',
    options: [
      'Wind erosion over millions of years.',
      'The Colorado River carving through the plateau.',
      'Volcanic activity and lava flows.',
      'Glacial movements during the Ice Age.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Paragraph 2 explicitly states, "The primary force behind the canyon\'s formation was the Colorado River, which began carving its path through the Colorado Plateau..."'
  }
];

export const LISTENING_QUESTIONS: Question[] = [
  {
    id: 'l1',
    text: 'Why does the student go to see the professor?',
    options: [
      'To ask for an extension on a paper.',
      'To clarify a concept discussed in class.',
      'To discuss his grade on the midterm exam.',
      'To get advice about graduate school.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The correct answer is B because the student explicitly states, "I was a bit confused about the \'observer effect\' you mentioned in yesterday\'s lecture."'
  },
  {
    id: 'l2',
    text: 'What is the professor\'s main point about the "observer effect"?',
    options: [
      'It only applies to experiments in physics.',
      'It can be avoided with careful planning.',
      'The act of observation can alter the behavior being studied.',
      'It makes social science research unreliable.'
    ],
    correctAnswerIndex: 2,
    explanation: 'The professor explains that in social sciences, "when people know they\'re being watched, they might act differently."'
  }
];
