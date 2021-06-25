import Link from 'next/link'

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <h2>NINJA LIST</h2>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ninjas">Ninjalist</Link>
            </div>
        </nav>
    );
}

export default Header;