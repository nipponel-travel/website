"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getLabels } from "@/lib/i18n";

export function Menu() {
  const params = useParams();
  const lang = (params?.lang as string) ?? "en";
  const labels = getLabels(lang);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50 flex items-center h-10">
        <Link href={`/${lang}`} className="w-32 h-10 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-500 hover:bg-gray-300 transition-colors">
          LOGO
        </Link>
      </div>

      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 w-10 h-10 flex flex-col justify-center items-center hover:opacity-80 transition-opacity duration-300"
        aria-label="menu"
      >
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>

        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 z-50 w-10 h-10 flex justify-center items-center text-white hover:bg-gray-800 rounded-full transition-colors duration-300"
          aria-label="close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={`absolute inset-0 bg-black flex flex-col justify-center items-start pl-12 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="hidden md:block absolute top-0 right-0 h-full w-2/3 z-10">
            <Image
              src="/images/1.JPEG"
              alt="menu background"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          </div>
          <nav className="flex flex-col items-start space-y-8 z-20">
            <Link
              href={`/${lang}/articles`}
              className="text-4xl text-white"
              onClick={closeMenu}
            >
              ARTICLE
            </Link>
            <Link
              href="https://www.notion.com"
              className="text-4xl text-white"
              onClick={closeMenu}
            >
              RANKING
            </Link>
            <Link
              href="https://note.com"
              className="text-4xl text-white"
              onClick={closeMenu}
            >
              TRIP
            </Link>
            <Link
              href={`/${lang}/shop`}
              className="text-4xl text-white"
              onClick={closeMenu}
            >
              SHOP
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-4xl text-white"
              onClick={closeMenu}
            >
              ABOUT
            </Link>
          </nav>

          
          <div className="absolute bottom-8 left-12 flex space-x-6">
            <a
              href="#"
              className="text-gray-400"
              aria-label="X"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
         
        </div>
      </div>
    </>
  );
}
