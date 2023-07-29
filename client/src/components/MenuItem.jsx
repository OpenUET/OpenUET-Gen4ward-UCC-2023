const MenuItem = ({
  onClick,
  label,
  className,
  light = false
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        px-4 
        py-3 
        hover:bg-neutral-700 
        transition
        text-neutral-200
        ${light ? 'font-normal' : 'font-semibold'}
        ${className}
      `}
    >
      {label}
    </div>
  );
}

export default MenuItem;