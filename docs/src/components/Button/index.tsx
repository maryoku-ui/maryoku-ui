/** @jsxImportSource react */
import type { FC, AnchorHTMLAttributes } from 'react';
import { useMemo } from 'react';

import clsx from 'clsx';

type ButtonProps = {
  variant?: 'ghost' | 'outline' | 'solid' | 'link';
  linkProperty?: AnchorHTMLAttributes<HTMLAnchorElement>;
};

const Button: FC<ButtonProps> = ({ children, variant = 'solid', linkProperty }) => {
  const cls = clsx('py-2', 'px-3', 'rounded-md', 'text-sm', 'transition', 'no-underline', {
    'text-veryperi-500 bg-transparent': ['ghost', 'link', 'outline'].includes(variant),
    'bg-veryperi-500 hover:bg-veryperi-600 text-white dark:text-stone-900 shadow':
      variant === 'solid',
    'hover:bg-veryperi-200': ['ghost', 'outline'].includes(variant),
    'border-veryperi-500 border border-solid': variant === 'outline',
  });

  const content = useMemo(() => {
    return variant === 'link' ? <a {...linkProperty}>{children}</a> : children;
  }, [variant]);

  return <button className={cls}>{content}</button>;
};

export default Button;
