import styles from '@/components/postCard/postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ title, content, author, date }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/31116666/pexels-photo-31116666/free-photo-of-tournesols-jaunes-vibrants-dans-un-cadre-urbain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post" className={styles.img} fill />
                </div>
                <span className={styles.date}>01.01.2025</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}> 
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    );
};

export default PostCard;