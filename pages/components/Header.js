
import Link from 'next/link'

function Header({counter}) {
    return (
        <header className="flex justify-between px-8 py-6 bg-emerald-300">

            <h1 className="text-4xl text-black">Cookie Stand Admin</h1>
            <Link href={{ pathname: "components/OverView", query: { counter } }}>
                <a>OverView</a>
            </Link>
        </header>
    )
}

export default Header