import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";

export default function Callringing (){
    return (
        <MainInstance>
            <SectionInstance>
                <Image  src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
              alt=""
              width={1024}
              height={1024}
              className="w-1/3 h-auto"
                />
                <div>
                    <ParagraphInstance content={"Emmanuel"}/>
                    <ParagraphInstance content={"Ringing"}/>
                </div>
                <div>
                <ButtonInstance content={"cancel"}/>
                <ButtonInstance content={"pick up"}/>
                </div>
              
            </SectionInstance>
        </MainInstance>
    )
}