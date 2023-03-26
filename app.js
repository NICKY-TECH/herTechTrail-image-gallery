const main=document.querySelector('.container');

main.addEventListener('click',async(event)=>
{

    if(event.target.tagName=='figcaption'.toUpperCase()){
      
      event.target.parentElement.style.backgroundColor=colorMaker();

      // event.target.innerText=changeText();
      event.target.style.color=colorMaker();
      // console.dir(event.target)
    }
   

         
});

//color maker

function colorMaker(){
    let r=Math.floor(Math.random()*255);
    let  x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let  z = Math.floor(Math.random() * 255);
    return 'rgb('+x+','+y+','+z+')';
}

//text changing function
// function changeText(){
//   let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   let charLength = chars.length;
// let result = '';
//    for ( let i = 0; i < 6; i++ ) {
//       result += chars.charAt(Math.floor(Math.random() * charLength));
//    }
//    return result;
// }