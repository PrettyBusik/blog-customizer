import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpened, setIsOpened] = useState(false); // Создаем состояние для управления стрелкой

		return <ArrowButton isOpened={isOpened} setIsOpened={setIsOpened} />;
	},
};
