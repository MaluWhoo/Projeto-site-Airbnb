import { IconHeartFilled } from "@/assets/icones";


interface AcomodacaoProps {
    children: React.ReactNode;
}

const Acomodacao = ( props: AcomodacaoProps ) => {
    return (
        <figure className="relative"> {/* Usando figure e figcaption para representar uma imagem com legenda */}
            <div className="p-2 absolute w-full flex flex-row justify-between items-center">
                <span className="bg-white rounded-full px-4 py-1 font-semibold">Preferido dos hóspedes</span>
                <IconHeartFilled className="stroke-white oppacity-80" 
                arial-label="Favoritos" size={30}/>
            </div>  

            {props.children}
            <figcaption>
                Descrição
            </figcaption>
        </figure>
    )
}

export default Acomodacao;