import { LinkInstance } from "@/components/globals/Elements/links";
import { DeafaultLogo } from "@/components/globals/Elements/logo";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { APP_ROUTES } from "@/helpers/routes";

export default function LandingSplash() {
  return (
    <MainInstance
      customclassName={"flex items-end justify-end"}
      bg={`bg-[url('/bg/pexels-yuuilina-10254480.jpg')]`}
    >
      <SectionInstance customclassName={"h-max py-4 gap-y-8 px-6 rounded-t-xl"}>
        <DeafaultLogo />
        <ParagraphInstance
          customclassName={"font-black text-sm"}
          content={"The best ordering and delivering app of the century"}
        />
        <LinkInstance
          text={"white"}
          href={APP_ROUTES.authchoice}
          label={"Get started"}
          customclassName={
            "!w-full font-bold text-sm bg-[var(--secondary-red-color)]"
          }
        ></LinkInstance>
      </SectionInstance>
    </MainInstance>
  );
}
