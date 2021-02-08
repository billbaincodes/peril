export class Question {
  query: string;
  answer: string;
  active: boolean;
  value: number;
}

export class Category {
  name: string;
  questions: [Question];
}