'use strict'

let input = document.getElementById('mySearch');

input.addEventListener('keyup', ()=>{
    let filter, ul, li, i;
    filter = input.value.toUpperCase();
    
    ul = document.getElementById('myMenu');
    li = ul.getElementsByTagName('li');
    
    for(i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
})