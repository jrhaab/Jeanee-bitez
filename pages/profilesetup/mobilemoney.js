import Image from "next/image";
import { MainInstance } from "@/components/globals/Elements/main";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { SectionInstance } from "@/components/globals/Elements/section";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Mobilemoney() {
  return (
    <MainInstance customclassName={"justify-end items-end "}>
      <SectionInstance
        customclassName={
          "rounded-t-[var(--radius-md)] items-end justify-end  px-10 py-9 h-max"
        }
      >
        <Image
          src={
            "https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"
          }
          alt=""
          width={100}
          height={100}
        />

        <HeadingInstance
          type={"h3"}
          content={"Choose your Mobile Money Network"}
        />

        <ParagraphInstance
          content={"*This data will be displayed in your profile for security"}
        />
        <div className="flex flex-col items-center justify-center w-full  py-10 ">
          <button className="bg-slate-50 items-center justify-center rounded-2xl h-12 w-full text-[var(--secondary-red-color)]  ">
            Telecel
          </button>
          <br />
          <button className="bg-slate-50 items-center justify-center rounded-2xl h-12 w-full text-[var(--secondary-red-color)]  ">
            AirtelTigo
          </button>
          <br />
          <button className="bg-slate-50 items-center justify-center rounded-2xl h-12 w-full  text-[var(--secondary-red-color)] ">
            MTN
          </button>
          <br />
        </div>
        <LinkInstance
          type="submit"
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full w-2/3"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
