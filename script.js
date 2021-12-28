
const captcha = document.querySelector(".captcha"),
reloadButton = document.querySelector(".reload-button"),
inputField = document.querySelector(".input-area input"),
checkButton = document.querySelector(".check-button"),
statusText = document.querySelector(".status-text");

//storing captcha characters in array

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){

  for (let i = 0; i < 6; i++) { //6 random characters from the array
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //6 random characters inside captcha innerText
  }
}

getCaptcha();               //calling getCaptcha when the page open

                            //calling getCaptcha & removeContent on the reload button

reloadButton.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});

checkButton.addEventListener("click", e =>{
  e.preventDefault();  //prevents button from default behaviour
  statusText.style.display = "block";
                            //add space after each character of user entered values
  let inputValue = inputField.value.split('').join(' ');
  if(inputValue == captcha.innerText){       //if captcha matched
    statusText.style.color = "white";
    statusText.innerText = "You don't appear to be a robot. Welcome back!";
    setTimeout(()=>{       //calling removeContent & getCaptcha after 4 seconds
      removeContent();
      getCaptcha();
    }, 5000);
  }else{                  //if captcha unmatched
    statusText.style.color = "black";
    statusText.innerText = "Captcha not matched. Please try again!";
  }
});
function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusText.style.display = "none";
}