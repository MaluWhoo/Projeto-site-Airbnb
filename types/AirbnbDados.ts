export interface AirbnbApi {
    accommodation: Accommodation[]
    icons: Photo[]
}

export interface Accommodation {
    id: string
    title: string
    date: string
    testimonials: Testimonials[] // LIsta de itens
    hasBadge: boolean
    host: string
    slug: string
    location: Location // Na API o Location não tem uma lista, ele é um objeto só
    price: number
    rating: number
    photos: Photo []
}

export interface Testimonials {
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number
    createdAt: number
    stayedAt: number
}

export interface Photo {
    id: string
    source: string
    description: string
    url: string
}

export interface Location {
    description: string
    city: string
    state: string
    country: string
}