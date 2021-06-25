
import { useRouter } from "next/dist/client/router";
import Link from "next/link"
import { useEffect } from "react";
import Header from '../comps/header'

const notFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <Header />
            <h2>Opppppss....</h2>
            <h4>this page not be found!!</h4>
            <p> go to the <Link href="/"><a>Home</a></Link></p>
        </div>
     );
}
 
export default notFound;