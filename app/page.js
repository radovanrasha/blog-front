import Image from "next/image";
import logo from "@/public/assets/bloglogo.png";

export default function Home() {
  return (
    <main className="home-container">
      <Image alt="logo" className="baner" src={logo}></Image>
      <h3>Bring out your creativity with our free blog platform!</h3>
    </main>
  );
}
