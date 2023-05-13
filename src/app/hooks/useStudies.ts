import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { STUDY_KEY } from '@/app/constants';
import { CommonModel } from '@/app/models/CommonModel';
import { StudyModel } from '@/app/models/StudyModel';

const fetchStudies = async () => {
  const response = await axios<CommonModel<StudyModel>>('/api/studies');
  return response.data;
};

const useStudies = () => {
  return useQuery({
    queryKey: [STUDY_KEY.ALL],
    queryFn: () => fetchStudies(),
  });
};

const useFilterStudies = ({ filter }: { filter: string }) => {
  return useQuery({
    queryKey: [STUDY_KEY.LIST(filter)],
    queryFn: () => fetchStudies(),
  });
};

export { fetchStudies, useFilterStudies, useStudies };
