import Image from "next/image"

type Fotos = {
    id: string
    source: string
    description: string
}

interface GaleriaProps {
    fotos: Fotos[]
}

const Galeria = (
    {fotos}: GaleriaProps
) => {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols4 xl:grid-cols-6">
            {fotos.slice(0, 9).map((foto, indice)=>{

                // Destacando a primeira foto na galeria 
                const primeiraFoto = indice == 0 ? 'col-span-2 row-span-2' : ''

                return (
                    <div  key={indice}
                    // Usando template string do JS para adicionar classes dinamicamente  
                    className={`${primeiraFoto}`}>
                        <Image
                        className={`w-full aspect-square object-cover ${primeiraFoto}`}
                            src={foto.source} 
                            alt={foto.description}
                            width={1280}
                            height={720}
                        />
                    </div>
                )   
            })}
        </div>
    )
}   

export default Galeria;