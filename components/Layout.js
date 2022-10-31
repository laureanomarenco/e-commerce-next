import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Next" : "Next ecommerce"}</title>
        <meta name="description" content="Next e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <span className="text-lg font-bold">Next</span>
            </Link>
            <div>
              <Link href="/cart"><span className="p-4">Cart</span></Link>
              <Link href="/login"><span className="p-4">Login</span></Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">Thanks to be here - Next e-commerce</footer>
      </div>
    </>
  );
}
