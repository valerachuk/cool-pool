export interface IQuestionEditCard {
  title: string;
  isMultiple: boolean;
  answerOptions: Array<{ text: string }>;
}

export interface IQuestion {
  title: string;
  isMultiple: boolean;
  options: string[];
}

export interface IPool {
  title: string;
  description: string;
  questions: IQuestion[];
}

export interface IPoolInfo {
  title: string;
  creationDate: Date;
  lastFillDate: Date;
  answersCount: number;
  id: string;
}

export interface IQuestionAnswer {
  name: string;
  options: Array<{
    name: string;
    answersCount: number;
  }>;
}

export interface IPoolAnswers {
  id?: string;
  title: string;
  description: string;
  creationDate: Date;
  lastFillDate: Date;
  answersCount: number;
  answers: IQuestionAnswer[];
}
