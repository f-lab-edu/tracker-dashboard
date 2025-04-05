export interface SingleBarDataType {
  name: string;
  count: number;
}

export interface MultiBarDataType {
  [key: string]: string | number;
}

export interface PieChartDataType {
  name: string;
  value: number;
}
