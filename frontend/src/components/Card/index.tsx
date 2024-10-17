import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  NomeVeiculo: string;
  Marca: string;
}

export default function Card({ NomeVeiculo, Marca }: CardProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[158px] bg-[#EDEDFF] rounded-md flex flex-col">
        <Link href={`http://localhost:3000/${NomeVeiculo}`}
         className="text-[#332FF6] flex justify-end pt-5 pr-5">
          <FaArrowRight />
        </Link>
        <div className="flex flex-row justify-between ml-5">
          <div className="flex flex-col">
            <p className="text-[#332FF6] font-semibold">{NomeVeiculo} </p>
            <p>{Marca}</p>
          </div>
          <Image
            className="flex justify-end self-end"
            src=""
            alt="Picture of the author"
            width={110}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
