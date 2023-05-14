import { StudyModel } from '@/app/models/StudyModel';

export interface StudyItemProps {
  data: StudyModel;
  storedValue: {
    [key: string]: unknown;
  } | null;
  addValue: (value: { [key: string]: unknown }) => void;
  removeValue: (key: string) => void;
}
