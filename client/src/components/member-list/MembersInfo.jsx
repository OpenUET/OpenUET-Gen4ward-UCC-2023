import Profile from "../profile/Profile"

export default function MembersInfo({
  userData,
}) {
  return (
    <div className="rounded-xl border border-neutral-700 flex flex-col gap-3 p-4">
      <div className="text-xl font-semibold text-white">Team member</div>

      {userData?.map((member) => (
        <div key={member.id} className="flex items-center h-full">
          <div className="flex-1 h-full flex gap-2 items-center mr-4 my-2 overflow-x-hidden">
            <Profile
              avatar_url={member?.avatarUrl}
              full_name={member?.fullname}
              id={member?._id}
            />
            <span className="text-neutral-200">{member?.fullname}</span>
          </div>

          <div className="flex-1 h-full pl-4 border-l-[1px]">
            <p className="text-neutral-200 whitespace-pre-line">Lập trình viên backend</p>
          </div>
        </div>
      ))}
    </div>
  )
}