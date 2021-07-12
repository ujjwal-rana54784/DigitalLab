// console.log(document.getElementById('top-menu'))

function menucheck(){
    
for(let i =0;i<4;i++){
x = document.getElementById('top-menu').children[i]
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

z  = document.createElement('img')
z.src = 'iic.jpg'
z.id = 'iic'
document.body.appendChild(z)

z  = document.createElement('img')
z.src = 'iitgoa.jpg'
z.id = 'iit'
document.body.appendChild(z)
