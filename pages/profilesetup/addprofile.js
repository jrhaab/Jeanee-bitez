import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";
import { HeadingInstance } from "@/components/globals/Elements/heading";
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
        <div className="bg-slate-100 rounded-full h-40 w-40 "></div>
<LinkInstance customclassName={"font-bold "} label={"Add new photo"} bg={"transparent"} text={"[var(--primary-red-color)]"} href={"/chooseprofilephoto"} />
        <LinkInstance
          href={"/setlocation"}
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
