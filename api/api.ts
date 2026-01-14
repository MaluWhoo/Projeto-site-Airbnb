import { Accommodation, AirbnbApi } from "@/types/AirbnbDados";
import { error } from "console";

// fetchData -> Recuperar dados da API
export async function fetchData(): Promise<AirbnbApi> {
    try {
        // fetch -> vai recuperar os dados
        const response = await fetch("https://web.codans.com.br/airbnb")

        // Converter o retorno em um objeto tipo json
        const dados = response.json()

        return dados
    } catch (e) {
        console.error(e)
        throw e
    }
}

export async function fetchDataById(
    id: string
): Promise<Accommodation | undefined> {
    try {
        const dados = await fetchData()
        const acomodacao = dados.accommodation.find( (item: Accommodation)=>{
            return item.slug === decodeURIComponent(id) // decodeURIComponent -> Remove as acentuações se houver na URL
        } )
         
        return acomodacao
    } catch (e) {
        console.error(e)
        throw e
    }
}