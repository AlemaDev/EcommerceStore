import React from 'react'

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:flex-col md:p-6 ">
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-700  sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:text-gray-900 md:mr-6 ">Trabaja con nosotros</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:text-gray-900 md:mr-6">Términos y condiciones</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:text-gray-900 md:mr-6">Cómo cuidamos tu privacidad</a>
        </li>
        <li>
            <a href="#" class="hover:text-gray-900">Ayuda</a>
        </li>
    </ul>
    <span class="text-sm text-gray-500 sm:text-center ">Copyright © 1997-2022 <a href="https://github.com/AlemaDev" class="hover:underline">AlemaDev</a>. Derechos reservados.
    </span>
</footer>
  )
}

export default Footer;