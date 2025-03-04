import Image from "next/image"
import Link from "next/link"
import Flower from "@/components/flower"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col md:flex-row items-center justify-center gap-8 py-12">
      <div className="hidden w-full md:w-1/2 md:flex justify-center">
        <Flower />
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h2 className="text-xl text-primary font-medium">Web Designer</h2>
          <h1 className="text-5xl md:text-6xl font-serif mt-2">Mikuru</h1>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="/profile_icon.png"
            alt="Japan flag"
            width={0}
            height={0}
            className={"sm:w-32 sm:h-32 w-24 h-24 rounded-full"}
          />
          <div className="text-lg">
            <p>I am a Web Designer creating in creating beautiful and functional websites.</p>
          </div>
        </div>

        <p className="text-muted-foreground">
          I&apos;m a high school boy living in Japan/Nagoya. <br />
          I&apos;ve worked code learning website and creative comunity event at Tokyo.
        </p>

        <div className="pt-2">
          <p>For inquiries, please contact me on <Link href={"https://www.instagram.com/fl0rally__"} className=" hover:text-blue-400">Instagram.</Link></p>
        </div>
      </div>
    </div>
  )
}

