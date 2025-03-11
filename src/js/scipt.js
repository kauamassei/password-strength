const passwordInput = document.querySelector("#passwordInput"); //seleciono o elemnto principal onde vai ocorrer o evento

passwordInput.addEventListener("input", function () {
  const password = this.value; // resgato o valor que vai ser utilizado

  const strengthIndicator = document.querySelector(
    "#password-strength-indicator"
  );

  const strengthText = document.querySelector("#password-strength-text"); // resgato outros elementos que vou alterar

  const strengths = {
    0: "Muito fraca",
    1: "Fraca",
    2: "Moderada",
    3: "Forte",
    4: "Muito forte",
  }; // defino a força de senha

  let score = 0;

  // Requisitos
  if (password.length >= 8) score++;
  if (password.match(/[a-z]/)) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[^a-zA-Z0-9]/)) score++; //expressões regulares para definir os caracteres e adicionar força na senha

  const width = (score / 4) * 100; // score em porcentagem dividido por 4

  strengthIndicator.style.width = `${width}%`;

  switch (score) {
    case 1:
      strengthIndicator.style.backgroundColor = "#e70b0b";
      break;
    case 2:
      strengthIndicator.style.backgroundColor = "#FFB74D";
      break
    case 3:
      strengthIndicator.style.backgroundColor = "#FFF176";
      break
    case 4:
      strengthIndicator.style.backgroundColor = "#81C784";
      break
    default:
      strengthIndicator.style.backgroundColor = "transparent";
      break
  } // switch case para cada nível de força alterar a cor

  

  if (password.length > 0) {
    strengthText.innerHTML = `${strengths[score]}`;
  } else {
    strengthText.innerHTML = ""; //retira o texto de senha se o inpu estiver vazio
  }
});
