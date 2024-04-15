export interface Starship {
  name: string;
  model: string;
  cost_in_credits: number;
  max_atmosphering_speed: number;
  manufacturer: string;
  length: number;
  crew: number;
  url: string;
}

export interface User {
  id: number;
  token: string;
}
