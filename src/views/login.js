// vista de login
export default function Login() {
    return `
      <section class="login-view">
  <div class="login-container">
    <h2 class="login-title">Iniciar sesión</h2>
    
    <input type="text" id="username" class="login-input" placeholder="Usuario" />
    
    <input type="password" id="password" class="login-input" placeholder="Contraseña" />
    
    <button id="loginBtn" class="login-button">Entrar</button>

    <p class="login-register-text">
      ¿No tienes cuenta? 
      <a href="/register" class="login-register-link" data-link>Regístrate aquí</a>
    </p>
  </div>
</section>
    `;
  }