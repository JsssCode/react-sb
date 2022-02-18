import { render } from '@testing-library/react';

import ItemImage from './item-image';

describe('ItemImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemImage />);
    expect(baseElement).toBeTruthy();
  });
});
