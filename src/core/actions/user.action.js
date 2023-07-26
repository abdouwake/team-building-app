import {login,signin} from '../services/user.service'
import * as Swal from "sweetalert2";



export function loginRequest(email,password,navigateFunction){
    return function (dispatch){
        return login(email,password).then(res=>{
            if(res!=undefined){
                sessionStorage.setItem("user",JSON.stringify(res.data.data))
                navigateFunction()
                //JSON.parse(x)
            }
        })
    }
}


export function signinRequest(firstName, lastName, unity, email, password, picture, funFact,redirect){
    return function (dispatch){
        return signin(firstName, lastName, unity, email, password, picture, funFact).then(res=>{
            if(res!=undefined){
                if(res.data.status===201){
                    Swal.fire({
                        icon:'success',
                        title:"Your account has been created !",
                        text: "",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            sessionStorage.setItem("user",JSON.stringify(res.data.data))
                            redirect()
                        }
                        })
                }
                //JSON.parse(x)
            }
        })
    }
}