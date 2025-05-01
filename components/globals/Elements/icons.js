import { FaCookieBite, FaEnvelope, FaPlateWheat } from "react-icons/fa";
import {
  MdEmail,
  MdOutlinePhone,
  MdOutlineFastfood,
  MdOutlineEmojiFoodBeverage,
  MdOutlinePayments,
  MdOutlineAlternateEmail,
} from "react-icons/md";
import { TbLockPassword, TbBottle } from "react-icons/tb";
import { LuUser } from "react-icons/lu";
import { GoEyeClosed, GoEye } from "react-icons/go";

export const IconInstance = () => {
  return <FontAwesomeIcon icon="fa-solid fa-heart" />;
};

export const IconElement = ({ Icon, size, color, customClass }) => {
  return (
    <Icon
      size={size ?? 24}
      color={color ?? "var(--primary-red-color)"}
      className={customClass ?? ""}
    />
  );
};

//all common icons for use within app.
export const commonIcons = {
  emailIcon: MdOutlineAlternateEmail,
  phoneIcon: MdOutlinePhone,
  userIcon: LuUser,
  passwordIcon: TbLockPassword,
  orderIcon: FaPlateWheat,
  fastFoodIcon: MdOutlineFastfood,
  beverageIcon: MdOutlineEmojiFoodBeverage,
  bottleIcon: TbBottle,
  pastriesIcon: FaCookieBite,
  discountIcon: MdOutlinePayments,
  payIcon: MdOutlinePayments,
  revealIcon: GoEyeClosed,
  hashIcon: GoEye,
};
