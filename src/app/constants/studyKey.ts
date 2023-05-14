export const STUDY_KEY = {
  ALL: ['studies'],
  LISTS: () => [...STUDY_KEY.ALL, 'list'],
  LIST: (filter?: string) => [...STUDY_KEY.LISTS(), { filter }],
  DETAIL: (id: number) => [id],
};
