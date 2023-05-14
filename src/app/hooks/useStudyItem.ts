import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { STUDY_KEY } from '@/app/constants';
import { CommonItemModel } from '@/app/models/CommonItemModel';
import { StudyDetailModel } from '@/app/models/StudyModel';

const fetchStudyItem = async (id: string) => {
  const response = await axios<CommonItemModel<StudyDetailModel>>(
    `/api/studies/${id}`,
  );
  return response.data;
};

const useStudyItem = (id: string) => {
  return useQuery({
    queryKey: [STUDY_KEY.DETAIL],
    queryFn: () => fetchStudyItem(id),
  });
};

export { fetchStudyItem, useStudyItem };
