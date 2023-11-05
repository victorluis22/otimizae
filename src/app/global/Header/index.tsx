import Image from "next/image";
import Link from "next/link";

export default function Header({}){
  return (
    <header className="flex justify-center items-center shadow-md">
        <Link href="/">
          <Image 
            src="/logo.svg" 
            alt="Logo do site otimizae" 
            width={176}
            height={176}
          />
        </Link>
    </header>
);
}
