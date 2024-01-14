import Image from "next/image";
import { Button } from "../ui/button";
import Socials from "./Socials";
import profile_photo from "../../../public/asset/profile.png";

export default function IntroSection() {
  return (
    <>
      <div className="flex flex-col-reverse justify-between items-center pt-10 px-10 text-3xl md:flex-row md:text-5xl">
        <div className="flex items-center">
          <span className="pt-4">
            Hello, <br />
          </span>
        </div>
        <div
          className="w-[150px] h-[150px] overflow-hidden rounded-xl"
          style={{
            boxShadow: "0px 0px 10px 3px rgba(36, 154, 161, 1)",
          }}
        >
          <Image
            src={profile_photo}
            alt="profile photo"
            width="150"
            height="150"
            placeholder="blur"
          />
        </div>
      </div>
      <span className="flex flex-col justify-center items-center text-center text-3xl md:text-5xl">
        <span>I&apos;m </span>
        <span className="glow_text">Iftekhar Ahmed</span>
      </span>
      <p className="pt-4 text-center leading-8 text-xl text-muted-foreground md:px-16">
        I&apos;m currently pursuing my bachelor&apos;s in Computer Science &
        Engineering. I enjoy building <b>web applications</b> using modern web
        technologies. I also have a strong interest in <b>ML/AI</b>.
      </p>
      <div className="pt-8 flex flex-col justify-between md:flex-row items-center md:items-start">
        <Socials />
        <Button
          variant="secondary"
          className="hover:scale-105 m-2 text-cyan-600 text-lg"
          asChild
        >
          <a
            className="no-underline hover:text-cyan-600"
            href="https://drive.google.com/file/d/1WZIC7SePRTFYDRb1vWDna7CTK-tB0ie7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
        </Button>
      </div>
    </>
  );
}
