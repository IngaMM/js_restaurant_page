import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'

home()
document.getElementById("nav_home").addEventListener("click", home);
document.getElementById("nav_menu").addEventListener("click", menu);
document.getElementById("nav_contact").addEventListener("click", contact);
