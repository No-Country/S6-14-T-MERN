import React from 'react'
import "Footer.css"

const Footer = () => {
  return (
    <div>
        <div class="footer-container">
        <div class="footer-col">
          <h3>Deja tu correo para recibir novedades y descuentos</h3>
          <div>
            <form action="">
              <input type="email" name="" id="" placeholder="email" />
            </form>
            <div class="icon">
              <i class="fa-brands fa-facebook-f icon"></i>
              <i class="fa-brands fa-twitter icon"></i>
              <i class="fa-brands fa-instagram icon"></i>
              <i class="fa-brands fa-youtube icon"></i>
            </div>
          </div>
        </div>

        <div class="footer-col">
          <h3>Categorias</h3>
          <ul>
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Diseñador</li>
            <li>Mayorista</li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Información</h3>
          <ul>
            <li>Contacto</li>
            <li>Preguntas frecuentes</li>
            <li>Sobre nosotros</li>
            <li>Politica de Devolución</li>
            <li>Politica de Privacidad</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer