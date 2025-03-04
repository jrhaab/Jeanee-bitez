export default function FooterInstance() {
  return (
    <header className="w-full h-[10vh] px-[var(--body-global-padding)] py-6 flex  justify-between items-center shadow-md">
      <span className="flex justify-start items-center md:w-[10%] sm:w-[50%]">
        <LogoInstance type={"header"} />
      </span>

      <div className=" h-10 bg-slate-300 rounded-md flex flex-row  justify-center items-center gap-5 w-64 ">
<button id="favorite-button"> Home</button>
<button id="cart-button"><MdLocalCafe className="text-brown-600 animate-bounce" /></button>
<button id="chart-button">  <FaHamburger className="text-red-500 animate-bounce" /></button>
<button id="profile-button"><MdLocalCafe className="text-brown-600 animate-bounce" /></button> </div>
      <div className="flex justify-center items-center md:w-[10%] sm:w-[50%]">
        <ButtonInstance
          onClick={() => console.log("--")}
          showIcon={true}
          Icon={commonIcons.user}
          iconColor={"white"}
          iconSize={22}
          iconPosition={"right"}
          label={"Account"}
          title={"One account for Name School related activities"}
          buttonColor={"mauve-b"}
        />
      </div>

    </header>
  );
}
