import styles from "@/app/blog/[slug]/singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/31116666/pexels-photo-31116666/free-photo-of-tournesols-jaunes-vibrants-dans-un-cadre-urbain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Post"
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/31116666/pexels-photo-31116666/free-photo-of-tournesols-jaunes-vibrants-dans-un-cadre-urbain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Post"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Winsley Taylor</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2025</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
