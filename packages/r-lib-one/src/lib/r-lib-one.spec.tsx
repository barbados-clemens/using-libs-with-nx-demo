import { render } from '@testing-library/react';

import RLibOne from './r-lib-one';

describe('RLibOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RLibOne />);
    expect(baseElement).toBeTruthy();
  });
});
