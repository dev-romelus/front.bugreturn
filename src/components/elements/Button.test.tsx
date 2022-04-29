import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button - Test', () => {
    test('should be in the document', () => {
        render(<Button>send</Button>);

        const button = screen.getByRole('button', { name: /send/i });

        expect(button).toBeInTheDocument();
    });
});
