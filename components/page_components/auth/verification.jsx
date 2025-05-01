import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { commonIcons } from "@/components/globals/Elements/icons";
import {
  CheckBoxInstance,
  StyledPasswordInstance,
  StyledTextInputInstance,
} from "@/components/globals/Elements/inputs";
import { LinkInstance } from "@/components/globals/Elements/links";
import { DeafaultLogo } from "@/components/globals/Elements/logo";
import { MainInstance } from "@/components/globals/Elements/main";
import { TermsOfUsageAndPrivacyText } from "@/components/globals/Elements/misc";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { HeadingInstance } from "@/components/globals/Elements/typography";
import { APP_ROUTES } from "@/helpers/routes";
import { useState } from "react";

export default function VerificationComponent() {
  //component states
  const [showPassword, setShowPassword] = useState(false);

  //event handlers
  const handleTogglePasswordShow = () => {
    setShowPassword(!showPassword);
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
          type={"h3"}
          content={"Verify your account to get started."}
        />
        <form action="fill-in" className="w-full flex flex-col gap-y-4">
          <StyledTextInputInstance
            name={"mobileNumber"}
            required={true}
            showLabel={true}
            label={"Email or Phone number"}
            customWrapperClass={""}
            customInputWrapperClass={""}
            custominputclassName={""}
            defaultValue={"+233"}
            onChange={() => console.log("")}
            inputType={"tel"}
            iconColor={"black"}
            iconSize={25}
            iconValue={commonIcons.phoneIcon}
          />
        </form>
        <ButtonInstance
          customClass={"w-2/3 place-self-center"}
          type="submit"
          content={"Verify"}
        />

        <TermsOfUsageAndPrivacyText />
      </SectionInstance>
    </MainInstance>
  );
}
