import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { InputInstance } from "@/components/globals/Elements/inputs";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { FaHamburger } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";

export default function Sellernotification() {
  return (
    <MainInstance>
      <SectionInstance>
        <HeadingInstance type={"h3"} content={"Notification"} />
        <div className="flex flex-row">
          <InputInstance />
          <i id="favorite-button">
            <FaHamburger className="text-red-500 " />
          </i>
          <FaBlenderPhone />
        </div>

        <div>
          <ParagraphInstance
            content={"your order has been received successfully"}
          />
          <ParagraphInstance content={"2:30pm"} customclassName={"px-8"} />
        </div>
        <div>
          <ButtonInstance content={"notify the seller"} />
          <ButtonInstance content={"Back"} />
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
