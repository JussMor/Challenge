import { render, screen } from '@testing-library/react';
import Hero from './Hero';


it('Hero renders without crashing', () => {
    render(<Hero />);
    }
);

it('Hero contains the rigth content', () => {   
    render(<Hero />);
    const hero = screen.getByTestId('hero');
    expect(hero).toHaveTextContent('Intensive program barista training');
});