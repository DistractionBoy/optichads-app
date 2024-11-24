import Image from "next/image";
import React from "react";

import distraction from "@/public/images/distraction.png";
import dicaso from "@/public/images/dicaso.png";
import lifestrike from "@/public/images/lifestrike.jpg";
import dope from "@/public/images/dope.jpg";
import beeps from "@/public/images/beeps.png";
import millynish from "@/public/images/millynish.jpg";
import livici3 from "@/public/images/livixi3.webp";
import THREEt from "@/public/images/3t.jpg";
import jasonfactor from "@/public/images/jasonfactor.webp";
import shea from "@/public/images/11shea.jpeg";

import { TeamMember } from "@/lib/types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { BackgroundGradient } from "./BackgroundGradient";

const bios = {
  bio1: "Serving as our benevolent dictator, he bestows upon us gifts and a compelling vision of the future. Passionate about fitness and steadfast in his belief in the transformative potential of NFTs, Dicaso tirelessly built a groundbreaking project that encapsulates ",
  bio2: "Fed up with the monotony and looking for a way to contribute to the OP NFT scene, DistractionBoy found Dicaso in the OptiPunks discord looking for people to help build a new collection",
  bio3: "Livix, THE artist of Pudgy Penguins, came out the igloo to get swole on L2. He has contributed greatly to artistic direction and keeping the team up on the latest trends",
  bio4: "Lifestrike made a home on Optimism in 2021 and got into NFTs in the ecosystem, eventually coming into contact with the other admins of Optichads,",
  bio5: "Dope started his crypto-venture by navigating his way through a minefield of memecoins alongside Lifestrike. The two found themselves migrating to L2 blockchains and found a permanent home in the OptiChads team, where Dope helps to moderate, advise other core members and assist in admin tasks.",
  bio6: "Young Beeps embarked on his crypto journey in 2020 under the guidance of his close friends MillyNish and Dicaso, who introduced him to the dynamic realm of Web3. Collaborating closely with MillyNish, Young Beeps delved into the intricacies of cryptocurrency and altcoins, ",
  bio7: "Meet Millynish, the living embodiment of Web3 innovation! After Dicaso unleashed Layer 2, there was no turning back for this digital dynamo.",
  bio8: "Frontend developer helping with updates and creative direction.",
  bio9: "JasonFactor joined web3 in 2020 from layer 1 defi communities. Feeling dissatisfied with high gas fees along with token inflation from defi projects, he found another layer 2 solution and started supporting nft projects.",
  bio10:
    "11 Shea X, a musical talent hailing from Virginia, has been crafting and releasing music for over a decade. Over the past five years, he has delved into the crypto space and, more recently, embarked on his journey in the NFT space.",
};

export default function Team() {
  const people: TeamMember[] = [
    {
      name: "Dicaso",
      role: "Artist / Project Lead",
      imageUrl: dicaso,
      bio: bios.bio1,
      twitterUrl: "https://x.com/Dicaso5",
      fullBioUrl: "/bios/dicaso",
    },
    {
      name: "DistractionBoy",
      role: "Tech Manager",
      imageUrl: distraction,
      bio: bios.bio2,
      twitterUrl: "https://x.com/DistractionBoy_",
      fullBioUrl: "/bios/distractionboy",
    },
    {
      name: "Millynish",
      role: "Discord Expert",
      imageUrl: millynish,
      bio: bios.bio7,
      twitterUrl: "https://x.com/millynish7",
      fullBioUrl: "/bios/millynish",
    },
    {
      name: "JasonFactor",
      role: "Developer",
      imageUrl: jasonfactor,
      bio: bios.bio9,
      twitterUrl: "https://x.com/anh_jasonfactor",
      fullBioUrl: "/bios/jasonfactor",
    },
    {
      name: "Lifestrike",
      role: "Marketing Lead",
      imageUrl: lifestrike,
      bio: bios.bio4,
      twitterUrl: "https://x.com/lifesadream63",
      fullBioUrl: "/bios/lifestrike",
    },
    {
      name: "Youngbeeps",
      role: "Operations Lead",
      imageUrl: beeps,
      bio: bios.bio6,
      twitterUrl: "https://x.com/cryptonftbeeps",
      fullBioUrl: "/bios/youngbeeps",
    },
    {
      name: "Dope",
      role: "Team Advisor",
      imageUrl: dope,
      bio: bios.bio5,
      twitterUrl: "https://x.com/dopesdope2021",
      fullBioUrl: "/bios/dope",
    },
    {
      name: "LiViCi3",
      role: "Advisor",
      imageUrl: livici3,
      bio: bios.bio3,
      twitterUrl: "https://x.com/LiViXi3",
      fullBioUrl: "/bios/LiViXi3",
    },
    {
      name: "Shea",
      role: "Audio Production",
      twitterUrl: "https://x.com/11SheaX",
      imageUrl: shea,
      bio: bios.bio10,
      fullBioUrl: "/bios/shea",
    },
    {
      name: "3t",
      role: "Developer",
      imageUrl: THREEt,
      bio: bios.bio8,
      twitterUrl: "https://x.com/Prod3t",
    },
  ];

  return (
    <div className="mx-auto container py-12 px-4 sm:px-6 lg:px-8 lg:py-24 xl:max-w-[1920px]">
      <div className="space-y-12">
        <div className="space-y-5 md:max-w-xl lg:max-w-3xl xl:max-w-none prose prose-2xl dark:prose-invert pb-5">
          <h2>Our Team</h2>
          <p>
            Banished from Layer 1 these Chads have crossed the bridge seeking a
            more Optimistic lifestyle. They workout, flex, and eat high amounts
            of protein with their gas savings.
          </p>
        </div>
        <ul
          role="list"
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-16 xl:gap-y-16"
        >
          {people.map((person: TeamMember) => (
            <li key={person.name}>
              <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
                <div className="space-y-4">
                  {person.imageUrl && (
                    <Image
                      className="rounded-t-[21px]"
                      src={person.imageUrl}
                      alt=""
                      priority
                    />
                  )}

                  <div className="prose dark:prose-invert px-6 pb-8">
                    <div>
                      <h3>{person.name}</h3>
                      <p className="text-primary">{person.role}</p>
                      <p className="line-clamp-2">{person.bio && person.bio}</p>
                    </div>
                    {person.twitterUrl && (
                      <div role="list" className="flex items-center space-x-5">
                        <Link
                          href={person.twitterUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Twitter</span>
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="w-5 h-5 xl:w-8 xl:h-8"
                          />
                        </Link>
                        {person.fullBioUrl && (
                          <Link
                            href={person.fullBioUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="sr-only">Full Bio Page</span>
                            <FontAwesomeIcon
                              icon={faUserPen}
                              className="w-5 h-5 xl:w-8 xl:h-8"
                            />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </BackgroundGradient>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
