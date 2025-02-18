export enum RADIO_CHOICE {
  FIRST_WITH_KEYWORD, // 关键词优先
  FIRST_WITH_TAG, // 分类优先
}

export interface OptionsTypeOfRadio {
  value: string;
  label: string;
  disabled?: undefined | boolean;
}

