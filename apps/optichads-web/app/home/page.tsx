import WelcomeChad from "@/components/home/WelcomeChad";
import WeNeedYouChad from "@/components/home/WeNeedYouChad";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#FB0420]">
      <div className="bg-[#FB0420] flex w-screen h-[86px] z-10 absolute" />
      <WelcomeChad />
      <WeNeedYouChad />
    </main>
  );
}
