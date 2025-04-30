import { HeadingInstance } from "@/components/globals/Elements/heading";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { LinkInstance } from "@/components/globals/Elements/links";
import { InputInstance } from "@/components/globals/Elements/inputs";
export default function Carddetails(){
    return(
        <MainInstance>
            <SectionInstance>
<HeadingInstance type={"h3"} content={" Make Payment"}/>
<ParagraphInstance content={"Card Details"}/>
    
                <ParagraphInstance content={"Select card type"}/>
                <LinkInstance />
                <ParagraphInstance content={"Account Number"}/>
                <InputInstance />
                <ParagraphInstance content={"Amount"}/>
                <InputInstance />
                <ParagraphInstance content={"Enter Pin"}/>
                <InputInstance />
               
                <LinkInstance label={"PAY"}/>
                <LinkInstance label={"CANCEL"}/>
                <ParagraphInstance content={"Report an issue"}/>
            </SectionInstance>
        </MainInstance>
    )
}