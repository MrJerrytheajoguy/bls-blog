import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import fire from "../config/fire-conf";
import Footer from "../components/footer/index";
import Navbar from "../components/Header/Navbar";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [shadow, setShadow] = useState("");
  const [active, setActive] = useState(null);

  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogs);
      });
  }, []);

  const handleMouseOver = (id) => {
    setShadow("shadow");
    setActive(id);
  };
  const handleMouseLeave = () => {
    setShadow("");
    setActive(null);
  };
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>

      <Navbar>
        <a href="https://betterlifesavings.com" target="_blank">
          <img
            src="/new-logo.png"
            alt="BetterLifesavings"
            className="navbar-logo"
            height={100}
          />
        </a>
      </Navbar>

      <section>
        <main>
          <h1 className="title">News</h1>
          <div className="homeContent">
            <article className="container mainContent">
              {blogs.map((blog) => (
                <header
                  className={`articlebody ${
                    blog.id === active ? shadow : "shadow-sm"
                  }`}
                  key={blog.id}
                  onMouseOver={() => handleMouseOver(blog.id)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <Link href={"/blog/" + blog.id}>
                    <a>
                      <p>{blog.author}</p>
                      <p>
                        <small className="text-muted">
                          {new Date(blog.date).toDateString()}{" "}
                          {new Date(blog.date).toLocaleTimeString()}
                        </small>
                      </p>
                      <h5>
                        {blog.title}{" "}
                        <span
                          className="next"
                          style={{
                            display: blog.id === active ? "block" : "none",
                          }}
                        >
                          &#8594;
                        </span>{" "}
                      </h5>
                    </a>
                  </Link>
                </header>
              ))}
            </article>
          </div>
        </main>
      </section>

      <Footer />
      <style jsx>
        {`
          .navbar-logo {
            border-radius: 50%;
            margin-left: 2%;
          }
          a {
            cursor: pointer;
            text-decoration: none;
          }
          span.next {
            float: right;
            font-size: 0.7em;
          }
          main {
            margin-top: 50px;
          }
          h1.title {
            margin: auto;
            padding: 5px;
            text-align: center;
            border-top: 2px solid red;
            border-bottom: 2px solid red;
            width: fit-content;
          }
          .container {
            padding: 1rem 5%;
          }

          .homeContent {
            display: flex;
            flex-wrap: wrap;
            margin-top: 3rem;
            justify-content: space-around;
          }
          .mainContent {
            display: flex;
            flex-wrap: wrap;
            width: 70%;
            justify-content: space-around;
            padding: 1.2rem;
          }
          .articlebody {
            width: 48%;
            height: auto;
            margin: 30px auto;
            padding: 1% 4%;
            transition: all 0.15s ease, color 0.15s ease;
          }
          .articlebody:hover {
            background-color: rgba(0, 255, 0, 0.05);
          }
          @media screen and (max-width: 600px) {
            .mainContent {
              display: block;
              width: 100%;
              margin: 0;
            }
            .mainContent,
            header {
              display: block;
              width: 90%;
            }
            .articlebody {
              width: 100%;
              margin: 0.4rem auto;
              padding: 0.2rem 5%;
            }
            .articlebody:nth-child {
              background-color: grey;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
