import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectUser } from '../../redux/slices/authSlice'
function PrivateRoute({ children }) {
  const { userInfo } = useSelector(selectUser)
  return <>{userInfo ? children : <Navigate to='/login' replace={true} />}</>
}

export default PrivateRoute
