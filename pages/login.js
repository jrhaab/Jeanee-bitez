import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { InputInstance } from "@/components/globals/Elements/inputs";
import Image from "next/image";
import { LinkInstance } from "@/components/globals/Elements/links";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";

export default function Login() {
  return (
    <MainInstance>
      <SectionInstance>
        <Image
          src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
          alt=""
          width={1024}
          height={1024}
          className="w-1/3 h-auto"
        />
        <HeadingInstance type={"h3"} content={"Login to your account"} />
        <form action="fill-in" className="w-full flex flex-col  px-3 py-6">
          <label for="email-address" className=" font-semibold">
            Email:
          </label>
          <InputInstance type={"text"} onChange={"someFunction"} />

          <label for="email-address" className=" font-semibold ">
            Password:
          </label>
          <InputInstance type={"text"} onChange={"someFunction"} />

          <span className=" font-semibold"> Remind me</span>
          <br />
          <ButtonInstance type="submit" content={"Login"} />
        </form>
        <LinkInstance
          href={"./passwordreset"}
          text={"[var(--secondary-red-color)]"}
          label={"Forgot the password?"}
          bg={"white"}
        />
        <ParagraphInstance content={"Don't have an account?"} />

        <LinkInstance
          href={"./signup"}
          text={"[var(--secondary-red-color)]"}
          label={"Sign up"}
          bg={"white"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
