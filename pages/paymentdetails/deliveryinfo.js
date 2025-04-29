import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { InputInstance } from "@/components/globals/Elements/inputs";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";

export default function Checkout() {
  return (
    <MainInstance>
      <SectionInstance>
        <HeadingInstance type={"h3"} content={"Checkout"} />
        <ParagraphInstance content={"Delivery Information"} />

        <ParagraphInstance content={"Full name:"} />
        <InputInstance />

        <ParagraphInstance content={"Address:"} />
        <InputInstance />

        <ParagraphInstance content={"Phone Number:"} />
        <InputInstance />

        <ParagraphInstance content={"Current Location"} />
        <InputInstance />

        <ParagraphInstance content={"Payment Method"} />
        <InputInstance />

        <ButtonInstance content={"Order Now"} />
      </SectionInstance>
    </MainInstance>
  );
}
