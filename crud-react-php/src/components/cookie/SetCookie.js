import Cookies from 'js-cookie'
export default function SetCookie(key, value) {
   
    Cookies.set(key, value,{
        expires:1,
        secure:true,
        SameSite:"Strict",
        path:'/'
    })
}


