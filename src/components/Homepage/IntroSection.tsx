import Image from "next/image";
import React from "react";
import ProfilePhoto2 from "../../../public/asset/profile_photo2.jpg";
import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export default function IntroSection() {
  return (
    <>
      <div className="flex flex-col-reverse justify-between items-center pt-14 px-10 text-3xl md:flex-row md:text-5xl">
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
            src={ProfilePhoto2}
            alt="profile photo"
            priority={true}
            style={{ objectFit: "contain" }}
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
        <div className="flex m-2 flex-wrap justify-center md:justify-start">
          <Button variant="secondary" className="hover:scale-105 m-1" asChild>
            <a
              href="https://www.linkedin.com/in/iftekhar-ahmed-0a082a196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={25} className="text-cyan-600" />
            </a>
          </Button>

          <Button variant="secondary" className="hover:scale-105 m-1">
            <Mail size={25} className="text-cyan-600" />
          </Button>
          <Button variant="secondary" className="hover:scale-105 m-1" asChild>
            <a
              href="https://twitter.com/_ifte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={25} className="text-cyan-600" />
            </a>
          </Button>
          {/* <Button variant="secondary" className="hover:scale-110 m-1" asChild>
            <a
              href="https://www.facebook.com/Lord.Madara.007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={25} className="text-cyan-600" />
            </a>
          </Button> */}
          <Button variant="secondary" className="hover:scale-110 m-1" asChild>
            <a
              href="https://github.com/Iftekhar-Ifat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={25} className="text-cyan-600" />
            </a>
          </Button>
        </div>
        <Button
          variant="secondary"
          className="hover:scale-105 m-2 text-cyan-600 text-lg"
          asChild
        >
          <a
            href="https://drive.google.com/file/d/1WZIC7SePRTFYDRb1vWDna7CTK-tB0ie7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>
      </div>
    </>
  );
}
