import { FooterProps } from './types';
import { render } from '@testing-library/react';

import Footer from '.';

const makeSut = ({}: FooterProps) => {
	render(<Footer />);
};

describe('Footer test suit', () => {
	it('should render component', () => {
		makeSut({});
	});
});
