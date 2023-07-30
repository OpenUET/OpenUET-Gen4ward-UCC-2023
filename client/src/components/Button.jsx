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
        bg-transparent
        text-white
        ${warning ? 'border-red-500' : outline ? 'border-neutral-700' : 'border-green-400 text-green-400'}
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