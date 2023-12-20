export interface IUsers {
  _id: string
  fullname: string
  role: string
  email: string
  password: string
  borrowedBooks?: string
  createdAt: Date
  __v: number
}

export interface IUsersDTO {
  fullname: string
  role: string
  email: string
  password: string
}