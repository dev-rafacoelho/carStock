import Logo from "@/components/Logo";
import Forms from "@/components/Forms";
import Button from "@/components/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-5 p-10">
      <Logo />
      <p className="font-bold">Faça seu login.</p>
      <Forms placeholder="User" type="text" />
      <Forms placeholder="Password" type="password" />
      <Button>Login</Button>
    </div>
  );
}
