import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleGithubLogin } from '../../../api/auth.js'
import { AUTH_ACTIONS } from '../../../redux/slices/authSlice.js'

export default function GithubCallbackPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const code = urlParams.get('code')
    handleGithubLogin(code)
      .then((res) => {
        const { user } = res.data
        dispatch(AUTH_ACTIONS.loginUser(user))
        navigate('/')
      })
      .catch(console.error)
  }, [])

  return (
    //TODO: Add loading spinner
    <></>
  )
}
