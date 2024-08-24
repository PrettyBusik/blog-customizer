import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type PropsType = {
	isOpened: boolean;
	setIsOpened: (val: boolean) => void;
};

export const ArrowButton = ({ isOpened, setIsOpened }: PropsType) => {
	const handleClick = () => {
		setIsOpened(!isOpened);
	};
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${
				isOpened ? styles.container_open : styles.container
			}`}
			onClick={handleClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${
					isOpened ? styles.arrow_open : styles.arrow
				}`}
			/>
		</div>
	);
};
