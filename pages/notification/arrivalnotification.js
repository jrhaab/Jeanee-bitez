import { SectionInstance } from "@/components/globals/Elements/section";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { FaCheckCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { ButtonInstance } from "@/components/globals/Elements/buttons";
export default function Arrivalnotification() {
  return (
    <MainInstance customclassName={"justify-end items-end"}>
      <SectionInstance
        customclassName={
          "rounded-t-[var(--radius-md)] items-end justify-end gap-y-16 px-10 py-9 h-max"
        }
      >
<FaCheckCircle/>

        <ParagraphInstance content={"Driver has arrived"} />
        <FaBell/>

        <div>
            <ParagraphInstance content={"Rider Id: 60-3423"}/>
            <ParagraphInstance content={"No. Plate: AX 543-22"}/>

        </div>
        <ButtonInstance content={"Stop Ride"}/>
      </SectionInstance>
    </MainInstance>
  );
}
