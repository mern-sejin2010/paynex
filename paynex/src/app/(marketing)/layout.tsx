import { Fragment, ReactNode } from 'react';
import { Header } from '@/components/marketing';
export default function MarketingLayout ({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Fragment>
      <Header/>
      { children }
    </Fragment>
  );
};