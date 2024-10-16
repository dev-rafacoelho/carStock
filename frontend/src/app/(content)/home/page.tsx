import Icon from "@/components/Icon";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Category from "@/components/Category";
import Card from "@/components/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const carros = [
    { img: "/path-to-image1.jpg", NomeVeiculo: "Biz", Marca: "Honda" },
    { img: "/path-to-image2.jpg", NomeVeiculo: "Civic", Marca: "Honda" },
    { img: "/path-to-image3.jpg", NomeVeiculo: "Gol", Marca: "Volkswagen" },
  ];

  return (
    <div className="flex flex-col gap-10 px-14">
      <div className="flex flex-row justify-between mr-5 mt-5 mb-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Adicionar automóvel</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar automóvel</DialogTitle>
              <DialogDescription>
                Aqui você poderá adicionar seu automóvel
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
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Foto do veículo</Label>
                <Input id="picture" type="file" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Icon IconsImg={<FaRegUserCircle />} href="#" />
      </div>
      <div className="text-left">
        <span className="text-blue-700 font-bold text-3xl">
          Veja seus carros
        </span>{" "}
        <span className="text-3xl"> em qualquer momento </span>
      </div>
      <Search />
      <Category />

      <ul className="gap-5 flex flex-col w-full">
        {carros.map((carro, index) => (
          <li key={index} className="flex w-full">
            <Card
              img={carro.img}
              NomeVeiculo={carro.NomeVeiculo}
              Marca={carro.Marca}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
