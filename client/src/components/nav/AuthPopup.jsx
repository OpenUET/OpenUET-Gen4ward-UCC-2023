import { useEffect, useRef } from "react";
import LoginPage from "../auth/LoginPage";

export default function AuthPopup({ activeTab, setActiveTab }) {
  const authModalRef = useRef(null);

  const handleCloseDialog = () => {
    authModalRef.current.close();
    setActiveTab('');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const dialogDimensions = authModalRef.current?.getBoundingClientRect()
      if (
        dialogDimensions && (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        )
      ) {
        handleCloseDialog()
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (activeTab === 'login' || activeTab === 'signup') {
      !authModalRef.current.open && authModalRef.current.showModal();
    }
  }, [activeTab]);

  return (
    <>
      <dialog ref={authModalRef} className='popup sm:w-[540px] w-full rounded-2xl overflow-x-hidden h-[50vh]'>
        <div className='w-full absolute left-0'>
          <LoginPage onBack={handleCloseDialog} />
        </div>
      </dialog>
    </>
  )
}