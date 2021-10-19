import { Note } from "./note";
import { Stat } from "./stat";
import { Team } from "./team";

export interface Standing {
  team: Team
  note?: Note
  stats: Stat[]
  name: any
}
