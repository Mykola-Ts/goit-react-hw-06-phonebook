import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { toastOptions } from '../../helpers/helpers';
import { GlobalStyle } from '../GlobalStyle';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />

      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>

      <Toaster position="top-right" toastOptions={toastOptions} />
      <GlobalStyle />
    </>
  );
};
