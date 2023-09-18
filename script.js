 
// let range = document.getElementById('range')

// range.addEventListener("input",ranges)

// function ranges() {
//   console.log(range.value)

// }
 

let email = document.getElementById('email')
let nomInput = document.getElementById('nomInput');
let nom =  document.getElementById('nom');
let phone = document.getElementById('phone')  
let address  = document.getElementById('address') 
letEDUdegDate = document.getElementById('letEDUdegDate')
letEDUdegree= document.getElementById('letEDUdegree')
letEDUdegCollege= document.getElementById('letEDUdegCollege')
letEDUdegDate2= document.getElementById('letEDUdegDate2')
letEDUdegree2= document.getElementById('letEDUdegree2')
letEDUdegCollege2= document.getElementById('letEDUdegCollege2')


 
const dataStorage = JSON.parse(localStorage.getItem('DataInputs')) || {};
console.log(dataStorage)

const para1 = document.querySelectorAll("input[type=text]");
para1.forEach(element => {
  const elementId = element.id;
  element.value = dataStorage[elementId] || ''; // Set the initial value from dataStorage if available

  element.addEventListener('input', function () {
    const updatedValue = this.value;

    // Update the specific property in dataStorage for this input field
    dataStorage[elementId] = updatedValue;

    // Save the updated dataStorage to local storage
    localStorage.setItem('DataInputs', JSON.stringify(dataStorage));
  });
});
 
function loadDoc() {
  const dataStorage2 = JSON.parse(localStorage.getItem('DataInputs'));

  if (dataStorage2) {
    // Load the values from local storage into the input fields
    for (const property in dataStorage2) {
      if (dataStorage2.hasOwnProperty(property)) {
        document.getElementById(property).value = dataStorage2[property];
       
      
      }
    }
  }
}
loadDoc()

 

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

 Hero.innerHTML = `<img src= "${imageFile}" > ` 

                console.log(imageFile)

} 


 
// image change starts here
let sourceImg = null;

document.getElementById("upload-button").addEventListener("click", function () {
  var input = document.getElementById("image-input");
  if(input.files.length > 0) {
    var file = input.files[0]; 
    var reader = new FileReader();
    reader.onload = function (e) {
    console.log(reader.result) 
    var image = new Image();
    image.src = e.target.result;    
    sourceImg = e.target.result

    var imageContainer = document.getElementById("image-container");
    imageContainer.appendChild(image);
    localStorage.setItem("uploadedImage", e.target.result);


};
reader.readAsDataURL(file);
} 
  else 
{
    alert("Please select an image to upload.");
}
});





//  const dataImg = JSON.parse(localStorage.getItem('uploadedImage'));

// console.log(dataImg)
// document.getElementById(image-container).setAttribute('src',` ${uploadedImage} `)

// Check if there's a stored image URL in local storage
var storedImageUrl = localStorage.getItem("uploadedImage");

if (storedImageUrl) {
  // Create a new Image element
  var image = new Image();
  image.src = storedImageUrl;
  // Add the image to an existing container or create a new container
  var imageContainer = document.getElementById("image-container");

  if (!imageContainer) {
    // If the container doesn't exist, create one
    imageContainer = document.createElement("div");
    imageContainer.id = "image-container";
    document.body.appendChild(imageContainer); // Add it to the body or another appropriate element
  }
  // Append the image to the container
  imageContainer.appendChild(image);
} else {
  // If there's no stored image URL, you can display a message or take other actions
  alert("No image found in local storage.");
}

// let a = function()
// {
//    console.log("a")
//   console.log(sourceImg) 
// } 
// a();


// image change ends here
// function downloads(){  
//   var Hero = document.getElementsByClassName("Hero"); 
//   if (Hero.length > 0) {
//    var Hero = Hero[0];
//    var printWindow = window.open('', '', 'height=1500,width=800');
//    printWindow.document.write('<html class"rmBorder"><head><title>Print</title></head><body style="outline:"none">');
//    printWindow.document.write(`<img id="imaDoad" src='${sourceImg}' />`);  
//    printWindow.document.write(Hero.innerText);
//    printWindow.document.write('</body></html>');
//    printWindow.document.close();
//    printWindow.print();
//  }
// }

 function downloads(){  

  var contentDiv = document.getElementById("second");
//starts here
  
var resumeOptions = {
  // PDF file settings
  filename: 'resume.pdf',  // The name of the generated PDF file
  image: { type: 'jpeg', quality: 0.98 },  // Image format and quality

  // Page settings
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
    marginLeft: 0,
    paddingLeft:0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
  },

  // Optional settings for better visual rendering (if using html2canvas)
  html2canvas: {
    scale: 2, // Increase scale for better resolution (adjust as needed)
    // Additional html2canvas options can be added here if required
  },
  
  // Content-specific settings
  content: {
    // You can define additional options or styling for the resume content here
  }
};

//ends here

  // var opt = {
  //   marginTop:       0,

  //   filename:     'thisis.pdf',
  //   image:        { type: 'jpeg', quality: 0.98 },
  //   // html2canvas:  { scale: 2 },
  //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  // };
   

html2pdf().set(resumeOptions).from(contentDiv).save()
console.log(html2pdf())
}

