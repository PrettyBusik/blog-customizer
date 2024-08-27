import { useClickAway } from '@uidotdev/usehooks';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, MutableRefObject, useState } from 'react';
import { Select } from 'components/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { Text } from 'components/text';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import clsx from 'clsx';

type TAppState = {
	appState: ArticleStateType;
	setAppState: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ appState, setAppState }: TAppState) => {
	const [isOpened, setIsOpened] = useState(false);
	const [formState, setFormState] = useState(appState);

	const ref: MutableRefObject<HTMLElement> | null = useClickAway(() => {
		setIsOpened(false);
	});

	const changeSettings = (optionName: string) => (option: OptionType) => {
		setFormState((prevState) => ({ ...prevState, [optionName]: option }));
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		setAppState(formState);
		setIsOpened(false);
	};

	const handelReset = (event: FormEvent) => {
		event.preventDefault();
		setFormState(defaultArticleState);
		setAppState(defaultArticleState);
	};
	return (
		<>
			<ArrowButton
				isOpened={isOpened}
				setIsOpened={(val: boolean) => setIsOpened(val)}
			/>
			<aside
				className={clsx(styles.container, isOpened && styles.container_open)}
				ref={ref}>
				<form
					className={clsx(styles.form)}
					onSubmit={handleSubmit}
					onReset={handelReset}>
					<Text
						as='h2'
						size={31}
						weight={800}
						uppercase={true}
						family='open-sans'>
						Задайте параметры
					</Text>
					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={changeSettings('fontFamilyOption')}
					/>
					<RadioGroup
						name='радио-кнопка'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						title='рАЗМЕР шрифта'
						onChange={changeSettings('fontSizeOption')}
					/>
					<Select
						selected={formState.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={changeSettings('fontColor')}
					/>
					<Separator />
					<Select
						selected={formState.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={changeSettings('backgroundColor')}
					/>
					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={changeSettings('contentWidth')}
					/>
					<div className={clsx(styles.bottomContainer)}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
