// components/Icon.tsx
import { ReactNode } from "react";
import Link from "next/link";

interface IconProps {
  IconsImg: ReactNode; 
  href: string;
}

export default function Icon({ IconsImg,href }: IconProps) {
  return (
    <>
      <Link className="h-12 w-12 text-4xl bg-[#E9E8EF] text-black opacity-45 rounded-full items-center justify-center flex" href={href}>
          {IconsImg}
      </Link>
    </>
  );
}
