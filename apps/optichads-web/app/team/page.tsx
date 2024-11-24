import Team from "@/components/team/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | OptiChads",
  description:
    "Meet the team behind OptiChads - builders, creators, and community leaders.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black">
      <Team />
    </main>
  );
}
