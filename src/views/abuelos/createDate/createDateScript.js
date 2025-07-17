import { router } from "../../../routes/router";

export default function createDateScript() {
  console.log("enlazado a crear citas - abuelos");

  const user = JSON.parse(localStorage.getItem("auth_token"));
  console.log("Usuario cargado del localStorage:", user);

  if (user) {
    const $nombre = document.getElementById("nombre");
    const $telefono = document.getElementById("telefono");
    const $cedula = document.getElementById("cedula");

    if ($nombre) $nombre.value = user.name || "";
    if ($telefono) $telefono.value = user.tel || "";
    if ($telefono) $cedula.value = user.cc || "";
  } else {
    console.warn("No se encontró información del usuario en localStorage.");
  }

  // Función para crear la cita
  const createDate = async () => {
    const $cedula = document.getElementById("cedula");
    const $nombre = document.getElementById("nombre");
    const $fecha = document.getElementById("fecha");
    const $hora = document.getElementById("hora");
    const $direccion = document.getElementById("direccion");
    const $motivo = document.getElementById("descripcion");

    const nuevaCita = {
      cedula: $cedula.value.trim(),
      nombreAbuelo: $nombre.value.trim(),
      fecha: $fecha.value,
      hora: $hora.value,
      direccion: $direccion.value.trim(),
      motivo: $motivo.value.trim(),
      estado: "pendiente",
    };

    try {
      const res = await fetch("http://localhost:3000/dates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaCita),
      });

      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

      const data = await res.json();
      alert("✅ Cita registrada con éxito");
      console.log("Cita creada:", data);
      router();
    } catch (error) {
      console.error("Error al registrar la cita:", error);
      alert("❌ Error al registrar la cita");
    }
  };

  // Escuchamos el evento del botón o del formulario
  const $form = document.querySelector("#form-create-date");
  if ($form) {
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      createDate();
    });
  } else {
    console.warn("No se encontró el formulario con id 'form-create-date'");
  }
}
