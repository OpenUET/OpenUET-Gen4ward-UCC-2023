import Button from "../Button";
import Profile from "../profile/Profile";

const requests = [
  {
    id: 2,
    avatar_url: '/images/placeholder.jpg',
    full_name: 'Nguyễn Văn B',
    description: 'Consectetur adipiscing elit.'
  },
  {
    id: 3,
    avatar_url: '/images/placeholder.jpg',
    full_name: 'Nguyễn Văn C',
    description: 'Lorem ipsum dolor sit amet.'
  }
]

const ListingRequests = ({
  onSubmit,
  disabled = false,
  // requests = [],
  userId,
}) => {
  if (requests.length == 0)
    return null

  return (
    <div className="rounded-xl border-[1px] border-neutral-700 overflow-hidden">
      <div className="flex flex-col gap-4 p-4">
        <div className="text-xl font-semibold text-white">Yêu cầu</div>

        {requests?.map((request) => (
          <div key={request.id} className="flex gap-2 flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start justify-between lg:flex-row lg:items-center">
            <span className="flex gap-2 items-center text-neutral-200">
              <Profile
                avatar_url={request?.avatar_url}
                full_name={request?.full_name}
                id={request?.id}
              />
              {request?.full_name}
            </span>

            <div className="flex gap-2 w-2/3 sm:w-1/3 md:w-2/3 lg:w-1/3">
              <div className="whitespace-nowrap w-full">
                <Button
                  label="Accept"
                  onClick={() => onSubmit(request.id, 'accept')}
                  small
                  disabled={disabled}
                />
              </div>
              <div className="whitespace-nowrap w-full">
                <Button
                  label="Deny"
                  onClick={() => onSubmit(request.id, 'reject')}
                  small
                  outline
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListingRequests;