import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('component contains a p tag', () => {
    const { container } = render(<Counter />);

    const pElement = container.querySelector('p');
    
    expect(pElement).toBeInTheDocument();
  });

test('button is clicked', () => {
    const { getByText } = render(<Counter />);
  
    const clickedButton = getByText('+');
    fireEvent.click(clickedButton);
  
    expect(getByText('Old Count: 1')).toBeInTheDocument();
  });