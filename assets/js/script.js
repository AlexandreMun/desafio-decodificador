const entradaTxt = document.querySelector(".txt-entrada");
let saidaTxt = document.querySelector(".msg-res");
const btnCriptografar = document.querySelector(".btn-criptografar");
const btnDescriptografar = document.querySelector(".btn-descriptografar");
const btnCopiar = document.querySelector(".btn-copiar")
const resultadoTelaVazio = document.querySelector(".empty")
const resultadoTela = document.querySelector(".result")

btnCriptografar.addEventListener("click", () => {
  let entrada = entradaTxt.value;
  let res = "";

  for (let i = 0; i < entrada.length; i++) {
    if (entrada[i] == "a") {
      res += "ai";
    } else if (entrada[i] == "e") {
      res += "enter";
    } else if (entrada[i] == "i") {
      res += "imes";
    } else if (entrada[i] == "o") {
      res += "ober";
    } else if (entrada[i] == "u") {
      res += "ufat";
    } else {
      res += entrada[i];
    }
  }

  saidaTxt.value = res;

  resultadoTelaVazio.classList.add('disabled')
  resultadoTela.classList.remove('disabled')
});

btnDescriptografar.addEventListener("click", () => {
  let entrada = entradaTxt.value;
  let res = "";
  let aux = 0;

  while (aux == 0) {
    if (
      entrada.indexOf("ai") > -1 ||
      entrada.indexOf("enter") > -1 ||
      entrada.indexOf("imes") > -1 ||
      entrada.indexOf("ober") > -1 ||
      entrada.indexOf("ufat") > -1
    ) {
      if (entrada.indexOf("ai") > -1) {
        res = entrada.replace("ai", "a");
        entrada = res;
      }
      if (entrada.indexOf("enter") > -1) {
        res = entrada.replace("enter", "e");
        entrada = res;
      }
      if (entrada.indexOf("imes") > -1) {
        res = entrada.replace("imes", "i");
        entrada = res;
      }
      if (entrada.indexOf("ober") > -1) {
        res = entrada.replace("ober", "o");
        entrada = res;
      }
      if (entrada.indexOf("ufat") > -1) {
        res = entrada.replace("ufat", "u");
        entrada = res;
      }
    } else {
      aux = 1;
    }
  }

  saidaTxt.value = entrada;

  resultadoTelaVazio.classList.add('disabled')
  resultadoTela.classList.remove('disabled')
});

btnCopiar.addEventListener("click", async () => {
  await navigator.clipboard.writeText(saidaTxt.value)
})