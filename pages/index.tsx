import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link';

import Layout, { siteTitle } from '../components/Layout'
import Date from '../components/Date';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, PostData } from '../lib/posts'

interface StaticProps {
  allPostsData: PostData[];
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

const Home: React.FC<StaticProps> = (props) => {
  const { allPostsData } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I{'\''}m the GOAT - no further introduction needed.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export default Home;
