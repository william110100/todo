export interface ToDo {
  description: string;
  id: string;
  isComplete: boolean;
}

export interface SectionResponse {
  data: ToDo[];
  label: string;
}
