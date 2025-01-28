import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') === 'register' ? 'register' : 'login';

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <AuthForm type={type} />
    </div>
  );
}