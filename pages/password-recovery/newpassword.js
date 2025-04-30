import Image from "next/image";
import { InputInstance } from "@/components/globals/Elements/inputs";
import { MainInstance } from "@/components/globals/Elements/main";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Newpassword() {
  return (
    <MainInstance>
      <SectionInstance>
        <SectionInstance>
          <Image
            src={
              "https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"
            }
            alt=""
            width={100}
            height={100}
          />
          <HeadingInstance type={"h3"} content={"Rest Password"} />
          <ParagraphInstance content={" create a new password"} />
          <form action="fill-in" className="w-full flex flex-col  px-3 py-6">
            <label htmlFor="newpassword"> New Password:</label>
            <InputInstance
              type={"text"}
              className={"${customClass} w-full"}
              onChange={"someFunction"}
            />

            <label htmlFor="newpassword"> Confirm Password:</label>
            <InputInstance
              type={"text"}
              className={"${customClass} w-full"}
              onChange={"someFunction"}
            />
            <div>
              <input type="checkbox" />
              <label for="remember" className="font-bold">
                Remind me{" "}
              </label>
            </div>
          </form>
        </SectionInstance>
        <LinkInstance
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full"}
        />{" "}
        <br />
        <LinkInstance
          customclassName={
            "bg-slate-300 rounded-[var(-radius-full)] w-full h-10"
          }
          label={"Cancel"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
