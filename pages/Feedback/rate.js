import { ButtonInstance } from "@/components/globals/Elements/buttons"
import { InputInstance } from "@/components/globals/Elements/inputs"
import { MainInstance } from "@/components/globals/Elements/main"
import { ParagraphInstance } from "@/components/globals/Elements/paragraph"
import { SectionInstance } from "@/components/globals/Elements/section"
import { FaStar } from "react-icons/fa"
export default function Rateorder() {
    return (
        <MainInstance>
            <SectionInstance>
                <Image/>
                <div>
                    <ParagraphInstance content={"Thank You"}/>
                    <ParagraphInstance content={"Order COMPLETED"}/>
                </div>
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
                <div>
                    <InputInstance/>
                    <ButtonInstance content={"Submit"}/>
                </div>
            </SectionInstance>
        </MainInstance>
    )
}