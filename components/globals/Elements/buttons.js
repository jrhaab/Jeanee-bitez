export const Button = ({ content, onClick ,  customClass}) => {
    return (
        <>
        <Button type="submit" onClick={onClick} className={`bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] 
            text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full${customClass}`}>
            {content}
        </Button>
        </>
    );
};