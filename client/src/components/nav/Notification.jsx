import { useEffect, useRef, useState } from 'react';
import { BiNotification } from 'react-icons/bi';
import MenuItem from '../MenuItem';
import { useNavigate } from "react-router-dom";

// Todo: consider replace title with name + type + post title
const notification_data_example = {
  lastRead: 0,
  recent_notifications: [
    {
      title: "Nguyễn Văn A want to join your team",
      url: "/posts/1",
    },
    {
      title: "Nguyễn Văn B voted for your post",
      url: "/posts/2",
    }
  ]
}

export default function Notification({ session }) {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const notificationList = notification_data_example.recent_notifications;
  const navigate = useNavigate();

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

  return (
    <div className={`flex justify-end flex-shrink-0 relative`}>
      <div ref={menuRef} className="flex flex-row items-center gap-3">
        <button onClick={() => setMenuOpen(!menuOpen)} className="py-3 px-4 border-[1px] border-neutral-200 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition">
          <div className="flex-shrink-0">
            <BiNotification className="w-6 h-6 text-neutral-500" />
          </div>
        </button>

        <dialog open={menuOpen} className="rounded-xl shadow-md w-[50vw] sm:w-[40vw] lg:w-[320px] bg-white overflow-hidden right-0 top-14 text-sm mr-0 p-0 z-10">
          <div onClick={() => setMenuOpen(false)} className="flex flex-col w-full cursor-pointer">
            {notificationList.map((notification, index) => (
              <MenuItem
                key={index}
                label={notification.title}
                onClick={() => { navigate(notification.url) }}
              />
            ))}
          </div>
        </dialog>
      </div>
    </div>
  );
};