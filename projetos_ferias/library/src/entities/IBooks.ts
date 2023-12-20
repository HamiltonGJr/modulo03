export interface IBooks {
  _id: string
  title: string
  description?: string
  author: string
  releasedYear: string
  category: string
  coverPicture?: string
  loanedTo?: string
  createdAt: Date
  __v: number
}

export interface IBooksDTO {
  title: string
  description?: string
  author: string
  releasedYear: string
  category: string
  coverPicture?: string
  loanedTo?: string
}