export const MainInstance = ({ children,customclassName, bg}) => {
    return(
       <main className={ `${bg?`bg-${bg}`:"[url('/bg/jenee-auth-bg.png')]"} bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center py-28 ${customclassName}`}>
      
       {children} 
       </main>

    );
};

