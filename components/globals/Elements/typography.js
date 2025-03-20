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

export const InputInstance = ({customClass}) =>{
    return(
       <><input type={"text"} className={'${customClass} w-full bg-slate-300 rounded-[var(--radius-full)] h-10  opacity-35'} onChange={"someFunction"}>{customClass}</input> </> 
    )
}

export const Button = ({ content, onClick }) => {
    return (
        <button type="submit" onClick={onClick} className={"bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full"}>
            {content}
        </button>
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
