import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'

interface Props {
  posts: any[];
}

const Home = ({posts}: Props) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Jpn Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
        <div>
          {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];　//empty array

  return {
    props: { posts }
  }
}
export default Home
