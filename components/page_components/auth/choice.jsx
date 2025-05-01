import { LinkInstance } from "@/components/globals/Elements/links";
import { DeafaultLogo } from "@/components/globals/Elements/logo";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { GLOBAL_APP_META } from "@/helpers/app.constants";
import { APP_ROUTES } from "@/helpers/routes";

export default function UserAuthChoice() {
  return (
    <MainInstance
      customclassName={"flex items-end justify-end"}
      bg={`bg-[url('/bg/jenee-auth-bg.png')]`}
    >
      <SectionInstance
        customclassName={"h-full justify-center py-4 gap-y-8 px-4"}
      >
        <DeafaultLogo />
        <ParagraphInstance
          customclassName={"!font-bold text-sm"}
          content={`Sign up or Login to get the most out of ${GLOBAL_APP_META.APP_NAME_LOWER_CASED}`}
        />
        <div className="w-full h-max flex flex-col justify-center items-center !gap-y-4 relative bottom-0">
          <LinkInstance
            text={"[var(--primary-red-color)]"}
            href={APP_ROUTES.authlogin}
            label={"Login"}
            customclassName={
              "!w-full font-bold py-2 text-sm bg-white border-2 border-[var(--primary-red-color)]"
            }
          ></LinkInstance>
          <LinkInstance
            text={"white"}
            href={APP_ROUTES.authsignup}
            label={"Sign up"}
            customclassName={
              "!w-full font-bold py-2 text-sm bg-[var(--secondary-red-color)]"
            }
          ></LinkInstance>
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
