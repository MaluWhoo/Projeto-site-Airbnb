import Link from "next/link";

const Rodape = () => {
    return (
        <div className="container mx-auto py-5">
            <span className="text-lg font-semibold pb-5">&copy; AirBnb INC</span>
            <ul className="flex flex-row gap-2">
                <li><Link href="/" className="hover:text-red-500">Privacidade</Link></li>
                <li>&middot;</li>
                <li><Link href="/" className="hover:text-red-500">Termos</Link></li>
                <li>&middot;</li>
                <li><Link href="/" className="hover:text-red-500">Mapa do site</Link></li>
                <li>&middot;</li>
                <li><Link href="/" className="hover:text-red-500">Informações da empresa</Link></li>
            </ul>
        </div>
    )
}

export default Rodape;