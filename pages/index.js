import Head from "next/head";
import Link from "next/link";
import {server} from '../config'

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Afams New Blog</h2>
            <p className="font-weight-bold"><i>Providing the best new in Africa...</i></p>
            <ol>
              {articles.map((article) => (
                <li key={article.id}>
                  <Link href="article/[id]" as={`article/${article.id}`}>
                    {article.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
   // "https://jsonplaceholder.typicode.com/posts?_limit=10"
   `${server}/articles`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
