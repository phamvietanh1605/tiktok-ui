import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState(false);
    useEffect(() => {}, []);

    const onShowSearchResult = () => {
        // setSearchResult(true);
    };

    const onHideSearchResult = () => {
        // setSearchResult(false);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    visible={searchResult}
                    interactive={true}
                    onClickOutside={onHideSearchResult}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            ket qua
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts or videos" onClick={onShowSearchResult} />
                        <button className={cx('btn-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loadding')} icon={faSpinner} />
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <button className={cx('upload')}>Upload</button>
                    <button className={cx('login')}>Log in</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
