import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

// react-scripts' Jest resolver cannot read React Router 7's subpath export.
jest.mock('react-router/dom', () => require('react-router'), { virtual: true });

test('contact us securely opens the enquiry page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('link', { name: /contact us securely/i }));

  expect(screen.getByText('Secure Enquiry Form')).toBeInTheDocument();
});
