import { MdLocalCafe } from "react-icons/md"; // Material Design icons
import { MainInstance } from "@/components/globals/Elements/main";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Passwordrest() {
  return (
    <MainInstance>
      <SectionInstance>
        <HeadingInstance type={"h3"} content={"Forgot password"} />
        <ParagraphInstance
          content={"Select the suitable option to reset your password"}
        />
        <div className="flex flex-col gap-10  h-max w-full">
          <button className=" bg-slate-50 rounded-[var(--radius-2xl)] h-max w-full ">
            <MdLocalCafe className="text-brown-600 animate-bounce" />
            <div className="flex flex-col text-1xl font-bold">
              <small className="flex items-start justify-items-start  ml-8">
                Via SMS:
              </small>
              <small className="flex items-start justify-items-start  ml-8">
                +233*****37
              </small>
            </div>
          </button>

          <button className=" bg-slate-50 rounded-[var(--radius-2xl)] h-max w-full ">
            <MdLocalCafe className="text-brown-600 animate-bounce" />
            <div className="flex flex-col text-1xl font-bold">
              {" "}
              <small className="flex items-start justify-items-start  ml-8">
                {" "}
                Via email:
              </small>
              <small className="flex items-start justify-items-start  ml-8">
                em******@gmail.com
              </small>
            </div>
          </button>
        </div>
        <LinkInstance
          href={"./OTPrecoverycode"}
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
