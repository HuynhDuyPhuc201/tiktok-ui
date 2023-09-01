import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <img
                    src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/be0edfd948ad524bc75b58b475d72db4~c5_300x300.webp?x-expires=1693321200&x-signature=Sb0Y09hhOX1YzqiqrCn95%2BbbNjw%3D"
                    alt="Hoa"
                    className={cx('avatar')}
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Nguyen Van A</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>nguyenvana</span>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
