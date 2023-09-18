let email = document.getElementById('email')
let nomInput = document.getElementById('nomInput');
let nom =  document.getElementById('nom');
let emailDisplay = document.getElementById('emailDisplay') 
 

// let dataStorage  = JSON.parse(localStorage.getItem('DataInputs'));
// nomInput.value = dataStorage.nom
// email.value = dataStorage.email   


let para1 =  document.getElementById('para1');
console.log(para1.innerText)


 function DataStore() {
   let dataStorage = {
     "nom": nomInput.value,
     "email": email.value

    } 

localStorage.setItem('DataInputs', JSON.stringify(dataStorage));
}

  










  
  let AllInputs = document.querySelectorAll("input[type='text'],input[type='email'] "); 
  AllInputs.forEach(element => {
     element.addEventListener("keyup",loadDoc) 
    //  element.addEventListener("click",loadDoc2)   
    });
   
  // nomInput.addEventListener("keyup",loadDoc)
  // email.addEventListener("keyup",loadDoc)

  let AllInputs2 = document.querySelectorAll("p"); 
  AllInputs2.forEach(element => {
     element.addEventListener('dblclick', function () {
      this.contentEditable = true;
      this.focus();

      } )  });
 

  document.body.addEventListener("click",functionColor)

function functionColor(e)
{
console.log(e)
}


function func2()
 {
  nom.style.color = "red"
}

 

let tabcontent = document.querySelectorAll('.tabcontent')
let listUl= document.querySelectorAll(' .first>ul>li')

listUl.forEach((tab, index) => {
   tab.addEventListener("click",myfunction)
   
   function myfunction(){
      console.log(listUl)
      for(i=0; i<tabcontent.length; i++)   
   
      if(index === i)
   {
   console.log(index)       
   tabcontent[i].style.display = "block"
   // listUl[i].style.backgroundColor = "red"       
   }
    else 
      {
       tabcontent[i].style.display = "none"
//    listUl[i].style.backgroundColor = "black"         

      console.log("tftft")
      }
}
})



function submit(){
   let imageFile = document.querySelector('#myFile').value

 Hero.innerHTML = `<img src= "${imageFile}" >

 
 ` 

   // Hero.innerHTML = `kdjlkeldjk`  
                console.log(imageFile)

} 
function downloads(){  
   var Hero = document.getElementsByClassName("Hero"); 
   if (Hero.length > 0) {
    var Hero = Hero[0];
    var printWindow = window.open('', '', 'height=1500,width=800');
    printWindow.document.write('<html class"rmBorder"><head><title>Print</title></head><body style="outline:"none">');
    printWindow.document.write(Hero.innerText);
    printWindow.document.write("<img src='" + image.src + "' />");  
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
}



 