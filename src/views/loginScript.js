// Importamos funciones necesarias
import { hashPassword, login, validateCredentials } from "../js/auth.js";
import { router } from "../routes/router.js";

// Función principal para configurar el evento de login
export default function setupLogin() {
  // Obtenemos el botón de login por su ID
  const $btn = document.getElementById("loginBtn");
  if (!$btn) return; // Si no existe, no hacemos nada

  // Añadimos el evento al botón
  $btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Obtenemos valores del formulario
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    // Validación básica de campos vacíos
    if (!user || !pass) {
      alert("Por favor, ingresa todos los campos.");
      return;
    }

    // Encriptamos la contraseña ingresada
    const passHashed = hashPassword(pass);

    // Función para obtener todos los usuarios de la API
    const getAllUsers = async () => {
      const URL_API = "http://localhost:3000/users"; // URL de tu API
      try {
        const resConsulta = await fetch(URL_API); // Hacemos fetch a la API
        if (!resConsulta.ok) {
          // Si la respuesta no es exitosa, lanzamos error
          throw {
            status: resConsulta.status,
            statusText: resConsulta.statusText,
          };
        }
        const usersJson = await resConsulta.json(); // Convertimos respuesta en JSON
        return usersJson;
      } catch (error) {
        // Mostramos mensaje en caso de error de conexión
        const message =
          error.statusText || "Ocurrió un error al conectar con la API.";
        alert(message);
      }
    };

    // Función que gestiona el login completo
    async function startSession() {
      const users = await getAllUsers(); // Obtenemos lista de usuarios

      if (!users) return; // Si no se pudo obtener, salimos

      let userFound = null;

      // Buscamos si el username ingresado existe
      users.forEach((u) => {
        if (u.username.toLowerCase() === user.toLowerCase()) {
          userFound = u;
        }
      });

      if (!userFound) {
        alert("Usuario inválido, no registrado.");
        return;
      }

      // Validamos las credenciales: username y password
      const isValid = validateCredentials(user, pass, userFound);
      if (!isValid) return;

      // Dependiendo del rol, redirigimos a la vista correspondiente
      switch (userFound.rol) {
        case "admin":
          // Vista para el administrador
          history.pushState(null, null, "/");
          break;

        case "abuelo":
          // Vista para el abuelito
          history.pushState(null, null, "/abueloProfile");
          break;

        case "voluntario":
          // Solo si está aprobado por el admin puede continuar
          if (userFound.estado_validacion !== "aprobado") {
            alert("Tu cuenta aún no ha sido validada por un administrador.");
            return;
          }
          // Vista del voluntario
          history.pushState(null, null, "/voluntarioProfile");
          break;

        default:
          alert("Rol no autorizado o no reconocido.");
          return;
      }

      login(
        "tokenGenerico",
        userFound.username,
        userFound.rol,
        userFound.id,
        userFound.nombre,
        userFound.telefono,
        userFound.cedula
      );

      // Finalmente, actualizamos el router para que se renderice la nueva vista
      router();
    }

    // Ejecutamos la función de inicio de sesión
    startSession();
  });
}
