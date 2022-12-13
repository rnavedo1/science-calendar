export default function Button({
  type,
  onSubmit,
  onClick,
  styleClasses,
  label,
}) {
  return (
    <button
      type={type}
      onSubmit={onSubmit}
      className={styleClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
