import { HeadingInstance } from "@/components/globals/Elements/heading";
import { InputInstance } from "@/components/globals/Elements/inputs";
import { LinkInstance } from "@/components/globals/Elements/links";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";


export default function Momodetails () {
    return(
        <MainInstance>
            <SectionInstance>
                <HeadingInstance content={"Make Payment"}/>
                <ParagraphInstance content={"Mobile Money"}/>
                <ParagraphInstance content={"Provider"}/>
                <LinkInstance />
                <ParagraphInstance content={"Recipient Momo Number"}/>
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