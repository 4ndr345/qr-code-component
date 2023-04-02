import Image from "next/image";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={`${outfit.className} flex h-screen bg-light-grey`}>
      <div className="bg-white p-4 pb-10 w-[320px] m-auto rounded-[20px] flex flex-col gap-6 drop-shadow-[0_25px_25px_rgba(0,0,0,0.0476518)]">
        <Image
          className="rounded-[10px]"
          width="288"
          height="288"
          src="/image-qr-code.png"
          alt="foobar"
        />
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-dark-navy text-[22px]/[28px] font-bold">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-grey text-[15px]/[18.9px] tracking-[0.19px] font-normal mx-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
