import React from 'react'
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section className='mt-16'>
        <div className='flex flex-wrap gap-x-8 gap-y-8 items-center'>
          <div className='relative block w-40 h-40 overflow-hidden rounded-full'>
            <Image 
              src="/icon.jpeg" //配置した画像のパスを記述する。
              alt="Top Image"
              layout='fill'
            />
          </div>
          <p className='text-xl'>
            Hello! <br />
            My name is Mikuru. <br />
            I am Japanese studying English. <br />
            My hobby is creativity, studying English, and play with cat. <br />
            Nice to meet you. ^^
          </p>
        </div>
        <div className='mt-16 text-sm text-slate-500'>
          <p>
            このサイトは以下の技術の練習に作成しました。
          </p>
          <ul className='list-disc pl-4'>
              <li>Next.js</li>
              <li>microCMS</li>
              <li>生成AI（shadcn, v0）</li>
            </ul>
        </div>
      </section>
    </div>
  )
}

export default Home