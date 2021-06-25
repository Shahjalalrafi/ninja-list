import Head from 'next/head'
import Link from 'next/link'
import Header from '../../comps/header'
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props: {ninjas: data}
    }
}

const NinjaList = ({ninjas}) => {
    return (
        <>
            <Head>
                <title>Ninja || ninjalist</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <Header />
                <h2>All Ninja</h2>
                {
                    ninjas.map(ninja => {
                        return <Link href={"/ninjas/"+ ninja.id} key={ninja.id}>
                            <a className={styles.single}>
                            <h2>{ninja.name}</h2>
                            </a>
                        </Link>
                    })
                }
            </div>
        </>
    );
}

export default NinjaList;