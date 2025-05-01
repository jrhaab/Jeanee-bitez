export const SectionInstance = ({ children, customclassName }) => {
  return (
    <section
      className={`w-full h-full flex flex-col justify-start items-center gap-3 bg-white py-4 ${customclassName}`}
    >
      {children}
    </section>
  );
};
