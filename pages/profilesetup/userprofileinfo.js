import { InputInstance } from "@/components/globals/Elements/inputs";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { MainInstance } from "@/components/globals/Elements/main";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Userprofileinfo() {
  return (
    <MainInstance>
      {/* className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover shadow-lg bg-center flex flex-col gap-6 px-3 pb-0`} */}

      <SectionInstance>
        <HeadingInstance type={"h3"} content={" choose your payment option"} />
        <ParagraphInstance
          content={
            "The data will be displayed in your account profile for security"
          }
        />
        
        <form action="fill-in" className="w-full h-max  flex flex-col px-3 ">
          <label for="Username" className=" font-semibold">
            Full Name:
          </label>
          <InputInstance type={"text"} onChange={"someFunction"} customclassName={"rounded-md"} />
          <br />
          <ParagraphInstance content={"Pay with"} customclassName={"flex items-start justify-start px-1" }/>
        <br />
     
         <div  className="border border-red-700 rounded-md "> 
          <input type="checkbox" id="remember"/>
          <span className="font-semibold"> Mobile Money</span>
          </div>  
<br />
<div  className="border border-red-700 rounded-md"> 
          <input type="checkbox" id="remember"/>
          <span className="font-semibold"> My Card</span>
          </div>  
          
          

        </form>
        <LinkInstance 
          href={"/profilephoto"}
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full"}
           />
      </SectionInstance>
    </MainInstance>
  );
}
