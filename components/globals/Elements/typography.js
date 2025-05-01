export const ParagraphInstance = ({ content, customclassName }) => {
  return (
    <>
      <p
        className={`font-normal text-base text-left max-w-full ${customclassName}`}
      >
        {content}
      </p>
    </>
  );
};

export const HeadingInstance = ({ type, content, customclassName }) => {
  return (
    <>
      {type === "h1" ? (
        <h1 className={`font-bold text-5xl max-w-full ${customclassName}`}>
          {content}
        </h1>
      ) : type === "h2" ? (
        <h2 className={`font-bold text-4xl max-w-full ${customclassName}`}>
          {content}
        </h2>
      ) : type === "h3" ? (
        <h3 className={`font-bold text-3xl max-w-full ${customclassName}`}>
          {content}
        </h3>
      ) : type === "h4" ? (
        <h4 className={`font-bold text-2xl max-w-full ${customclassName}`}>
          {content}
        </h4>
      ) : type === "h5" ? (
        <h5 className={`"font-bold text-xl max-w-full ${customclassName}`}>
          {content}
        </h5>
      ) : (
        <h6 className={`font-bold text-lg max-w-full ${customclassName}`}>
          {content}
        </h6>
      )}
    </>
  );
};

export const TitleInstance = ({ type, content, customclassName }) => {
  return (
    <>
      {type === "regular" ? (
        <h5 className={`font-bold text-xl max-w-full ${customclassName}`}>
          {content}
        </h5>
      ) : (
        <h6 className={`font-bold text-lg max-w-full ${customclassName}`}>
          {content}
        </h6>
      )}
    </>
  );
};
