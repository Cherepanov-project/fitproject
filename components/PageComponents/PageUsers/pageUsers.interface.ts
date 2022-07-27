export interface IPageUsersProps {
  data: {
    content: [IUser]
  }
}

export interface IUser {
  id: number
  password: string
  username: string
  firstName: string | null
  lastName: string | null
  email: string | null
  phone: string | null
  age: number | null
  gender: string | null
  coach?: boolean | null
  avatar?: string | StaticImageData
}
