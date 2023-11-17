import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
// Data
import { getAllPosts } from "../lib/data";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Jonathan Perry Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-blue-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in">
      <div>
        <Link className="text-lg font-bold" href={`/blog/${slug}`}>
          {title}
        </Link>
      </div>
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), "MMMM do, uuu")}
      </div>
      <div>{content.substr(0, 300)}</div>
    </div>
  );
}
