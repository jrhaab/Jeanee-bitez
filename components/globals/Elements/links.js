import Link from "next/link"

export const LinkInstance = ({href, label,children, customclassName ,bg , text}) => {
return(
   <Link href={href??"#"} className={`${bg?`bg-${bg}`: "bg-red-800" } ${text?`text-${text}`: "text-slate-950"} w-max max-w-[100%]  flex flex-row justify-center items-center  px-6 py-3 ${customclassName}`}> {label} {children}
   
   </Link>
)
}




