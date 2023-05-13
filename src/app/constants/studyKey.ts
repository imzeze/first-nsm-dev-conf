export const STUDY_KEY = {
  ALL: ["studies"],
  LISTS: () => [...STUDY_KEY.ALL, "list"],
  LIST: (filter: string) => [...STUDY_KEY.LISTS(), { filter }],
  DETAILS: () => [...STUDY_KEY.ALL, "detail"],
  DETAIL: (id: number) => [...STUDY_KEY.DETAILS(), id],
};
