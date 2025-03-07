import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">About Me</h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-2/3 md:w-1/3 mx-auto aspect-square relative rounded-xl overflow-hidden">
          <Image src="/profile_icon.png" alt="Profile" fill className="object-cover" />
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-2xl font-serif text-primary">Hello, I&apos;m Mikuru</h2>

          <p>
            中学生の頃にプログラミングの学習を開始、現在は高校生です。 <br />
            2024年に、東京都中野区で開催されたクリエイティブコミュニティイベントのスタッフを務めたり、
            大手プログラミング学習サイトの学生スタッフを務めた経験があります。
            また、学生団体ウィーコードでプログラミング講師として活動しました。
          </p>

          <p>
            趣味はクリエイティブ、美容、猫と遊ぶこと^^ <br />
            また、色々な場所で食べ歩きすることが好きです。
          </p>

          <p>
            英語の学習途中です。
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-medium mb-2">Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-secondary p-2 rounded">HTML/CSS</div>
              <div className="bg-secondary p-2 rounded">JavaScript</div>
              <div className="bg-secondary p-2 rounded">Next.js</div>
              <div className="bg-secondary p-2 rounded">Astro</div>
              <div className="bg-secondary p-2 rounded">MicroCMS</div>
              <div className="bg-secondary p-2 rounded">WordPress</div>
              <div className="bg-secondary p-2 rounded">Figma</div>
              <div className="bg-secondary p-2 rounded">Adobe Photoshop</div>
              <div className="bg-secondary p-2 rounded">Adobe Illustrator</div>
              <div className="bg-secondary p-2 rounded">Responsive Design</div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-medium mb-2">Experience</h3>
            <div className="space-y-3">
              <div>
                <div className="font-medium">Creative community event staff</div>
                <div className="text-sm text-muted-foreground">DIST.46 • Dec/2024</div>
              </div>
              <div>
                <div className="font-medium">Code learning website staff</div>
                <div className="text-sm text-muted-foreground">Dotinstall • Aug/2024 - Dec/2024</div>
              </div>
              <div>
                <div className="font-medium">Web Designer</div>
                <div className="text-sm text-muted-foreground">2021 - Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

