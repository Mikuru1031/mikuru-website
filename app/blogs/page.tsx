import React from 'react'
import Card from '@/components/card'
import { client } from '@/lib/microcms';

// ブログ記事の型定義
type Props = {
  id: string
  image: {url: string}
  title: string
  body: string
  date: string
}

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'blogs', // microCMSのエンドポイント名
    queries: {
      fields: 'id,image,title,date',  // idとimageとtitleとdateを取得
    },
  });
  return data.contents;
}

const Blogs = async () => {
  const posts = await getBlogPosts();

  return (
    <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {
        posts.map((post) => (
          <Card 
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            date={post.date}
          />
        ))
      }
    </div>
  )
}

export default Blogs