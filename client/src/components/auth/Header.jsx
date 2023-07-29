export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
  onBack,
}) {
  return (
    <div className="mb-10">
      <button onClick={onBack} className="absolute top-6 text-2xl text-white">🡠</button>

      <div className="flex justify-center">
        {/* Favicon here */}
        <div className="text-4xl font-bold italic pt-8 pb-4 text-white">OpenUET</div>
      </div>
      <h2 className="w-full mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph} {' '}
        <a href={linkUrl} className="font-medium text-rose-600 hover:text-rose-500">
          {linkName}
        </a>
      </p>
    </div>
  )
}