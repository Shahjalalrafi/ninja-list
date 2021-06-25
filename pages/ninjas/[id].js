import Header from "../../comps/header";
import Footer from '../../comps/footer'

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await res.json()

    return {
        props: { ninja: data }
    }
}

// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
  
//     // map data to an array of path objects with params (id)
//     const paths = data.map(ninja => {
//       return {
//         params: { id: ninja.id.toString() }
//       }
//     })
  
//     return {
//       paths,
//       fallback: false
//     }
//   }
  
//   export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
//     const data = await res.json();
  
//     return {
//       props: { ninja: data }
//     }
//   }

const Details = ({ ninja }) => {
    return (
        <>
            <Header />
            <h2>
                {ninja.name}
            </h2>
            <p>{ninja.email}</p>
            <p>{ninja.address?.city}</p>
            <p>{ninja.website}</p>
            <Footer />
        </>
    );
}

export default Details;