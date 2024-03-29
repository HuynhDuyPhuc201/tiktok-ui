import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import { WrapperPopper } from '..';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; // trả về kiểu boolean
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <>
            <Tippy
                interactive
                delay={[0, 700]}
                visible
                offset={[12, 8]}
                placement="bottom-end"
                hideOnClick={hideOnClick}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            {history.length > 1 && (
                                <Header
                                    title={current.title}
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            <div className={cx('menu-body')}>{renderItems()}</div>
                        </WrapperPopper>
                    </div>
                )}
                onHide={() => setHistory((prev) => prev.slice(0, 1))} // nhả hover ra sẽ tự về menu đầu tiên
            >
                {children}
            </Tippy>
        </>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
