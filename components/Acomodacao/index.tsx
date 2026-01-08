import { IconHeartFilled, IconStarFilled } from "@/assets/icones";


interface AcomodacaoProps {
    children: React.ReactNode;
    local: string;
    anfitriao: string;
    data: string;
    preco: number;
    avaliacao: number;
    preferidoHospedes: boolean;
}   

const Acomodacao = ( {
    // Usando children para receber a imagem da acomodação
    // Destucturing props to get children
    children, local, anfitriao, data, preco, avaliacao, preferidoHospedes
}: AcomodacaoProps ) => {
    return (
        <figure className="relative"> {/* Usando figure e figcaption para representar uma imagem com legenda */}
            <div className="p-2 absolute w-full flex flex-row justify-between items-center">
                <div>
                    {preferidoHospedes && ( // Se preferidoHospedes for true, show the span
                        <span className="bg-white rounded-full px-4 py-1 font-semibold">
                            Preferido dos hóspedes
                        </span>                        
                    )}
                </div>

                <IconHeartFilled className="stroke-white oppacity-80" 
                arial-label="Favoritos" size={30}/>
            </div>  

            {children}

            <figcaption className="pt-2">
                <div className="flex flex-row justify-between">
                    <span className="font-semibold">{local}</span>
                    <div className="flex flex-row gap-1">
                        <IconStarFilled className="" 
                        arial-label="Favoritos" size={20}/>
                        <span className="font-semibold">{avaliacao}</span>                         
                    </div>
                </div>
                    <div>Anfitrião(o): {anfitriao}</div>
                <div>{data}</div>
                <div className="font-semibold">R$ {preco}</div>
            </figcaption>
        </figure>
    )
}

export default Acomodacao;