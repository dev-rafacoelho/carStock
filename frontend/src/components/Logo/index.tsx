import Image from "next/image";
import LogoImg from "../../../public/assets/LogoCar.svg";

export default function Logo() {
  return (
    <div>
      <Image src={LogoImg} 
      alt="Picture of the author" 
      width={110} 
      height={100} 
      />
    </div>
  );
}
