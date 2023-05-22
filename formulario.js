
let teste = document.getElementById('teste').value
let btn_enviar = document.querySelector('#btn_enviar')
let btn_calcular = document.querySelector('#btn_calcular')
let res = document.querySelector('#res')
let prod_array = []
let qtde_array = []
let preco_laranja = 5.49, preco_limao = 3.29, preco_pera = 4.99

btn_enviar.addEventListener('click', ()=>{
    res.innerHTML = '' //para atualizar e escrever na tela só o ultimo elemento selecionado
    let produto = document.querySelector('#produto').value
    let qtde = document.querySelector('#qtde').value
    prod_array.push(produto)
    qtde_array.push(qtde)
    console.log(prod_array)
    console.log(qtde_array)
    res.innerHTML = '<br>' + 'produto = ' + produto + ' e quantidade = ' + qtde + ' kg'

    console.log(prod_array)
    console.log(qtde_array)
})

btn_calcular.addEventListener('click', ()=>{
    let total = 0.0
    for(i=0;i<prod_array.length;i++){
        if(prod_arrary[i]== 'laranja'){
            total = total + preco_laranja*qtde_array[i]
        }
        if(prod_arrary[i]== 'limao'){
            total = total + preco_limao*qtde_array[i]
        }
        if(prod_arrary[i]== 'pera'){
            total = total + preco_pera*qtde_array[i]
        }
    }
})