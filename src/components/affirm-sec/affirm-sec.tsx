import React from 'react';
import styles from './styles/Banner.module.scss';

const Banner: React.FC = () => {
    return (
        <div className={styles.affirmBanner}>
            <p>
                <strong>affirm</strong> Zero interest, no late fees. Buy now, pay over time.
                <a href="#" className={styles.learnMore}> Learn More →</a>
            </p>
        </div>
    );
};

export default Banner;
