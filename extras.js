// console.log(document.getElementById('top-menu'))

function menucheck(){
    
for(let i =0;i<4;i++){
var x = document.getElementById('top-menu').children[i]
x.style = ""
x.classList.add("flex-item");
}}

menucheck();

function togglemenu() {
    x = document.getElementById('top-menu')
    if(x.style.display == 'none'){
        x.style.display = 'flex'  
    }
    else{
        x.style.display = 'none'

}}

eventlistnersadded()
function eventlistnersadded(){
document.getElementById('collapase-link').addEventListener('click', (e)=>{   
    togglemenu();
})
document.getElementById('expand-link').addEventListener('click', (e)=>{
    togglemenu();
    
})
}


y = document.body.children[3] // main text area
y.id = 'maincontentarea';









function imagesfix(){


    z  = document.createElement('img')
    z.src = 'iic.jpg'
    z.id = 'iic'
    document.body.appendChild(z)

    z  = document.createElement('img')
    z.src = 'iitgoa.jpg'
    z.id = 'iit'
    document.body.appendChild(z)
 

}

imagesfix();

let x =  setTimeout( () => {

    try{
        document.getElementById('iit').remove()
        document.getElementById('iic').remove()  
        imagesneeded= false;
        document.getElementById('maincontentarea').style.marginTop = '10vh'
        document.getElementById('maincontentarea').style.left = '10vw'}
    catch(err){
        console.log(err)
    }
      

}, 10000);