export interface CommonItemModel<K, T = {}> {
  code: number;
  meta: T & MetadataModel;
  payload: K;
}

interface MetadataModel {
  total: number;
}
