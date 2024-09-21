// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData_ = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del sol iluminaba la esquina", time: 31 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 39 },
  { text: "Ella sabía que él sabía", time: 46 },
  { text: "Que algún día pasaría, que vendría a buscarla", time: 47 },
  { text: "Con sus flores amarillas", time: 50 },
  { text: "No te apures, no detengas el instante del encuentro", time: 59 },
  {
    text: "Está dicho que es un hecho, no la pierdas, no hay derecho",
    time: 62,
  },
  { text: "No te olvides que la vida casi nunca está dormida", time: 66 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 94 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 102 },
  { text: "Él se acercó de repente la miro tan de frente", time: 110 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 118 },
  { text: "Ella sabía que él sabía", time: 124 },
  { text: "Que algún día pasaría que vendría a buscarla", time: 127 },
  { text: "Con sus flores amarillas", time: 131 },
  { text: "No te apures, no detengas el instante del encuentro", time: 138 },
  {
    text: "Está dicho que es un hecho, no la pierdas, no hay derecho",
    time: 141,
  },
  { text: "No te olvides que la vida casi nunca está dormida", time: 145 },
  { text: "Flores amarillas", time: 161 },
  { text: "Ella sabía que él sabía", time: 170 },
  { text: "Que algún día pasaría que vendría a buscarla", time: 173 },
  { text: "Con sus flores amarillas", time: 176 },
  { text: "No te apures, no detengas el instante del encuentro", time: 182 },
  {
    text: "Está dicho que es un hecho, no la pierdas, no hay derecho",
    time: 186,
  },
  { text: "No te olvides que la vida casi nunca está dormida", time: 190 },
  { text: "Ella sabía que él sabía", time: 199 },
  { text: "Él sabía, ella sabía, que él sabía, ella sabía", time: 202 },
  { text: "Y se olvidaron de sus flores amarillas", time: 206 },
];

var lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
