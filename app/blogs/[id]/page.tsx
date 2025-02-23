import React from 'react'
import { client } from '@/lib/microcms';
import Image from 'next/image';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

// ブログ記事の型定義
type Props = {
  id: string;
  image: {url: string}
  title: string;
  body: string;
  date: string
};

// microCMSから特定の記事を取得
async function getBlogPost(id: string): Promise<Props> {
  const data = await client.get({
    endpoint: `blogs/${id}`,
  });
  return data;
}

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // IDを取得
  const post = await getBlogPost(id);

  return (
    <div className='mt-16 w-[100%] md:w-[80%] '>
      <div>
        <Image 
          src={post.image.url} 
          alt={post.title} 
          width={800} 
          height={320} 
          className='w-full h-56 md:h-80 object-cover' 
        />
      </div>
      <h1 className='mt-8 text-4xl'>{post.title}</h1> {/* タイトルを表示 */}
      <span className="text-sm text-gray-500">{dayjs.utc(post.date).tz('Asia/Tokyo').format('YYYY-MM-DD')}</span>
      <div className='mt-8' dangerouslySetInnerHTML={{ __html: post.body }} /> {/* 記事本文を表示 */}
    </div>
  );
}

// 静的パスを生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: 'blogs' });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
}