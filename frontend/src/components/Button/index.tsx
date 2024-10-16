export default function Button({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <button className="bg-[#332FF6] text-white font-bold h-12 rounded-3xl">
      {children}
    </button>
  );
}
