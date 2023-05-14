import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { STUDY_KEY } from '@/app/constants';
import { CommonModel } from '@/app/models/CommonModel';
import { StudyModel } from '@/app/models/StudyModel';

const fetchStudies = async () => {
  const response = await axios<CommonModel<StudyModel>>('/api/studies');
  return response.data;
};

const fetchStudiesFilter = async (filter: { [key: string]: string }) => {
  const response = await axios<CommonModel<StudyModel>>('/api/studies', {
    params: filter,
  });
  return response.data;
};

const useStudies = () => {
  return useQuery({
    queryKey: [STUDY_KEY.ALL],
    queryFn: () => fetchStudies(),
  });
};

const useFilterStudies = (filter: { category: string; search: string }) => {
  return useQuery({
    queryKey: [filter.category, filter.search],
    queryFn: () => fetchStudiesFilter(filter),
  });
};

export { useFilterStudies, useStudies };
