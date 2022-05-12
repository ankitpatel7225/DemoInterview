import type from "./type";

const loginSuccessAction = (payload)=>({
  type:type.loginSuccess,
  payload
})

const logoutAction = (payload)=>({
  type:type.logOut,
  payload
})

export{loginSuccessAction,logoutAction}