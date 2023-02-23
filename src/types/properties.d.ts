export interface IProperty {
  id: string
  name: string
  description: string
  city: string
  region: string
  daily_price: number
  rooms: number
  bathrooms: number
  size: number
  capacity: number
  created_at: Date
  options: Option[]
  images: PropertyImage[]
}

type PropertyImage = {
  image_url: string
  image_name: string
}
