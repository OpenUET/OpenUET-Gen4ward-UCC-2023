import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import MenuItem from "../MenuItem";

export default function MembersMenu() {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <button onClick={() => setMenuOpen(!menuOpen)} className="absolute top-3 right-3 p-2 rounded-full hover:bg-neutral-100 transition">
        <BsThreeDots size={20} />
      </button>

      <dialog open={menuOpen} className="rounded-xl shadow-md w-56 bg-white right-0 top-14 text-sm mr-0 p-0 z-[5]">
        <div onClick={() => setMenuOpen(false)} className="flex flex-col w-full cursor-pointer">
          <MenuItem
            label="Add team member(s)"
            onClick={() => { }}
          />
          <MenuItem
            label="Manage team members"
            onClick={() => { !modalRef.current?.open && modalRef.current?.showModal(); }}
          />
        </div>
      </dialog>

      {/* Manege team members modal */}
    </div>
  )
}