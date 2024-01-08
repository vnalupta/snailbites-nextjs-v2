import React, { ReactElement } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Transition from './transition'


interface ILayoutProps {
    children: ReactElement;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Transition location={router.pathname}>
                {children}
            </Transition>
        </div>
    )
}

export default Layout;