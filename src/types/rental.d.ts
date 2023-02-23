import { IProperty } from './properties'

export interface IRental {
  id: string
  property_id: string
  user_id: string
  check_in: Date
  checkout: Date
  property: IProperty
  total: number
}
