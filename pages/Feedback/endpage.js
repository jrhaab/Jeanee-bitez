import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { FaStar } from "react-icons/fa";

export default function Endpage(){
    return(
        <MainInstance>
            <SectionInstance>
                <Image/>
                <ParagraphInstance content={"Enjoy your snack"}/>
                <div>
                    <ParagraphInstance content={"Please rate the driver"}/>
                   <div className="flex flex-row gap-1">
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                    </div> 
                </div>
            </SectionInstance>
        </MainInstance>
    )
        
    
}