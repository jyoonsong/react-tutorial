import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, ...rest}) => { // rest는 나중에 이 컴포넌트가 받을 모든 props
	return (
		<div className={cx('button')} {...rest}>{/* 지정되지 않은 모든 것을 rest에 객체 형태로 담는다 */}
			{children}
		</div>
	);
};

export default Button;