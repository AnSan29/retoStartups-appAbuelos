export default function profileVoluntarioScript() {
  console.log("enlazado a perfil de voluntario");

  const voluntarioData = JSON.parse(localStorage.getItem("auth_token"));

  if (!voluntarioData) {
    console.warn("No se encontró información del voluntario en localStorage.");
    return;
  }

  console.log("Datos cargados:", voluntarioData);

  // Insertar los datos en el DOM
  document.querySelector(".voluntario-nombre").textContent =
    voluntarioData.name || "Nombre no disponible";
  document.querySelector(".voluntario-username").textContent =
    voluntarioData.user || "N/A";
  document.querySelector(".voluntario-cedula").textContent =
    voluntarioData.cc || "N/A";
  document.querySelector(".voluntario-telefono").textContent =
    voluntarioData.tel || "N/A";
  document.querySelector(".voluntario-rol").textContent =
    voluntarioData.rol || "N/A";
}
