import styles from "@/app/blog/blog.module.css";
import PostCard from "@/components/postCard/postCard";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

const BlogPage = async () => {



  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
