import Home from '@/app/page';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => {
    return (
      <a href={href} onClick={(e) => { 
        e.preventDefault(); 
        useRouter().push(href); 
      }}>
        {children}
      </a>
    );
  },
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Home Component', () => {
  it('should render and contain the "Create your case now" link', () => {
    render(<Home />);

    const linkElement = screen.getByRole('link', {
      name: /Create your case now/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/configure/upload');
  });

  it('should navigate to the correct page when the link is clicked', () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      push,
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      basePath: '',
      isLocaleDomain: false,
      isFallback: false,
      isReady: true,
      isPreview: false,
    });

    render(<Home />);

    const linkElement = screen.getByRole('link', {
      name: /Create your case now/i,
    });

    fireEvent.click(linkElement);

    // Ensure router.push is called with the correct URL
    expect(push).toHaveBeenCalledWith('/configure/upload');
  });
});
