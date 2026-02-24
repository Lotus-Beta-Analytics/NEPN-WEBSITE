// import NewsDetail from "./NewsDetail";

import NewsDetail from ".";

export async function generateStaticParams() {
  try {
    const res = await fetch("https://cms.networkeandp.com/api/posts");
    const data = await res.json();
    return (data?.posts ?? []).map((post: { id: number }) => ({
      id: String(post.id),
    }));
  } catch {
    return [];
  }
}

export default function NewsPage({ params }: { params: { id: string } }) {
  return <NewsDetail id={params.id} />;
}
