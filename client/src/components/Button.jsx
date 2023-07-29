const Button = ({
  label,
  onClick,
  disabled,
  outline,
  warning,
  small,
  icon: Icon,
  type = 'button'
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${warning ? 'bg-red-500' : outline ? 'bg-white' : 'bg-sky-500'}
        ${warning ? 'border-red-500' : outline ? 'border-black' : 'border-sky-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
  );
}

export default Button;