import Icon from "@/components/Icon";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import Image from "next/image";
import CardInfo from "@/components/CardInfo"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ItemPage({ params }: { params: { item: string } }) {
  return (
    <div className="flex flex-col justify-between h-screen gap-5">
      <div className="flex flex-row justify-between items-center p-2">
        <Icon IconsImg={<MdOutlineKeyboardArrowLeft />} href="http://localhost:3000/home" />
        {params.item}
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editar veículo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Veículo</DialogTitle>
          <DialogDescription>
            Faça as alterações conforme precisar
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nome
                </Label>
                <Input id="name" defaultValue="" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Marca
                </Label>
                <Input id="marca" defaultValue="" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Cor
                </Label>
                <Input id="color" defaultValue="" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Ano
                </Label>
                <Input id="year" defaultValue="" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Combustível
                </Label>
                <Input id="gas" defaultValue="" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Tipo do veículo
                </Label>
                <Input id="type" defaultValue="" className="col-span-3" />
              </div>
            </div>
        <DialogFooter>
          <Button type="submit">Salvar mudanças</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
      <div className="flex flex-col items-center ">
        <Image className="absolute" src="/assets/image.png" alt="Picture of the author" width={270} height={100} />
        <Image className="pt-32 " src="/assets/Apresentação.svg" alt="Picture of the author" width={400} height={100} />
      </div>  
        <CardInfo/>
    </div>
  );
}


