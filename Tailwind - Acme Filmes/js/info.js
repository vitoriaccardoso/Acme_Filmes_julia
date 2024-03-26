'use strict'
import { getFilmes, getFilmeByID, postFilme, deleteFilme } from "./filmes.js"

function criarCard(filme){
    // Card dos filmes 
    const card=document.createElement('div')
    card.classList.add('grid', 'p-4')

    // Retornar o nome do filme
    const titulo=document.createElement('h2')
    titulo.textContent=filme.nome
    titulo.classList.add('font-bold', 'grid' ,'text-white')

    // Mostrar a capa dos filmes 
    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('w-capaWidth', 'h-capaHeight', 'rounded-md', 'border-solid')
    
    
    // Retornar a data de lancamento
    // const data= document.createElement('h2', 'text-white')
    // data.textContent=filme.data_lancamento
    // data.classList.add('font-bold')

    // const texto=document.createElement('textarea')
    // texto.textContent=filme.sinopse


    card.append(capa, titulo)
    return card
}

async function preencherContainer(){
    const container=document.getElementById('lista')
    const filmes=await getFilmes()
    filmes.forEach (filme=>{
        const card=criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}

preencherContainer()

console.log(getFilmes)