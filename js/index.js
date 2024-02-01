var edad=90

const myAge=90

//console.log('@@Edad => ',myAge+ edad)

const main = document.getElementsByTagName('main')
const article = document.getElementsByTagName('article')
//console.log('@@ main => ',main)
//console.log('@@ article => ',article)

Object.values(article).forEach((temp)=>{
    //console.log('@@temp =>',temp)
})

const arr=[1,2,3,4,5,6,7,8,9,10]
const obj= {
    uno:1,
    dos:2,
    tres:3,
    cuatro:4,
    cinco:5,
    seis:6,
    siete:7,
    ocho:8,
    nueve:9,
    diez:10
}

//console.log('@@ variables =>',arr,obj)
arr.forEach((item,index)=>{
    //console.log('@@ arreglo =>', item,index)
})

//console.log('@@ values =>',Object.values(obj))
//console.log('@@ values =>',Object.entries(obj))
//console.log('@@ values =>',Object.keys(obj))

function suma (){
    console.log ('@@suma =>',56+90)
}

function sumaParams (x,y){
    console.log ('@@suma params =>',x + y)
}

const sumaNew= ()=>{
    console.log ('@@sumaNew =>',45+90)
}

const sumaNewParams=(x,y)=>{
    console.log('@@ Suma New =>',x+y)
}

suma()
sumaParams(45,900)
sumaNew()
sumaNewParams(212,334)


const hola = 'Hola amigo'
console.log(`${hola} como estas? ${suma}`)

const articulo = document.createElement('article')
articulo.textContent='Creado desde JS'
const nuevo = document.getElementsByTagName('main')[0]
nuevo.appendChild(articulo)
setTimeout(() => {
    nuevo.style.display='none'
}, 5000);