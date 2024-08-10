import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('GifItem Component', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = 'Saitama';
    const url = 'https://sample.url/image.jpg';

    const { container } = render(<GifItem title={title} url={url} />);
    
    expect(container).toMatchSnapshot();
  });
});
