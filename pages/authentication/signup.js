import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { InputInstance } from "@/components/globals/Elements/inputs";
import Image from "next/image";
import { LinkInstance } from "@/components/globals/Elements/links";
import { SectionInstance } from "@/components/globals/Elements/section";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";

export default function Signup() {
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
        <HeadingInstance type={"h3"} content={"Sign Up For Free"} />

        <form action="fill-in" className="w-full flex flex-col  px-3 py-6">
          <div>
            <label for="email-address" className=" font-semibold ">
              Email or username:
            </label>
            <InputInstance
              type={"text"}
              className={"${customClass} w-full "}
              onChange={"someFunction"}
            />
          </div>

          <div>
            <label for="phone number" className=" font-semibold">
              Phone Number:
            </label>
            <InputInstance
              type={"text"}
              className={"${customClass} w-full "}
              onChange={"someFunction"}
            />
          </div>
          <div>
            <label for="password" className=" font-semibold">
              Password:
            </label>
            <InputInstance
              type={"text"}
              className={"${customClass} w-full "}
              onChange={"someFunction"}
            />
          </div>
          <div>
            <label for="password" className=" font-semibold">
              Confirm Password:
            </label>
            <InputInstance
              type={"text"}
              className={"${customClass} w-full "}
              onChange={"someFunction"}
            />
          </div>
          <div > 
          <input type="checkbox" id="remember"/>
          <span className="font-semibold "> Remind me</span>
          </div>

          
          <br />
         
        </form>
        <ButtonInstance customClass={" items-center justify-center w-2/3"} type="submit" content={"Sign up"} />
        <ParagraphInstance content={" Already have an account?"} />

        <LinkInstance
        
          href={"/login"}
          text={"[var(--secondary-red-color)]"}
          label={"Login"}
          bg={"transparent"}
        />
      </SectionInstance>
    </MainInstance>
  );
}

