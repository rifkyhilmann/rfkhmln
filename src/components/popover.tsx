import Image, { StaticImageData } from "next/image";

interface PopperProps {
  title: string;
  image: StaticImageData;
}

const Popper = ({ title, image }: PopperProps) => {
  return (
    <div className="h-20 w-20 md:w-24 md:h-24 flex flex-col items-center gap-2  relative">
      <div className=" w-14 h-14 md:h-16 md:w-16 border rounded-full cursor-pointer flex items-center justify-center group ">
        <Image 
          src={image} 
          alt={title} 
          width={40}
          height={40}
          className=" h-6 w-6 md:h-10 md:w-10 transform transition-transform duration-300 group-hover:scale-110" 
        />
      <div className="absolute bottom-0 h-5 px-2 bg-[#FFE6A9] rounded  items-center justify-center group-hover:flex hidden">
        <p className="text-[10px] md:text-xs">{title}</p>
      </div>
      </div>
    </div>
  );
};

export default Popper;
