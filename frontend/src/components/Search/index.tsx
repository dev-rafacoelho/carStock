import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="relative">
      <FaSearch className="absolute text-xl left-2 top-2 text-gray-500" /> 
      <input
        type="text"
        placeholder="Pesquisar..."
        className="pl-8 py-2 border rounded-lg w-full" 
      />
    </div>
  );
}
