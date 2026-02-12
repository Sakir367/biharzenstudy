// data.ts
export interface MCQType {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface SubjectMCQType {
  id: number;
  subjectName: string;
  className: string;
  mcqs: MCQType[];
}

export const subjectMCQData: SubjectMCQType[] = [
  {
    id: 1,
    subjectName: "Coding",
    className: "B.Tech",
    mcqs: [
      { id: 1, question: "What is React?", options: ["Library","Framework","Language","Database"], answer: "Library" },
      { id: 2, question: "What is Next.js used for?", options: ["Backend Only","Fullstack React Apps","Database","Design Tool"], answer: "Fullstack React Apps" },
      { id: 3, question: "Which hook is used for state?", options: ["useRef","useEffect","useState","useMemo"], answer: "useState" },
    ],
  },
  {
    id: 2,
    subjectName: "Physics",
    className: "B.Tech",
    mcqs: [
      { id: 1, question: "Unit of Force?", options: ["Newton","Joule","Volt","Ampere"], answer: "Newton" },
    ],
  },
];


export const footer=[
  {headinng:"What’s Inside" , subheading:[{id:1, name:"Question Papers" ,ontion:[{class:"Class 10th"}, {class:"Class 12th"}]},{id:1, name:"Notes & Solutions"  ,ontion:[{class:"Class 10th"}, {class:"Class 12th"}]},{id:1, name:"MCQ"}]}
]