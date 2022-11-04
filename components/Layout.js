import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from "@headlessui/react";
import { Store } from "../utils/Store";
import { signOut, useSession } from "next-auth/react";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart')
    dispatch({ type: 'CART_RESET' })
    signOut({ callbackUrl: '/login' })
  }
  return (
    <>
      <Head>
        <title>{title ? title + " - Next" : "Next ecommerce"}</title>
        <meta name="description" content="Next e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

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
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as='div' className='relative inline-block'>
                  <Menu.Button>
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className='absolute right-0 w-56 origin-top-right bg-white shadow-lg'>
                    <Menu.Item>
                      <DropdownLink className='dropdown-link' href='/profile'>Profile</DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a className="dropdown-link" href='#' onClick={logoutClickHandler}>Logout</a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <span className="p-4">Login</span>
                </Link>
              )}
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
