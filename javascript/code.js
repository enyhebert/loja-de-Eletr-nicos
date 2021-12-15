const produtos = [
    {
        id:1,
        image: src="img/carregador.png",
        title:'Carregador',
        description: 'carregador tipo c para cll',
        value:19.00
    },
    {
        id:2,
        image: src="img/celular.jpg",
        title:' Celular',
        description: 'celular da sansung de 128gb',
        value:1200.00
    },
    {
        id:3,
        image: src="img/fone.jpg",
        title:'Fone',
        description: 'fone de ouvido original',
        value:150.00
    },
    {
        id:4,
        image: src="img/mi tv.jpg",
        title:'Mi Tv Stick',
        description: 'add de tv para smart tv',
        value:298.00
    },
    {
        id:5,
        image: src="img/band.jpg",
        title:'Mi Band 6',
        description: 'relogio digital com muti fucoes',
        value:231.00
    },
    {
        id:6,
        image: src="img/monitor.jpg",
        title:'MONITOR',
        description: 'monitor de pc com 120ghz',
        value:680.00
    },
    {
        id:7,
        image: src="img/som.jpg",
        title:'SOM',
        description: 'som original com muti funcoes',
        value:850.00
    },
    {
        id:8,
        image: src="img/cartao.jpg",
        title:'Cartao de memoria',
        description: 'cartao para armazenar dados',
        value:40.00
    },
]
const loadproducts = (produtos,idDivParent)=>{
    const parentdiv = document.querySelector(idDivParent)
    produtos.forEach(produto => {

const html = `
     <article class="PRODUTO">
         <img src="${produto.image}" alt="${produto.title}">
         <h4>${produto.title}</h4>
         <h4>R$ ${produto.value}</h4>
         <p>${produto.description}</p>
         <button type="button" onclick="modalTrigger(${produto.id})">Quero esse produto </button> 
     </article>
`
    parentdiv.insertAdjacentHTML('beforeend',html)
    } )        
}

const modalTrigger =(productId) => {
    const modal = document.querySelector('.modal')

   if (productId != null){
       const produto = produtos.filter(produto =>produto.id == productId )

       if(produto != null){
           modal.querySelector('#title').value = produto[0].title
       }
   }

    if (modal.classList.contains('hide')){
        modal.classList.remove('hide')
    }else{
        modal.classList.add('hide')
        
        
    }
}

const WhatssapLinkGenerator =(phoneNumber,productTitle,productQuantity,buyerName,buyerAddress,buyerPayment) =>
`https://api.whatsapp.com/send?phone=${phoneNumber}&text=ola Quero: ${productQuantity} 
${productTitle} - Entregar para ${buyerName}no  Endereço: ${buyerAddress} - A forma de pagamento sera:${buyerPayment}`


const checkout = phoneNumber => {
    const form = document.querySelector('#product-div')

        const productTitle = document.querySelector('#title').value
        const productQuantity = document.querySelector('#quantity').value
        const buyerName = document.querySelector('#name').value
        const buyerAddress = document.querySelector('#address').value
        const buyerPayment = document.querySelector('#payment').value

        const whatsappUrl = WhatssapLinkGenerator(phoneNumber,productTitle,productQuantity,buyerName,buyerAddress,buyerPayment)

        window.location.href = whatsappUrl
} 


 loadproducts(produtos,'#product-div')
