import React from 'react';
import Image from 'next/image';
import logourl from '../public/webocreation1.png';
import Link from 'next/link';
import Head from "next/head";


const Header = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Head>
                <title>
                Marketo Form Administration - Developed by WebOCreation.com
                </title>
                <meta
                name='description'
                content='Edit all of your forms at once - Marketo Form Administration - Developed by WebOCreation.com'
                />
                <meta name='viewport' content='width=device-width' />
                <meta charSet='utf-8' />
            </Head>
            <div className="container p-5 d-flex justify-content-center">
                <div className="row">
                    <Link href="https://webocreation.com/blog/">
                    <a><Image src={logourl} alt="Picture of the author"/></a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;