
// Buscar todos os filmes
export async function getFilmes(){
    let url='http://localhost:8080/v2/acmefilmes/filmes'
    const response=await fetch(url)
    const data=await response.json()
    return data.filmes
}

// Buscar o filme pelo ID
export async function getFilmeByID(id){
    let url=`http://localhost:8080/v2/acmefilmes/filme/${id}`
    const response=await fetch(url)
    const data=await response.json()
    console.table(data.filme[0])
}


// Publicar filme novo - post
export async function postFilme(filme){
    const url = 'http://10.107.134.40:8080/v2/acmefilmes/filmes'
    //JSON
    const_options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        // Transformar o filme em uma string para mandar pro servidor
        body: JSON.stringify(filme)
    }
    const response =  await fetch(url, options)
    return response.ok
}
 
// Excluir um filme
export async function deleteFilme(id){
    const url = `http://10.107.134.40:8080/v2/acmefilmes/filme/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}