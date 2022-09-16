import {render, screen} from '@testing-library/react';
import NewsfeedLayout from "@/pages/user/newsfeed/index";
import ReactDOM from 'react-dom';

it('newsfeed renders correctly', () => {
  render(<NewsfeedLayout />);

  expect(screen.getAllByRole('div')).toBeInTheDocument();
})