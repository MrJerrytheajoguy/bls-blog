import fire from "../../config/fire-conf";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import Head from "next/head";

import Header from "../../components/Header/Navbar";
import Footer from "../../components/footer/index";

const Blog = ({ blog, title }) => {
  return (
    <>
      <Head>
        {title ? <title>{title}</title> : null}
        {blog.author ? <meta name="description" content={blog.author} /> : null}
        <meta name="description" content={blog.title} />
      </Head>
      <Header>
        <Link href="/">
          <a>
            <img
              className="navbar-logo"
              src="/new-logo.png"
              alt="BetterLifesavings"
              height={100}
              style={{borderRadius: '50%'}}
            />
          </a>
        </Link>
      </Header>
      <div>
        <div className="mainBlog">
          <h1>{blog.title}</h1>
          <h6>By: {blog.author}</h6>
          <p>
            <small className="text-muted">
              {new Date(blog.date).toDateString()}
            </small>
          </p>
          <div className="markdown-div">
            <Markdown className="markdownstyles">{blog.body}</Markdown>
          </div>
          <Link href="/">
            <a> &#8592; Back</a>
          </Link>
          <style jsx>{`
            h1 {
              font-size: 200%;
            }
            .mainBlog {
              margin: 50px auto;
              max-width: 50rem;
              padding: 1rem;
            }
            a {
              color: blue;
            }
            .markdownstyles img {
              height: 100px !important;
            }
          `}</style>
        </div>
      </div>
      <>
        <Footer />
      </>
    </>
  );
};
export const getServerSideProps = async ({ query }) => {
  const blog = await fire
    .firestore()
    .collection("blog")
    .doc(query.id)
    .get()
    .then((result) => result.data());
  return {
    props: {
      blog,
      title: blog.title,
    },
  };
};
export default Blog;
