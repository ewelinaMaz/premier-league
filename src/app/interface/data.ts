import { Standing } from "./standing";

export interface Data {
  name: string
  abbreviation: string
  seasonDisplay: string
  season: number
  standings: Standing[]
}
