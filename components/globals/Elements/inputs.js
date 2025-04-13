export const InputInstance = ({  customclassName}) =>{
    return(
       <input type={"text"} onChange={"someFunction"} className={` w-full bg-slate-300 rounded-[var(--radius-full)] h-12  opacity-35 ${customclassName}`}  ></input> 
    )
}
