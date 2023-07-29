import { useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuItem from '../MenuItem'
import Avatar from '../profile/Avatar'
import AuthPopup from './AuthPopup'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_ACTIONS, selectUser } from '../../redux/slices/authSlice'

export default function UserMenu() {
  const menuRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
 
  const [activeTab, setActiveTab] = useState('') // login, signup, verify, set-password, edit-profile-...

  const dispatch = useDispatch()
  const { isLoggedIn, userInfo } = useSelector(selectUser)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSignOut = () => {
    dispatch(AUTH_ACTIONS.logoutUser())
  }

  const handleHelp = () => {

  }

  return (
    <div className={`flex justify-end flex-shrink-0 relative`}>
      <div ref={menuRef} className='flex flex-row items-center gap-3'>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='px-3 py-2 border border-neutral-700 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <div className='flex-shrink-0'>
            <Avatar src={isLoggedIn && userInfo?.avatarUrl} />
          </div>
        </button>

        <dialog
          open={menuOpen}
          className='bg-black-50 rounded-xl shadow-md w-[50vw] sm:w-[26vw] lg:w-[240px] overflow-hidden right-0 top-14 text-sm mr-0 p-0 z-10'
        >
          <div onClick={() => setMenuOpen(false)} className='flex flex-col w-full cursor-pointer'>
            {isLoggedIn ? (
              <>
                <MenuItem label='New project' onClick={() => {}} />
                <MenuItem label='Your project' onClick={() => {}} />
                <div className='border-t-[1px] my-2 border-neutral-700' />

                <MenuItem
                  label='Profile'
                  onClick={() => {
                    // change route
                  }}
                  light
                />
                <MenuItem label='Help' onClick={handleHelp} light />
                <MenuItem label='Logout' onClick={handleSignOut} light />
              </>
            ) : (
              <>
                <MenuItem
                  label='Sign up'
                  onClick={() => {
                    setActiveTab('signup')
                  }}
                />
                <MenuItem
                  label='Login'
                  onClick={() => {
                    setActiveTab('login')
                  }}
                />
              </>
            )}
          </div>
        </dialog>
      </div>

      <AuthPopup
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  )
}
