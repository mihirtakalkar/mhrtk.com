import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-serif">
     <a>MIHIR'S PERSONAL WEBSITE</a>
     <a
      href="https://github.com/mihirtakalkar"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
      >
      My GitHub
      </a>
    </div>
  );
}
