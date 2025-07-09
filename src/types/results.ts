export interface RadarDataPoint {
  subject: string;
  A: number;
  fullMark: number;
  color?: string;
}

export interface ResultsSectionProps {
  radarData: RadarDataPoint[];
}
