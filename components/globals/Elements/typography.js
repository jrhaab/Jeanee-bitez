
export const Main = ({title, children, onClick }) => {
    return(
       <main onClick={onClick} className={"bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col gap-6 px-3 pb-0`"}>
       {title && <h2>{title}</h2>}
       {children} {onClick}
       </main>

    );
};


export const Section = ({ title, children, onClick }) => {
    return (
        <section onClick={onClick} className={"w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center gap-y-16 px-5 py-16"}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
};
export const div = ({ title, children, onClick }) => {
    return (
        <div onClick={onClick} className={"flex flex-col items-center justify-center w-full  py-10 "}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
};

export const Heading = ({type, content})=>{
    return(
        <> { type==="h1"? <h1 className="">{content} </h1>:type==="h2"?<h2>{content}</h2>:type==="h3"?<h3 className="flex items-center justify-center font-bold"></h3>:type==="h4"?<h4>{content}</h4>:type==="h5"?<h5>{content}</h5>: <h6>{content}</h6>
        }
        {<p className="font-medium text-base text-center w-full">{content}</p>
        }
 </>
    )

}

export const Paragraph = ({content}) =>{
    return (
        <>{<p className="font-medium text-base text-center w-full">{content}</p>}</>

    )
}
