// ==========================
// FUNÇÃO GENÉRICA
// ==========================
function criarLista(
  inputId,
  datalistId,
  storageKey,
  listaPadrao,
  botaoDeleteId = null,
  somenteNumero = false
) {
  const input = document.getElementById(inputId);
  const datalist = document.getElementById(datalistId);
  let itens =
    JSON.parse(localStorage.getItem(storageKey)) || listaPadrao;
  // Atualiza lista
  function atualizarLista() {
    datalist.innerHTML = "";
    itens.forEach(valor => {
      const option = document.createElement("option");
      option.value = valor;
      datalist.appendChild(option);
    });
  }
  atualizarLista();
  // Adiciona novo item
  input.addEventListener("change", () => {
    const valor = input.value.trim();
    if (valor && !itens.includes(valor)) {
      itens.push(valor);
      // Ordena números
      if (somenteNumero) {
        itens.sort((a, b) => parseFloat(a) - parseFloat(b));
      }
      localStorage.setItem(
        storageKey,
        JSON.stringify(itens)
      );
      atualizarLista();
    }
  });
  // Botão deletar
  if (botaoDeleteId) {
    const botaoDelete =
      document.getElementById(botaoDeleteId);
    botaoDelete.addEventListener("click", () => {
      const valor = input.value.trim();
      if (!valor) return;
      itens = itens.filter(item => item !== valor);
      localStorage.setItem(
        storageKey,
        JSON.stringify(itens)
      );
      atualizarLista();
      input.value = "";
    });
  }
  // Apenas números
  if (somenteNumero) {
    input.addEventListener("input", () => {
      input.value = input.value
        .replace(/\D/g, "")
        .slice(0, 10);
    });
  }
}
// Volume
criarLista(
  "volume",
  "lista-volume",
  "volumes",
  ["10","20","30","40","50","60","70","80","90","100"],
  "botao-volume",
  true
);
// Cor
criarLista(
  "cor",
  "lista-cor",
  "cores",
  ["TRANSPARENTE","AMARELO TRANSPARENTE","AMARELO PALHA","AMARELO CLARO","AMARELO CITRINO","AMARELO TURVO","AMARELO ESCURO","ALARANJADO","lARANJA","AVERMELHADA","ACASTANHADA","MARROM CLARO","MARROM ESCURO","AZULADO","AZUL","ESVERDEADO","VERDE","ESCURO","PRETO","ESPUMA NA URINA","EFERVESCENTE","ÂMBAR","MEL"],
  "botao-cor",
  false
);
// Aspecto
criarLista(
  "aspecto",
  "lista-aspecto",
  "aspectos",
  ["SEMI - TURVO","TURVO","LÍMPIDO","LEITOSO","OPALESCENTE"],
  "botao-aspecto",
  false
);
// Urobilinogênio
criarLista(
  "uro",
  "lista-uro",
  "uros",
  ["AUSENTE","TRAÇOS","+","++","+++","++++"],
  "botao-uro",
  false
);
// Glicose
criarLista(
  "glicose",
  "lista-glicose",
  "glicoses",
  ["AUSENTE","TRAÇOS","+","++","+++","++++"],
  "botao-glicose",
  false
);
// Corpos Cetônicos
criarLista(
  "cetona",
  "lista-cetona",
  "cetonas",
  ["AUSENTES","TRAÇOS","+","++","+++","++++"],
  "botao-cetona",
  false
);
// Bilirrubina
criarLista(
  "bilirrubina",
  "lista-bilirrubina",
  "bilirrubinas",
  ["AUSENTE","TRAÇOS","+","++","+++","++++"],
  "botao-bilirrubina",
  false
);
// Proteína
criarLista(
  "proteina",
  "lista-proteina",
  "proteinas",
  ["AUSENTE","TRAÇOS","+","++","+++","++++"],
  "botao-proteina",
  false
);
// Nitrito
criarLista(
  "nitrito",
  "lista-nitrito",
  "nitritos",
  ["NEGATIVO","POSITIVO"],
  "botao-nitrito",
  false
);
// pH
criarLista(
  "ph",
  "lista-ph",
  "phs",
  ["1.0","1.5","2.0","2.5","3.0","3.5","4.0","4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0","8.5","9.0","9.5","10.0","10.5"],
  "botao-ph",
  false
);
// Sangue/Hemoglobina
criarLista(
  "hemoglobina",
  "lista-hemoglobina",
  "hemoglobinas",
  ["AUSENTE","TRAÇOS","+","++","+++","++++"],
  "botao-hemoglobina",
  false
);
// Densidade
criarLista(
  "densidade",
  "lista-densidade",
  "densidades",
  ["1.000","1.005","1.010","1.015","1.020","1.025","1.030","1.035","1.040","1.045","1.050","1.055","1.060","1.065","1.070","1.075","1.080","1.085","1.090","1.095"],
  "botao-densidade",
  false
);
// Leucócitos
criarLista(
  "leucocitos",
  "lista-leucocitos",
  "leucocitos",
  ["AUSENTES","TRAÇOS","+","++","+++","++++"],
  "botao-leucocitos",
  false
);
// Hemácias
criarLista(
  "hemacias",
  "lista-hemacias",
  "hemacias",
  ["AUSENTES","TRAÇOS","NUMEROSAS P/C","10 - 14 P/C","08 - 10 P/C","05 - 07 P/C","02 - 03 P/C","01 - 03 P/C","01 - 02 P/C"],
  "botao-hemacias",
  false
);
// Cilindros
criarLista(
  "cilindros",
  "lista-cilindros",
  "cilindros",
  ["AUSENTES","TRAÇOS","NUMEROSOS P/C","GRANULOSOS - RAROS P/C","GRANULOSOS - MODERADOS P/C","CÉREOS - RAROS P/C","CÉREOS - MODERADOS P/C","HIALINOS - RAROS P/C","HIALINOS - MODERADOS P/C","01 - 02 P/C","LEUCOCITÁRIOS - RAROS P/C","LEUCOCITÁRIOS - MODERADOS P/C"],
  "botao-cilindros",
  false
);
// Células Epiteliais
criarLista(
  "epiteliais",
  "lista-epiteliais",
  "epiteliais",
  ["AUSENTES","TRAÇOS","NUMEROSAS P/C","RARAS P/C","MODERADAS P/C"],
  "botao-epiteliais",
  false
);
// Piócitos
criarLista(
  "piocitos",
  "lista-piocitos",
  "piocitos",
  ["AUSENTES","RAROS P/C","NUMEROSOS P/C","08 - 10 P/C","05 - 08 P/C","05 - 06 P/C","10 - 14 P/C","08 - 13 P/C","02 - 04 P/C","08 - 12 P/C","08 - 14 P/C","12 - 14 P/C","13 - 16 P/C","12 - 15 P/C","02 - 08 P/C","12 - 13 P/C","02 - 05 P/C","02 - 03 P/C"],
  "botao-piocitos",
  false
);
// Flora Bacteriana
criarLista(
  "flora",
  "lista-flora",
  "flora",
  ["AUSENTE","MODERADA","MODERADA P/C","DISCRETA","DISCRETA P/C","ACENTUADA","ACENTUADA P/C"],
  "botao-flora",
  false
);
// Cristais
criarLista(
  "cristais",
  "lista-cristais",
  "cristais",
  ["AUSENTES","RARAS","RARAS P/C","MODERADAS","MODERADAS P/C","NUMEROSAS","NUMEROSAS P/C","FREQUENTES","FREQUENTES P/C","OXALATO DE CÁLCIO - MODERADOS P/C","OXALATO DE CÁLCIO - RARAS P/C"],
  "botao-cristais",
  false
);
// Granulações
criarLista(
  "granulacoes",
  "lista-granulacoes",
  "granulacoes",
  ["AUSENTES","RAROS","RAROS P/C","MODERADOS","MODERADOS P/C","NUMEROSOS","NUMEROSOS P/C","FREQUENTES - URATOS AMORFOS","RAROS - URATOS AMORFOS","MODERADOS - URATOS AMORFOS","RAROS - FOSFATOS AMORFOS","FREQUENTES - FOSFATOS AMORFOS","MODERADOS - FOSFATOS AMORFOS"],
  "botao-granulacoes",
  false
);
// Obss.
for (let i = 1; i <= 10; i++) {
  criarLista(
    `obs${i}`,
    "lista-obs",
    "obs",
    [
      "PRESENÇA DE RARAS LEVEDURAS",
      "PRESENÇA DE RARAS CÉLULAS TUBULARES",
      "PRESENÇA DE RARAS CÉLULAS TUBULARES P/C",
      "PRESENÇA DE NUMEROSOS PIÓCITOS LIVRES E AGLOMERADOS"
    ],
    `botao-obs${i}`,
    false
  );
}
// ==========================
// ENVIOS PELO WHATSAPP
// ==========================
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // PEGAR VALORES
  const n = document.getElementById("n").value;
  const volume = document.getElementById("volume").value;
  const cor = document.getElementById("cor").value;
  const aspecto = document.getElementById("aspecto").value;
  const uro = document.getElementById("uro").value;
  const glicose = document.getElementById("glicose").value;
  const cetona = document.getElementById("cetona").value;
  const bilirrubina = document.getElementById("bilirrubina").value;
  const proteina = document.getElementById("proteina").value;
  const nitrito = document.getElementById("nitrito").value;
  const ph = document.getElementById("ph").value;
  const hemoglobina = document.getElementById("hemoglobina").value;
  const densidade = document.getElementById("densidade").value;
  const leucocitos = document.getElementById("leucocitos").value;
  const hemacias = document.getElementById("hemacias").value;
  const cilindros = document.getElementById("cilindros").value;
  const epiteliais = document.getElementById("epiteliais").value;
  const piocitos = document.getElementById("piocitos").value;
  const flora = document.getElementById("flora").value;
  const cristais = document.getElementById("cristais").value;
  const granulacoes = document.getElementById("granulacoes").value;
  // OBSERVAÇÕES DINÂMICAS
