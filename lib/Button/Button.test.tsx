import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, describe, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render a button with default props', () => {
      render(<Button>Click Me!</Button>);
      const button = screen.getByRole('button', { name: 'Click Me!' });
      
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('bg-indigo-500'); // default color
      expect(button).toHaveClass('px-3.5 py-2 text-sm'); // default size
    });

    it('should render with different color variants', () => {
      const colorMappings = {
        primary: 'bg-indigo-500',
        success: 'bg-green-500',
        info: 'bg-blue-500',
        warning: 'bg-amber-500',
        error: 'bg-red-500',
      } as const;
      
      Object.entries(colorMappings).forEach(([color, expectedClass]) => {
        const { unmount } = render(<Button color={color as keyof typeof colorMappings}>Button</Button>);
        const button = screen.getByRole('button');
        
        expect(button).toHaveClass(expectedClass);
        unmount();
      });
    });

    it('should render with different size variants', () => {
      const sizes = ['small', 'medium', 'large'] as const;
      
      sizes.forEach((size) => {
        const { unmount } = render(<Button size={size}>Button</Button>);
        const button = screen.getByRole('button');
        
        expect(button).toHaveClass(
          size === 'small' ? 'px-2.5 py-1.5 text-xs' :
          size === 'medium' ? 'px-3.5 py-2 text-sm' :
          'px-4 py-2 text-base'
        );
        unmount();
      });
    });

    it('should merge custom className with default classes', () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('custom-class');
      expect(button).toHaveClass('bg-indigo-500'); // default color class should still be present
    });
  });

  describe('Functionality', () => {
    it('should call onClick when clicked', async () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Click Me!</Button>);

      await userEvent.click(screen.getByRole('button', { name: 'Click Me!' }));
      expect(onClick).toHaveBeenCalled();
    });

    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled Button</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:opacity-50');
    });

    it('should forward ref to button element', () => {
      const ref = vi.fn();
      render(<Button ref={ref}>Button</Button>);
      
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
    });

    it('should support different button types', () => {
      const types = ['button', 'submit', 'reset'] as const;
      
      types.forEach((type) => {
        const { unmount } = render(<Button type={type}>Button</Button>);
        const button = screen.getByRole('button');
        
        expect(button).toHaveAttribute('type', type);
        unmount();
      });
    });
  });

  describe('Accessibility', () => {
    it('should support aria attributes', () => {
      render(
        <Button aria-label="Custom label" aria-pressed="true">
          Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom label');
      expect(button).toHaveAttribute('aria-pressed', 'true');
    });

    it('should have focus styles', () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('focus-visible:ring-2');
      expect(button).toHaveClass('focus-visible:ring-offset-2');
      expect(button).toHaveClass('focus-visible:ring-indigo-500');
    });
  });
});
