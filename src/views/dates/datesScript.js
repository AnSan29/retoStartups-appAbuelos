import { getCurrentUser } from "../../js/auth";

export default async function datesScript() {
  console.log("enlazado a vista de dates");

  const d = document;
  const $list = d.getElementById("dates-list");
  const voluntario = JSON.parse(localStorage.getItem("voluntario"));

  try {
    const res = await fetch("http://localhost:3000/dates");
    const data = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    let html = "";
    data.forEach((date) => {
      html += `
        <div class="date-card">
          <h2>${date.nombreAbuelo}</h2>
          <p><strong>Fecha:</strong> ${date.fecha}</p>
          <p><strong>Hora:</strong> ${date.hora}</p>
          <p><strong>Dirección:</strong> ${date.direccion}</p>
          <p><strong>Motivo:</strong> ${date.motivo}</p>
          <p><strong>Estado:</strong> <span class="estado ${date.estado}">${
        date.estado
      }</span></p>
          ${
            date.estado === "pendiente"
              ? `<button class="tomar-btn" data-id="${date.id}">Tomar cita</button>`
              : `<p><strong>Voluntario:</strong> ${
                  date.nombreVoluntario || "No asignado aún"
                }</p>`
          }
        </div>
      `;
    });

    $list.innerHTML = html;

    // Asignar evento a cada botón "Tomar cita"
    d.querySelectorAll(".tomar-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.dataset.id;

        // Obtener datos del voluntario logueado
        const voluntario = getCurrentUser();
        const nombreVoluntario = voluntario?.name || "Voluntario desconocido";
        const telefonoVoluntario = voluntario?.tel || "Sin número";

        try {
          const res = await fetch(`http://localhost:3000/dates/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              estado: "confirmado",
              nombreVoluntario,
              telefonoVoluntario,
            }),
          });

          if (!res.ok) throw { status: res.status, statusText: res.statusText };

          datesScript(); // recargar vista
        } catch (err) {
          alert("Error al confirmar solicitud.");
          console.error(err);
        }
      });
    });
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $list.innerHTML = `<p class="error">Error: ${message}</p>`;
  }
}
