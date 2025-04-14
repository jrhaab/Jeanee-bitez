import { MainInstance } from "@/components/globals/Elements/main";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { SectionInstance } from "@/components/globals/Elements/section";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Addprofilephoto() {
  return (
    <MainInstance>
      <SectionInstance>
        <HeadingInstance type={"h3"} content={"Upload your profile photo"} />
        <ParagraphInstance
          content={"This data will be displayed in your profile for security"}
        />

        <LinkInstance
          label={"Choose a file from gallery"}
          customclassName={"rounded-md "}
          text={"[var(--secondary-red-color)]"}
          bg={"white"}
        />
        <LinkInstance
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full"}
          href={"./chooseprofile"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
