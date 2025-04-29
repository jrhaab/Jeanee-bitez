export const ParagraphInstance = ({content, customclassName}) =>{
    return (
       <>{<p className={`font-medium text-base text-center w-full ${customclassName}`}>{content}</p>}</>

    );
};