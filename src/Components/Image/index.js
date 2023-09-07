import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

function Image({ src, alt, className, setAvartar, fallback: customFallback = images.noImage, ...props }) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
