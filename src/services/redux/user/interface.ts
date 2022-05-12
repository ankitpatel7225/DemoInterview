
export interface userData {
  firstName:string,
  lastName:string,
  gender:string,
  hobbies:string,
  address:string,
  email:string,
  state:string,
  password:string
}

export interface stateType {
  isLogin:boolean,
  user:userData
}