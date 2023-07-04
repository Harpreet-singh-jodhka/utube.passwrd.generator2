let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let PassBox=document.getElementById("PassBox");
let uppercase=document.getElementById("uppercase");
let lowercase=document.getElementById("lowercase");
let number=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon")


// showing input value
sliderValue.textContent=inputSlider.value
//showing chnaged value input
inputSlider.addEventListener('input',()=>{
sliderValue.textContent=inputSlider.value
})

//  copy icon everything 
copyIcon.addEventListener('click',()=>{
    if(PassBox.value != 0 || PassBox.value.length>=1){
        navigator.clipboard.writeText(PassBox.value)
        copyIcon.innerHTML="check"
        copyIcon.title="Password Copied";
        
        
        setTimeout(()=>{
            copyIcon.innerHTML="content_copy"
        copyIcon.title="";
    },2400);
    }
})



genBtn.addEventListener('click',()=>{
    PassBox.value=generatePassward()
})




// WE HAD DONE THE CHECKING AND SPECIFIC STORING THING 
let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lower = "abcdefghijklmnopqrstuvwxyz";
let Num = "0123456789";
let Symbol = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;


 function generatePassward(){
    let genpass = "";
    let x="";
    x += lowercase.checked ? Lower:"";
    x += uppercase.checked ? Upper:"";
    x += number.checked ? Num:"";
    x += symbols.checked ? Symbol:"";

    let i =1;
    while(i<=inputSlider.value){
        
        genpass += x[Math.floor(Math.random()*x.length)]
        i++;
    }
       
    return genpass
 }

//  WE WILL ATTAVCH THE PASSBOX/CHRCTR LEGTH THING - Node. OF CHARACERS 







// function generatePassward(){
//     let gepass ="";
//     let forall = "";

//     gepass=Upper[Math.floor(Math.random()*Upper.length)];
//     return gepass;


//     let i =1
//     while(i>=1){

//     }
// uppercase.checked=uppercase[Math.floor(Math.random()*uppercase.length)]
// }