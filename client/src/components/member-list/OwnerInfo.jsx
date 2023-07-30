import Profile from "../profile/Profile";

export default function OwnerInfo({
  userData
}) {
  return (
    <div className="rounded-xl border border-neutral-700 overflow-hidden flex flex-col gap-2 p-4">
      <div className="text-xl font-semibold text-white">Project manager</div>

      <div className="flex items-center h-full">
        <div className="flex-1 h-full flex gap-2 items-center pr-4 py-2">
          <Profile
            avatar_url={userData?.avatarUrl}
            full_name={userData?.fullname}
            id={userData?.id}
          />
          <span className="text-neutral-200">{userData?.fullname}</span>
        </div>

        <div className="flex-1 flex items-center h-full pl-4 border-l-[1px] w-1/2">
          <p className="text-neutral-200 whitespace-pre-line truncate">Quản lý dự án, thiết kế giao diện</p>
        </div>
      </div>
    </div>
  )
}