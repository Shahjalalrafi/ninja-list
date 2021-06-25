import Head from 'next/head'
import Header from '../comps/header.js'
import Footer from '../comps/footer.js';

const about = () => {
    return (
        <>
            <Head>
                <title>Ninja || About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <Header />
                <h2>About</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque maiores reprehenderit ab perferendis tempore ea ex ipsa sunt voluptatem. Reprehenderit?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque maiores reprehenderit ab perferendis tempore ea ex ipsa sunt voluptatem. Reprehenderit?</p>
            </div>
            <Footer></Footer>
        </>

    );
}

export default about;