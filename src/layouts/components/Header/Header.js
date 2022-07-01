import React from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { LogoIcon } from '~/components/Icons';
import Search from '../Search';
import Menu from '../Menu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <span className={cx('logo')}>
                <LogoIcon />
            </span>
            <Search />
            <Menu />
        </header>
    );
}

export default Header;
