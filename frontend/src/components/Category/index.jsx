const categories = [
    { id: 1, name: "Eletrônicos" },
    { id: 2, name: "Roupas" },
    { id: 3, name: "Livros" },
  ];
  
  export default function Category() {
    return (
      <div>
        <ul className=" flex flex-row gap-5">
          {categories.map((category) => (
            <li className="bg-[#EDEDFF] p-3 px-5 rounded-3xl hover:bg-[#332FF6] hover:text-white" key={category.id}>{category.name} </li>
          ))}
        </ul>
      </div>
    );
  }
  