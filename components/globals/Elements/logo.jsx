import Image from "next/image";

export const DeafaultLogo = ({ filter }) => {
  return (
    <Image
      src={
        "https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"
      }
      alt="Logo"
      width={1024}
      height={1024}
      className={`h-20 w-44 ${filter ?? ""}`}
    />
  );
};
