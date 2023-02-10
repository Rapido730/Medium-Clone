import React from "react";
import { sanityClient } from "../../sanity";
import { Post } from "../../typings";

const Posts = () => {
  return <div>Posts</div>;
};

export default Posts;

export const getStaticPaths = async () => {
  const query = `
        *[_type == "post"] {
  _id,
  slug {
    
    current,
    
  }, 
}`;

  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

