import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Counter from './Counter';

test('component contains a p tag', () => {
    const { container } = render(<Counter />);

    const pElement = container.querySelector('p');
    
    expect(pElement).toBeInTheDocument();
  });
