import { HeadingInstance } from "@/components/globals/Elements/heading";
import { MainInstance } from "@/components/globals/Elements/main";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons

export default function Home() {
  return (
    <MainInstance customclassName={""}
      
    >
      <SectionInstance>
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
        <button id="notification-button">
          <MdLocalCafe className="text-brown-600 animate-bounce" />
        </button>
        <button id="favorite-button">
          <FaHamburger className="text-red-500 animate-bounce" />
        </button>
      </div>

      <ParagraphInstance content={"What are you buying today?"} />
      <div className="flex flex-row w-full items-start justify-between gap-5">
        <input
          type="text"
          placeholder="search for snacks or drinks"
          className="bg-slate-50 shadow-lg rounded-full w-full"
        />
        <button id="filter-button">
          <FaHamburger className="text-red-500 animate-bounce" />
        </button>{" "}
      </div>

      <div className="w-full h-32 bg-slate-100 shadow-lg rounded-md"></div>
      <SectionInstance>
        <ParagraphInstance content={"Popular purchases"} />
        <SectionInstance
          customclassName={
            "w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-row items-center justify-center shadow-lg px-3 py-4 gap-4"
          }
        >
          <button className="w-full h-20 bg-slate-100 rounded-md"></button>
          <button className="w-full h-20 bg-slate-100 rounded-md"> </button>
          <button className="w-full h-20 bg-slate-100 rounded-md"></button>
        </SectionInstance>

        <SectionInstance
          customclassName={
            "w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center shadow-lg px-3 py-4 gap-4"
          }
        >
          <div className="w-full h-20 bg-slate-100 rounded-md justify-start items-center flex flex-row ">
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col items-start justify-items-start  ml-8">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>
          </div>

          <div className="w-full h-20 bg-slate-100 rounded-md justify-start  items-center flex flex-row ">
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col ml-8 items-start justify-items-start">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>
          </div>

          <div className="w-full h-20 bg-slate-100 rounded-md justify-start items-center flex flex-row ">
            <MdLocalCafe className="text-brown-600 animate-bounce " />
            <div className=" flex flex-col items-start justify-items-start  ml-8">
              <ParagraphInstance content={"Strawberry"} />
              <ParagraphInstance content={"10 cedis"} />
            </div>
          </div>
        </SectionInstance>
      </SectionInstance>
      </SectionInstance>
      
    </MainInstance>
  );
}
