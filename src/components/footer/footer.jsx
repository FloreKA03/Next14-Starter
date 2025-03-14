import styles from '@/components/footer/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Florah
            </div>
            <div className={styles.text}>
                Florah creative thoughts agency © 2025 All rights reserved
            </div>
        </div>
    );
};

export default Footer;