let observacoes = "";
for (let i = 1; i <= 10; i++) {
  const valor =
    document.getElementById(`obs${i}`)
    .value
    .trim();
  if (valor !== "") {
    observacoes +=
`\n*${i}-Obs.:* ${valor}`;
  }
}
  // MENSAGEM FORMATADA
  const mensagem =
`*RESULTADOS DE URINA*

==============
*Paciente Nº:* ${n}
==============

*Volume:*............... ${volume} ml
*Cor:*.................. ${cor}
*Aspecto:*.............. ${aspecto}
==============
*Urobilinogênio:*....... ${uro}
*Glicose:*.............. ${glicose}
*C. Cetônicos:*......... ${cetona}
*Bilirrubina:*.......... ${bilirrubina}
*Proteína:*............. ${proteina}
*Nitrito:*.............. ${nitrito}
*pH:*................... ${ph}
*Sangue/Hemoglobina:*... ${hemoglobina}
*Densidade:*............ ${densidade}
*Leucócitos:*........... ${leucocitos}
==============
*Hemácias:*............. ${hemacias}
*Cilindros:*............ ${cilindros}
*Células Epiteliais:*... ${epiteliais}
*Piócitos:*............. ${piocitos}
*Flora Bacteriana:*..... ${flora}
*Cristais:*............. ${cristais}
*Granulações:*.......... ${granulacoes}
==============
${observacoes}`;

  // CODIFICA TEXTO
  const texto =
    encodeURIComponent(mensagem);
  // NÚMERO
  const numero =
    "5597981275064";
  // VERIFICA DISPOSITIVO
  const mobile =
    /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );
  // ABRE WHATSAPP
  if (mobile) {
    window.location.href =
      `whatsapp://send?phone=${numero}&text=${texto}`;
  } else {
    window.open(
      `https://wa.me/${numero}?text=${texto}`,
      "_blank"
    );
  }
  // LIMPA CAMPOS
  form.reset();
  verificarFormulario();
});
const botao = document.querySelector(".btn");
function verificarFormulario(){
  if(form.checkValidity()){
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}
form.addEventListener("input", verificarFormulario);
verificarFormulario();
const areaScroll = document.querySelector(".form");
const setaCima = document.getElementById("seta-cima");
const setaBaixo = document.getElementById("seta-baixo");
let intervalo;
function iniciarScroll(direcao) {
  intervalo = setInterval(() => {
    areaScroll.scrollBy({
      top: direcao,
      behavior: "auto"
    });
  }, 15);
}
function pararScroll() {
  clearInterval(intervalo);
}
// ↑↑↑ PC + MOBILE compatível
setaCima.addEventListener("pointerdown", () => iniciarScroll(-25));
setaBaixo.addEventListener("pointerdown", () => iniciarScroll(25));
document.addEventListener("pointerup", pararScroll);
document.addEventListener("pointercancel", pararScroll);
document.getElementById("ano").textContent =
  new Date().getFullYear();
  