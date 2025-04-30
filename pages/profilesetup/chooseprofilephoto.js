import { MainInstance } from "@/components/globals/Elements/main";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { SectionInstance } from "@/components/globals/Elements/section";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Chooseprofilephoto() {
  return (
    <MainInstance customclassName={"justify-end items-end "}>
      <SectionInstance  customclassName={
          "rounded-t-[var(--radius-md)]  gap-y-8 px-10 py-9 h-max  "
        }>
        <HeadingInstance type={"h3"} content={"Upload your profile photo"} />
        <ParagraphInstance
          content={"This data will be displayed in your profile for security"}
        />

        <LinkInstance
          label={"Choose file from gallery"}
          customclassName={"rounded-md "}
          text={"[var(--secondary-red-color)]"}
          bg={"white"}
        />
        <LinkInstance
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full w-2/3"}
          href={"/profileready"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
