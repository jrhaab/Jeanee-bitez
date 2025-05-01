import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { commonIcons } from "@/components/globals/Elements/icons";
import { StyledPasswordInstance } from "@/components/globals/Elements/inputs";
import { LinkInstance } from "@/components/globals/Elements/links";
import { DeafaultLogo } from "@/components/globals/Elements/logo";
import { MainInstance } from "@/components/globals/Elements/main";
import { TermsOfUsageAndPrivacyText } from "@/components/globals/Elements/misc";
import { SectionInstance } from "@/components/globals/Elements/section";
import { HeadingInstance } from "@/components/globals/Elements/typography";
import { APP_ROUTES } from "@/helpers/routes";
import { useState } from "react";

export default function ResetPasswordComponent() {
  //component states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //event handlers
  const handleTogglePasswordShow = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPasswordShow = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <MainInstance
      customclassName={"flex items-end justify-end"}
      bg={`bg-[url('/bg/jenee-auth-bg.png')]`}
    >
      <SectionInstance
        customclassName={
          "h-full justify-start overflow-y-auto py-4 gap-y-8 px-4 bg-[var(--transparent-background-white)]"
        }
      >
        <DeafaultLogo />
        <HeadingInstance
          type={"h4"}
          content={"We heard you lost your password :( Set a new one below."}
        />
        <form action="fill-in" className="w-full flex flex-col gap-y-4">
          <StyledPasswordInstance
            name={"password"}
            required={true}
            showLabel={true}
            label={"New Password"}
            onChange={() => console.log("")}
            iconColor={"black"}
            iconSize={25}
            iconValue={commonIcons.passwordIcon}
            showPassword={showPassword}
            revealPasswordFunc={() => handleTogglePasswordShow()}
          />
          <StyledPasswordInstance
            name={"password"}
            required={true}
            showLabel={true}
            label={"Confirm Password"}
            onChange={() => console.log("")}
            iconColor={"black"}
            iconSize={25}
            iconValue={commonIcons.passwordIcon}
            showPassword={showConfirmPassword}
            revealPasswordFunc={() => handleToggleConfirmPasswordShow()}
          />
        </form>
        <ButtonInstance
          customClass={"w-2/3"}
          type="submit"
          content={"Update password"}
        />
        <LinkInstance
          customclassName={"font-bold text-sm text-center"}
          href={APP_ROUTES.authlogin}
          text={"[var(--secondary-red-color)]"}
          label={"Remembered your password? Go back to login."}
          bg={"transparent"}
        />
        <TermsOfUsageAndPrivacyText />
      </SectionInstance>
    </MainInstance>
  );
}
