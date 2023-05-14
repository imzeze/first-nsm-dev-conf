export interface StudyModel {
  id: number;
  category?: string;
  name?: string;
  description?: string;
}

export interface StudyDetailModel extends StudyModel {
  location: string;
  startDateTime: string;
  endDateTime: string;
  speaker: Array<string>;
  stack: Array<string>;
}
