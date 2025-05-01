import { IconElement } from "./icons";

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

export const ActionButtonInstance = ({
  title,
  buttonStyleType,
  customClass,
  buttonColor,
  iconValue,
  iconColor,
  iconSize,
  clickEvent,
}) => {
  let buttonType;
  buttonType =
    buttonStyleType === "cancel"
      ? "border border-red-700"
      : buttonStyleType === "proceed"
      ? "border border-green-700"
      : buttonStyleType === "tentative"
      ? "border border-[var(--primary-red-color)]"
      : "border-none";

  return (
    <button
      className={`rounded-full py-2 px-2 h-max w-max flex flex-row- justify-center items-center ${buttonType} ${buttonColor} ${customClass}`}
      type={"button"}
      onClick={clickEvent}
      title={title ?? "Click me"}
    >
      <IconElement
        Icon={iconValue}
        color={iconColor ?? "black"}
        size={iconSize ?? 25}
      />
    </button>
  );
};
