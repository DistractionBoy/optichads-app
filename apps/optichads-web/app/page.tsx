import Image from "next/image";
import RotatingTitle from "../components/splash/RotatingTitle";
import SplashBG from "../components/splash/SplashBG";
import WelcomeCard from "../components/splash/WelcomeCard";
import chadimationFrame from "../public/images/chadimation-first-frame.png";
import brigadiFrame from "../public/images/brigader-first-frame.png";

export default function Home() {
  return (
    <main>
      <SplashBG />
      <RotatingTitle />
      <WelcomeCard />
      <Image src={chadimationFrame} alt="" width={30} height={30} />
      <Image src={brigadiFrame} alt="" width={30} height={30} />
    </main>
  );
}
