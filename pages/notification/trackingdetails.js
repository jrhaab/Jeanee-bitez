import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { FaRing } from "react-icons/fa";

export default function Trackdetails() {
  return (
    <MainInstance>
      <SectionInstance>
        <div>
          <ParagraphInstance content={"Tracr Orders"} />
          <div>
            <Image
              src={"/trademarks/jeanee-transparent-logo_wz8kzv.png"}
              alt=""
              width={1024}
              height={1024}
              className="w-1/3 h-auto"
            />
            <div>
              <ParagraphInstance content={"Emmanuel"} />
              <ParagraphInstance content={"10mins on the way"} />
            </div>

            <FaRing />
          </div>
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
