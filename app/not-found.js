import Image from "next/image";
import notfound from "@/public/assets/notfound.png";

export default function Home() {
  return (
    <div className="notfound-container">
      <Image
        className="notfound-img"
        src={notfound}
        alt="404notfound.png"
      ></Image>
      <h1>Oops...</h1>
      <p>404 page not found</p>
    </div>
  );
}
