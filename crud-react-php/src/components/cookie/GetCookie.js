import Cookies from 'js-cookie'

export default function GetCookie(key) {
   
   return Cookies.get(key);
}
