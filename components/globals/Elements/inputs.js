export const InputInstance = ({customClass}) =>{
    return(
       <><input type={"text"} className={` w-full bg-slate-300 rounded-[var(--radius-full)] h-10  opacity-35 ${customClass}`} onChange={"someFunction"}></input> </> 
    )
}
