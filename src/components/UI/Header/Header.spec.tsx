import { HeaderProps } from './types';
import { render } from '@testing-library/react';

import Header from '.';

const makeSut = ({}: HeaderProps) => {
	render(<Header />);
};

describe('Header test suit', () => {
	it('should render component', () => {
		makeSut({});
	});
});
