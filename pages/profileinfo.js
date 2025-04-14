import { InputInstance } from "@/components/globals/Elements/inputs";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { MainInstance } from "@/components/globals/Elements/main";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Profileinfo() {
  return (
    <MainInstance>
      {/* className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover shadow-lg bg-center flex flex-col gap-6 px-3 pb-0`} */}

      <SectionInstance>
        <HeadingInstance type={"h3"} content={" Fill in your profile bio"} />
        <ParagraphInstance
          content={
            "The data will be displayed in your account profile for security"
          }
        />
        <form action="fill-in" className="w-full h-max  flex flex-col px-3 ">
          <label for="username" className=" font-semibold">
            Full Name:
          </label>
          <InputInstance type={"text"} onChange={"someFunction"} />

          <label for="password" className="text-1xl font-semibold">
            Address:
          </label>
          <InputInstance type={"text"} onChange={"someFunction"} />

          <label for="password" className=" font-semibold">
            Phone number:
          </label>
          <InputInstance type={"text"} onChange={"someFunction"} />

          <label for="password" className=" font-semibold">
            Card number (Optional):
          </label>
          <InputInstance type={"text"} onChange={"someFunction"} />
          

        </form>
        <LinkInstance 
          href={"./profilephoto"}
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full"}
           />
      </SectionInstance>
    </MainInstance>
  );
}
