import { Logo } from "./logo";

export interface Team {
  id: string
  uid: string
  location: string
  name: string
  abbreviation: string
  displayName: string
  shortDisplayName: string
  isActive: boolean
  logos: Logo[]
}
