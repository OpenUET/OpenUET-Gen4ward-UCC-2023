import { autoUpdate, flip, offset, shift, useFloating, useHover, useInteractions } from '@floating-ui/react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({
  size = 32,
  avatar_url,
  full_name,
  id,
}) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { refs, context, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context);
  // const focus = useFocus(context);
  // const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    // focus,
    // click,
  ]);

  useEffect(() => {
    if (!profile && isOpen) {
      // Todo: change backend url
      axios.get(`http://127.0.0.1:3333/api/users/${id}`)
        .then(res => res.data)
        .then(data => setProfile(data))
        // .then(data => console.log(data))
    }
  }, [isOpen])

  const handleClick = (e) => {
    e.preventDefault();
    console.log(id)
    navigate(`/profile/${id}`);
  }

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="flex-shrink-0"
        onClick={handleClick}
      >
        <img
          height={size}
          width={size}
          alt={`${full_name}'s avatar`}
          src={avatar_url || '/images/placeholder.jpg'}
          title={full_name || 'Profile'}
          className="rounded-full aspect-square object-cover"
        />
      </button>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="relative w-[360px] border rounded-xl bg-white flex gap-4 p-4 z-[5]"
        >
          <div className="flex-shrink-0">
            <img
              height={96}
              width={96}
              alt="Avatar"
              src={avatar_url || profile?.avatarUrl || '/images/placeholder.jpg'}
              className="rounded-full aspect-square object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 text-neutral-600 max-w-[216px]">
            <div>
              <span className="text-lg font-semibold whitespace-nowrap">{full_name || profile?.fullname} {' '}</span>
            </div>

            <div className="whitespace-pre-line text-sm">{profile?.contact}</div>

            <div className="whitespace-pre-line text-sm">{profile?.description || "Lập trình viên backend"}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;