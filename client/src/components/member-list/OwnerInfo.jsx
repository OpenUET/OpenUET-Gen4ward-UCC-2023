import Profile from "../profile/Profile";

const avatar_url = '/images/placeholder.jpg';
const full_name = 'Giáo sư Lê Thanh A';
const contact = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const id = 1;

export default function OwnerInfo({
  // avatar_url,
  // full_name,
  // contact = '',
  // id
}) {
  return (
    <div className="rounded-xl border border-neutral-700 overflow-hidden flex flex-col gap-2 p-4">
      <div className="text-xl font-semibold text-white">Project manager</div>

      <div className="flex items-center h-full">
        <div className="flex-1 h-full flex gap-2 items-center pr-4 py-2">
          <Profile
            avatar_url={avatar_url}
            full_name={full_name}
            id={id}
          />
          <span className="text-neutral-200">{full_name}</span>
        </div>

        <div className="flex-1 flex items-center h-full pl-4 border-l-[1px] w-1/2">
          <p className="text-neutral-200 whitespace-pre-line truncate text-sm">{contact}</p>
        </div>
      </div>
    </div>
  )
}