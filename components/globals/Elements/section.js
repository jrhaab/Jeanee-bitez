export const SectionInstance = ({children, onClick, customclassName}) => {
    return(
        <section onClick={onClick} className={`w-full h-full flex flex-col items-center justify-start gap-3 bg-white opacity-90 py-28 ${customclassName}`} > {children}
        </section>
    )
}