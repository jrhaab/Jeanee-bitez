import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Profilecomplete() {
  return (
    <MainInstance customclassName={"justify-end items-end "}>
      <SectionInstance
        customclassName={
          "rounded-t-[var(--radius-md)] items-end justify-end gap-y-16 px-10 py-9 h-max"
        }
      >
        <FaHamburger className="text-red-500 animate-bounce" />
        <HeadingInstance type={"h3"} content={"Congrats!"} />
        <ParagraphInstance content={"Your profile is ready for use"} />
        <LinkInstance
          href={"/home/homepage"}
          label={"Next"}
          customclassName={"rounded-full"}
          text={"white"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
