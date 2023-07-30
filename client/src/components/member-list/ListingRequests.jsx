import Button from "../Button";
import Profile from "../profile/Profile";

const ListingRequests = ({
  onSubmit,
  disabled = false,
  requests = [],
  userId,
}) => {
  return (
    <div className="rounded-xl border border-neutral-700 overflow-hidden">
      <div className="flex flex-col gap-4 p-4">
        <div className="text-xl font-semibold text-white">Requests</div>

        {requests?.map((request) => (
          <div key={request.id} className="flex gap-2 flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start justify-between lg:flex-row lg:items-center">
            <span className="flex gap-2 items-center text-neutral-200">
              <Profile
                avatar_url={request?.avatarUrl}
                full_name={request?.fullname}
                id={request?.id}
              />
              {request?.fullname}
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