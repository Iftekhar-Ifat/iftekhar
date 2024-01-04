"use client";

import React from "react";
import { Button } from "../ui/button";
import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";

export default function Socials() {
  const [_, copy] = useCopyToClipboard();
  return (
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

      <Button
        variant="secondary"
        className="hover:scale-105 m-1"
        onClick={() => {
          toast("Email copied to clipboard ✔"),
            copy("iftekharifat007@gmail.com");
        }}
      >
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
  );
}
