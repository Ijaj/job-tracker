// app/auth/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication - My App',
  description: 'Login or sign up to access your account',
};

export default function Auth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}