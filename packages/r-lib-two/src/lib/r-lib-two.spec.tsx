import { render } from '@testing-library/react';

import RLibTwo from './r-lib-two';

describe('RLibTwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RLibTwo />);
    expect(baseElement).toBeTruthy();
  });
});
