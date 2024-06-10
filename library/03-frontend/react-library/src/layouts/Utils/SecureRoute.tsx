import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { SpinnerLoading } from './SpinnerLoading';

export const SecureRoute: React.FC = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
        navigate("/login");
    }
  }, [oktaAuth, !!authState, authState?.isAuthenticated]);

  if (!authState || !authState?.isAuthenticated) {
    return (<SpinnerLoading />);
  }

  return (<Outlet />);
}