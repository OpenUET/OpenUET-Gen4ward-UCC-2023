import Profile from "../profile/Profile"

const members = [
  {
    id: 1,
    avatar_url: '/images/placeholder.jpg',
    full_name: 'Nguyễn Văn A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

export default function MembersInfo({
  // members,
}) {
  return (
    <div className="rounded-xl border border-neutral-700 flex flex-col gap-3 p-4">
      <div className="text-xl font-semibold text-white">Team member</div>

      {members?.map((member) => (
        <div key={member.id} className="flex items-center h-full">
          <div className="flex-1 h-full flex gap-2 items-center mr-4 my-2 overflow-x-hidden">
            <Profile
              avatar_url={member?.avatar_url}
              full_name={member?.full_name}
              id={member?.id}
            />
            <span className="text-neutral-200">{member?.full_name}</span>
          </div>

          <div className="flex-1 h-full pl-4 border-l-[1px]">
            <p className="text-neutral-200 whitespace-pre-line text-sm">{member?.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}