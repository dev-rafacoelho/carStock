import Icon from "../Icon";
import { AiOutlineTrademark } from "react-icons/ai";
import { FaCar, FaPaintBrush, FaCalendarAlt, FaGasPump } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
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


export default function CardInfo() {

  return (
    <div className="bg-[#EDEDFF] rounded-lg p-5">
      <h2 className="font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-3  gap-4">
        {[
          {
            icon: <FaCar className="w-6 h-6 text-blue-500" />,
            label: "Marca",
            value: "Honda",
          },
          {
            icon: <FaPaintBrush className="w-6 h-6 text-red-500" />,
            label: "Cor",
            value: "Vermelho",
          },
          {
            icon: <FaCalendarAlt className="w-6 h-6 text-green-500" />,
            label: "Ano",
            value: "2023",
          },
          {
            icon: <FaGasPump className="w-6 h-6 text-yellow-500" />,
            label: "Combustível",
            value: "Gasolina",
          },
          {
            icon: <MdDirectionsBike className="w-6 h-6 text-purple-500" />,
            label: "Tipo do veículo",
            value: "Moto",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center text bg-white py-5 rounded-2xl"
          >
            <span className="mb-2 block">{item.icon}</span>
            <span className="text-xs text-gray-500 block">{item.label}</span>
            <span className="text-sm font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
