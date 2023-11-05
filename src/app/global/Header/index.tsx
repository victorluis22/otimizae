import Link from "next/link";

export default function Header({}){
  return (
    <header className="flex justify-center items-center shadow-md">
        <Link href="/">
          <img src="/logo.svg" alt="Logo do site otimizae" className="w-44"/>
        </Link>
    </header>
);
}
