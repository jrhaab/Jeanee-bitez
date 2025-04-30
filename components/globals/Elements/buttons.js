export const ButtonInstance = ({
  content,
  onClick,
  type,
  customClass,
  bg,
  text,
}) => {
  return (
    <button
      type={type ?? "button"}
      onClick={() => onClick()}
      className={`${bg ? `bg-${bg}` : "bg-[var(--secondary-red-color)] "} ${
        text ? `text-${text}` : "white"
      } rounded-[var(--radius-full)] 
            text-white  font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-3 py-2 w-full ${customClass}`}
    >
      {content}
    </button>
  );
};
