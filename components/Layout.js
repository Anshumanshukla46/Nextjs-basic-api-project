import Head from 'next/head'
import React from 'react'
import Footer from './Footer';
import Header from './Header';

// children : used html tags, and title as props
const Layout = ({ children, title }) => {
    return (
        <div>

            {/* moved from index.tsx  SIMILAR TO HEAD OF HTML*/}
            <Head>

                <title>{title}</title>

                {/* using bootstrap cdn link just made crossOrigin instead of crossorigin*/}

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>

            </Head>



            <Header />
            {children}
            <Footer />

        </div>
    )
}

export default Layout
