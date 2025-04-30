export const HeadingInstance = ({type, content})=>{
    return(
        <> { type==="h1"? <h1 >{content}</h1>:type==="h2"?<h2>{content}</h2>:type==="h3"?<h3 className="font-extrabold">{content}</h3>:type==="h4"?<h4>{content}</h4>:type==="h5"?<h5>{content}</h5>: <h6>{content}</h6>}</>
    );

};