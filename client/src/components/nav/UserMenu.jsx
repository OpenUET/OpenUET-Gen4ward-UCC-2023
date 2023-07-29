import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import MenuItem from '../MenuItem';
import Avatar from '../profile/Avatar';
import AuthPopup from './AuthPopup';

export default function UserMenu({ session }) {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(''); // login, signup, verify, set-password, edit-profile-...

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {

  }

  const handleHelp = () => {

  }

  return (
    <div className={`flex justify-end flex-shrink-0 relative`} >
      <div ref={menuRef} className="flex flex-row items-center gap-3">
        <button onClick={() => setMenuOpen(!menuOpen)} className="py-2 px-3 border-[1px] border-neutral-200 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition">
          <div className="flex-shrink-0">
            <Avatar />
          </div>
        </button>

        <dialog open={menuOpen} className="rounded-xl shadow-md w-[50vw] sm:w-[26vw] lg:w-[240px] bg-white overflow-hidden right-0 top-14 text-sm mr-0 p-0 z-10">
          <div onClick={() => setMenuOpen(false)} className="flex flex-col w-full cursor-pointer">
            {session ? (
              <>
                <MenuItem
                  label="Dự án mới"
                  onClick={() => { }}
                  className='sm:hidden'
                />
                <MenuItem
                  label="Dự án của bạn"
                  onClick={() => { }}
                />
                <div className='border-t-[1px] my-2' />

                <MenuItem
                  label="Thông tin cá nhân"
                  onClick={() => {
                    // change route
                  }}
                />
                <MenuItem
                  label="Trợ giúp"
                  onClick={handleHelp}
                  light
                />
                <MenuItem
                  label="Đăng xuất"
                  onClick={handleSignOut}
                  light
                />
              </>
            ) : (
              <>
                <MenuItem
                  label="Đăng ký"
                  onClick={() => { setActiveTab('signup'); }}
                />
                <MenuItem
                  label="Đăng nhập"
                  onClick={() => { setActiveTab('login'); }}
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
  );
};