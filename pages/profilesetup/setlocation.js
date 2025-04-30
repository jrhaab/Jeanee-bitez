import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { LinkInstance } from "@/components/globals/Elements/links";
export default function Setlocation() {
  return (
    <MainInstance>
      <SectionInstance>
        <HeadingInstance type={"h3"} content={"Set location"} />
        <ParagraphInstance
          content={"This data will be displayed in your profile for security"}
        />
        <div className="bg-slate-100 rounded-2xl h-56 w-56 flex items-center justify-center">
          
          <ParagraphInstance content={"set location"}/>
        </div>
        <LinkInstance
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full w-2/3"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
