import Cookies from 'js-cookie'
export default function RemoveCookie(key) {
   
   return Cookies.remove(key);
}
