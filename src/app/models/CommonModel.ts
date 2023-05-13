export interface CommonModel<K, T = {}> {
  code: number;
  meta: T & MetadataModel;
  payload: Array<K>;
}

interface MetadataModel {
  total: number;
}
