import Image from "next/image"
import Link from "next/link"
import { client } from '@/lib/microcms';

type Props = {
  id: string;
  title: string;
  description: string;
  image: {url: string};
  url: string;
}

// microCMSからブログ記事を取得
async function getWorkPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'works', // microCMSのエンドポイント名
    queries: {
      fields: 'id,title,description,image,url',
    },
  });
  return data.contents;
}

export default async function Works() {
  const posts = await getWorkPosts();

  return (
    <div className="py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">My Works</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link href={post.url} key={post.id} className="group block">
            <div className="border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={post.image.url}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground mt-2">{post.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

