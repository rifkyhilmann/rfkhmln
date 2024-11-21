
interface Props {
    title : string;
    company : string;
    description : string;
    style? : string;
}

const CardList = ({title, company, description, style} : Props) => {
    return (
        <div className={`h-36 w-full border-primary border-l-2 py-3 flex gap-4  max-w-[400px] ${style}`}>
            <div className="h-full w-8  flex flex-col">
                <div className="h-7 bg-primary rounded-r-2xl"></div>
            </div>
            <div className="flex flex-col gap-1 flex-1 ">
                <p className="font-semibold h-7 flex items-center text-white">{title}</p>
                <p className="text-sm ">{company}</p>
                <p className="text-[10px] w-full   ">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default CardList