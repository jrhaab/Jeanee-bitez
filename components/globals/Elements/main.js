export const MainInstance = ({ children, customclassName, bg }) => {
  return (
    <main
      className={`${
        bg ? `${bg}` : "bg-[url('/bg/jenee-auth-bg.png')] "
      }  bg-no-repeat bg-cover bg-center h-[100vh] max-w-[768px] min-w-[300px] overflow-y-auto flex flex-col justify-start items-center place-self-center ${customclassName}`}
    >
      {children}
    </main>
  );
};
