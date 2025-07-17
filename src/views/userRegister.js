// vista de registro de usuario
export default function UserRegister() {
    return `
      <div class="form-container">
  <form id="register-abuelo-form">
    <h2>Registro de Abuelitos</h2>

    <input type="text" id="username" placeholder="Nombre de usuario" required />
    <input type="text" id="name" placeholder="Nombre completo" required />
    <input type="text" id="cedula" placeholder="Número de cédula" required />
    <input type="tel" id="telefono" placeholder="Número de teléfono" required />
    <input type="password" id="password" placeholder="Crea una contraseña" required />

    <button type="submit">Registrarme</button>
    <a href="/login" data-link class="volver-link">Volver</a>
  </form>
</div>
    `;
  }