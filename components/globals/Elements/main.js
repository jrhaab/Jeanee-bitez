import { Children } from "react";

export const MainInstance = ({ children,customclassName, bg}) => {
    return(
       <main className={ `${bg?`${bg}`:"bg-[url('/bg/jenee-auth-bg.png')] "}  bg-no-repeat bg-cover bg-center h-[100vh] w-[100vw] flex flex-col justify-start items-center ${customclassName}`}>
      
       {children} 
       </main>
 
    );
};

