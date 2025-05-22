import React from 'react';
import { render, screen } from '@testing-library/react';
import HoverPreview from '../HoverPreview';

describe('HoverPreview', () => {
  it('renders the trigger text', () => {
    render(
      <HoverPreview
        text="Hover Me"
        url="https://example.com"
        textClassName="text-blue-500"
        cardClassName="bg-white"
      />,
    );

    expect(screen.getByText('Hover Me')).toBeInTheDocument();
  });
});
