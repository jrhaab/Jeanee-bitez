
import { ButtonInstance} from "@/components/globals/Elements/buttons";
import {InputInstance} from "@/components/globals/Elements/inputs";
import { MainInstance } from "@/components/globals/Elements/main";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";


export default function OTPcode() {
    return(
        <MainInstance> 
         
            <SectionInstance> 
                   
            <HeadingInstance type={"h3"} content={"Forgot password "}/>
            <ParagraphInstance content={"Enter 4-digits PIN code we sent to your number +233****001"}/> 
            <div className="h-max w-full flex flex-row items-center justify-center gap-6 ">
            <InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"}/>
            <InputInstance type={"text"}className={'${customClass }w-full'} onChange={"someFunction"}/> 
            <InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"} /> 
            <InputInstance type={"text"} className={'${customClass} w-full'} onChange={"someFunction"} /> 
            </div>
            <ParagraphInstance content={"Resend code in 56 s"}/>
            <ButtonInstance type="submit" content={"Submit"}/> 
            </SectionInstance>

            
       
        </MainInstance>
    )

}