export default function profileAbueloScript() {
  console.log("enlazado a perfil de abuelos");

  const abueloData = JSON.parse(localStorage.getItem("auth_token"));

  if (!abueloData) {
    console.warn("No se encontró información del abuelo en localStorage.");
    return;
  }

  // DEBUG opcional
  console.log("Datos cargados:", abueloData);

  // Insertar los datos en el DOM
  document.querySelector(".abuelo-nombre").textContent =
    abueloData.name || "Nombre no disponible";
  document.querySelector(".abuelo-username").textContent =
    abueloData.user || "N/A";
  document.querySelector(".abuelo-cedula").textContent = abueloData.cc || "N/A"; // si `id` es la cédula
  document.querySelector(".abuelo-telefono").textContent = abueloData.tel; // No hay teléfono en el objeto actual
  document.querySelector(".abuelo-rol").textContent = abueloData.rol || "N/A";
}
