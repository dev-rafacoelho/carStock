"use client";

import Icon from "@/components/Icon";
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
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

// Define o tipo para os carros
type Carro = {
  id: string;
  nome: string;
  marca: string;
  cor: string;
  ano: number;
  combustivel: string;
  tipo: string;
};

export default function Home() {
  const [carros, setCarros] = useState<Carro[]>([]); // Atualizando o estado para usar o tipo Carro

  // Função para buscar os carros da API
  const fetchCarros = async () => {
    try {
      const response = await fetch("http://localhost:3003/home/cars"); // Rota do backend
      if (!response.ok) {
        throw new Error("Erro ao buscar carros");
      }
      const data: Carro[] = await response.json(); // Especifica que a resposta é uma lista de Carros
      setCarros(data); // Atualiza o estado com os carros recebidos
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
    }
  };

  useEffect(() => {
    fetchCarros();
  }, []);

  const [car, setCar] = useState<Carro>({
    id: "",
    nome: "",
    marca: "",
    cor: "",
    ano: 0,
    combustivel: "",
    tipo: "",
  });

  async function postCar() {
    try {
      const response = await fetch("http://localhost:3003/home/postcars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: car.nome,
          marca: car.marca,
          cor: car.cor,
          ano: car.ano,
          combustivel: car.combustivel,
          tipo: car.tipo,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados de chamada para o servidor");
      }

      setCar({
        id: "",
        nome: "",
        marca: "",
        cor: "",
        ano: 0,
        combustivel: "",
        tipo: "",
      });
      alert("O registo foi feito com sucesso");
    } catch (error) {
      console.error("Erro ao enviar dados de chamada para o servidor:", error);
    }
  }

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
                <Label htmlFor="nome" className="text-right">
                  Nome
                </Label>
                <input
                  type="text"
                  className="col-span-3 border p-2"
                  value={car.nome}
                  onChange={(e) => setCar({ ...car, nome: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="marca" className="text-right">
                  Marca
                </Label>
                <input
                  type="text"
                  className="col-span-3 border p-2"
                  value={car.marca}
                  onChange={(e) => setCar({ ...car, marca: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cor" className="text-right">
                  Cor
                </Label>
                <input
                  type="text"
                  className="col-span-3 border p-2"
                  value={car.cor}
                  onChange={(e) => setCar({ ...car, cor: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="ano" className="text-right">
                  Ano
                </Label>
                <input
                  type="text"
                  className="col-span-3 border p-2"
                  value={car.ano}
                  onChange={(e) => setCar({ ...car, ano: parseInt(e.target.value) })} // Convertendo para número
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="combustivel" className="text-right">
                  Combustível
                </Label>
                <input
                  type="text"
                  className="col-span-3 border p-2"
                  value={car.combustivel}
                  onChange={(e) =>
                    setCar({ ...car, combustivel: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tipo" className="text-right">
                  Tipo do veículo
                </Label>
                <input
                  type="text"
                  className="col-span-3 border p-2"
                  value={car.tipo}
                  onChange={(e) => setCar({ ...car, tipo: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => postCar()}>Adicionar</Button>
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
        {carros.map((carro) => (
          <li key={carro.id} className="flex w-full">
            <Card NomeVeiculo={carro.nome} Marca={carro.marca} img={""} />
          </li>
        ))}
      </ul>
    </div>
  );
}
