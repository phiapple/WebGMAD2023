import Head from 'next/head';

export default function BaseLayout({
  seoTitle = 'GMAD • Gadjah Mada Accounting Days',
  children,
}) {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
      </Head>

      {children}
    </>
  );
}
