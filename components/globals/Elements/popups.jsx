import { toast } from "sonner";
import { IErrorNotifProps, INotificationProps } from "@/@types/IElements";
import { commonIcons, IconInstance } from "./icons";

let iconSize = 20;
export const NotifyUser = ({
  id,
  type,
  message,
  detail,
  customClass,
  icon,
  closeButton,
}) => {
  let closeButtonStyles = {
    backgroundColor: "var(--danger)",
    color: "var(--white)",
  };
  return type == "success"
    ? toast.success(message, {
        id: id,
        className: customClass,
        description: detail,
        duration: 5000,
        icon: (
          <IconInstance
            Icon={commonIcons.checkicon}
            size={iconSize}
            color={`var(--success)`}
          />
        ),
        closeButton: closeButton ?? true,
      })
    : type == "error"
    ? toast.error(message, {
        id: id,
        className: customClass,
        description: detail,
        duration: 5000,
        icon: (
          <IconInstance
            Icon={commonIcons.error}
            size={iconSize}
            color={`var(--danger)`}
          />
        ),
        closeButton: closeButton ?? true,
        cancelButtonStyle: closeButtonStyles,
      })
    : toast.info(message, {
        id: id,
        className: customClass,
        description: detail,
        duration: 5000,
        icon: (
          <IconInstance
            Icon={commonIcons.info}
            size={iconSize}
            color={`var(--primary-blue)`}
          />
        ),
        closeButton: closeButton ?? true,
        cancelButtonStyle: closeButtonStyles,
      });
};
