import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head';

import Layout from '../../components/Layout'
import Date from '../../components/Date';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css';

interface StaticProps {
  postData: PostData
}

const Post: React.FC<StaticProps> = (props) => {
  const { postData } = props;
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.heaingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,    
  };
}

export const getStaticProps: GetStaticProps<StaticProps> = async ({ params }) => {
  const postData = await getPostData((params as any).id);
  return {
    props: {
      postData,
    },
  };
}
