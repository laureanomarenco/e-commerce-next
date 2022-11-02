import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  conse[(cartItemsCount, setCartItemsCount)] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
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
              <Link href="/cart">
                <span className="p-4">
                  Cart{" "}
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </span>
              </Link>
              <Link href="/login">
                <span className="p-4">Login</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Thanks to be here - Next e-commerce
        </footer>
      </div>
    </>
  );
}
