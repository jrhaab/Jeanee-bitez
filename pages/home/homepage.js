import { ButtonInstance } from "@/components/globals/Elements/buttons";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { InputInstance } from "@/components/globals/Elements/inputs";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons

export default function Home() {
  return (
    <MainInstance>
      <SectionInstance customclassName={"py-5"}>
        <div className="flex flex-row justify-center items-center gap-10 w-full">
          <Image
            src={
              "https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"
            }
            alt=""
            width={100}
            height={100}
          />

          <HeadingInstance type={"h3"} content={"Hello!, Emmanuel"} />
          <i id="notification-button">
            <MdLocalCafe className="text-brown-600 animate-bounce" />
          </i>
          <i id="favorite-button">
            <FaHamburger className="text-red-500 animate-bounce" />
          </i>
        </div>

        <ParagraphInstance content={"What are you buying today?"} />
        <div className="flex flex-row w-full items-start justify-between gap-5">
          <InputInstance
            type="text"
            placeholder="search yoghurts or pastries"
            className="bg-slate-50 shadow-lg rounded-full w-full"
          />

          <i id="filter-button">
            <FaHamburger className="text-red-500 animate-bounce" />
          </i>
        </div>
        <div className="flex flex-row w-max gap-5 ">
          <ButtonInstance content={"strawberry"} />
          <ButtonInstance content={"Vanilla"} />
          <ButtonInstance content={"Chocolate"} />
        </div>
        <div className="flex flex-row w-full">
          <ParagraphInstance content={"Best Buys"} />
          <ParagraphInstance content={"See All"} />
        </div>

        <div className="flex flex-row items-center justify-center w-full gap-6 px-3">
          <button className="w-40 h-20 flex flex-col items-center  bg-slate-100 rounded-md">
            {" "}
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col items-start justify-start  ">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>
          </button>

          <button className="w-40 h-20 flex flex-col items-center  bg-slate-100 rounded-md">
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col items-start justify-start  ">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>{" "}
          </button>

          <button className="w-40 h-20 flex flex-col items-center  bg-slate-100 rounded-md">
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col items-start justify-start  ">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>
          </button>
        </div>

        <div className="flex flex-row w-full">
          <ParagraphInstance content={"Recommended Pastries"} />
          <ParagraphInstance content={"See All"} />
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-6 px-3">
          <button className="w-40 h-20 flex flex-col items-center  bg-slate-100 rounded-md">
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col items-start justify-start  ">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>
          </button>

          <button className="w-40 h-20 flex flex-col items-center  bg-slate-100 rounded-md">
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col items-start justify-start">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>
          </button>

          <button className="w-40 h-20 flex flex-col items-center  bg-slate-100 rounded-md">
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col items-start justify-start">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>
          </button>
        </div>
        <div className="flex flex-row w-full">
          <ParagraphInstance content={"Your Favorites"} />
          <ParagraphInstance content={"See All"} />
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
