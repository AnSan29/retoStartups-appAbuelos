// importaciones
import { hashPassword, validateCredCreate } from "../js/auth.js";

export default function setupRegister() {
  // Seleccionamos el formulario por su ID correcto
  const $form = document.getElementById("register-abuelo-form");
  const URL_API = "http://localhost:3000/users";

  // Verificamos si el formulario existe antes de adjuntar el event listener
  if (!$form) return;

  // Escuchamos el evento 'submit' del formulario
  $form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    // Obtenemos los valores del formulario usando los IDs correctos
    const username = document.getElementById("username").value.trim();
    const name = document.getElementById("name").value.trim();
    const cedula = document.getElementById("cedula").value.trim(); // Nuevo: obtener cédula
    const telefono = document.getElementById("telefono").value.trim(); // ID corregido
    const pass = document.getElementById("password").value.trim();
    const rol = "abuelo"; // Establecemos el rol fijo como "abuelo"

    // Validamos las credenciales (asegúrate de que validateCredCreate maneje 'cedula' y el rol fijo si es necesario)
    // Nota: Si validateCredCreate no espera 'cedula' o 'rol', deberías ajustarla.
    const isValid = validateCredCreate(username, name, telefono, rol, pass);
    if (!isValid) return;

    // Encriptamos la contraseña
    const passHashed = hashPassword(pass);

    // Obtener usuarios actuales para verificar si el usuario ya existe
    const getAllUsers = async () => {
      try {
        const res = await fetch(URL_API);
        const users = await res.json();

        if (!res.ok) {
          throw {
            status: res.status,
            statusText: res.statusText,
          };
        }
        return users;
      } catch (error) {
        const message =
          error.statusText || "Ocurrió un error al obtener usuarios";
        alert(message);
        return null;
      }
    };

    const users = await getAllUsers();
    if (!users) return;

    // Verificar si el nombre de usuario ya existe
    const userExists = users.some(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (userExists) {
      alert("El nombre de usuario ya está en uso. Por favor, elige otro.");
      return;
    }

    // Si todo está bien, procedemos a crear el nuevo usuario
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          username,
          password: passHashed,
          nombre: name,
          cedula, // Incluimos la cédula en el cuerpo de la solicitud
          rol,
          telefono,
        }),
      };

      const res = await fetch(URL_API, options);
      const data = await res.json();

      if (!res.ok) {
        throw {
          status: res.status,
          statusText: res.statusText,
        };
      }

      alert("¡Usuario abuelito creado exitosamente!");
      // Opcional: podrías redirigir al usuario al login o a una página de éxito
      window.location.href = "/login"; // Redirigir al login
      // window.location.reload(); // Si prefieres recargar la página actual
    } catch (error) {
      const message = error.statusText || "Error al crear usuario";
      $form.insertAdjacentHTML(
        "afterend",
        `<p style="color: red;">Error ${error.status || ""} - ${message}</p>`
      );
    }
  });
}
