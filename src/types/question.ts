export interface Question {
  id: number;
  text: string;
  value: string;
}

export interface QuestionResponse {
  [key: number]: string;
}
