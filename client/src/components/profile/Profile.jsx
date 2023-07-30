import { autoUpdate, flip, offset, shift, useClick, useFloating, useFocus, useHover, useInteractions } from '@floating-ui/react';
import { useEffect, useState } from "react";

const Profile = ({
  size = 32,
  avatar_url,
  full_name,
  id,
}) => {
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
      // Todo: fetch profile
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="flex-shrink-0"
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
              src={avatar_url || '/images/placeholder.jpg'}
              className="rounded-full aspect-square object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 text-neutral-600 max-w-[216px]">
            <div>
              <span className="text-lg font-semibold whitespace-nowrap">{full_name} {' '}</span>
              <span>{profile?.year_of_birth ? `(${profile?.year_of_birth}) ` : ' '}</span>
              <span>({profile?.is_male === undefined ? "" : profile?.is_male ? "Nam" : "Nữ"})</span>
            </div>

            <div className="whitespace-pre-line text-sm">{profile?.contact}</div>

            <div className="whitespace-pre-line text-sm">{profile?.description}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;