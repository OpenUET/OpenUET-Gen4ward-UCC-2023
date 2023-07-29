import { createSlice } from '@reduxjs/toolkit'

const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  userInfo,
  isLoggedIn: userInfo ? true : false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem('userInfo')
      state.userInfo = null
      state.isLoggedIn = false
    },
    loginUser: (state, action) => {
      const { user } = action.payload
      localStorage.setItem('userInfo', JSON.stringify(user))
      state.userInfo = user
      state.isLoggedIn = true
    }
  }
})

export const AUTH_ACTIONS = {
  loginUser: (user) => {
    return authSlice.actions.loginUser({ user })
  },
  logoutUser: () => {
    return authSlice.actions.logoutUser()
  }
}

export const selectUser = (state) => {
  return state.auth
}

export default authSlice.reducer
