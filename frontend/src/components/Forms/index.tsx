import Logo from "@/components/Logo";

interface FormsProps {
  placeholder: string;
  type: string;
}

export default function Forms({ placeholder, type }: FormsProps) {
  return (   
      <input placeholder={placeholder} 
      type={type} 
      className="w-full border-[#C9C9C9] border-2 rounded-[4px] h-12 pl-2"/>   
  );
}
