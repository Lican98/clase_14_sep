let age = Number (window.prompt('¿cual es tu edad?'))
let height = Number (window.prompt("¿cual es tu altra?"))
let allowed = Boolean(window.prompt("¿tienes permiso de tus padres?"))

if (age >= 18) {
    document.write("permitido")
} else {
    if (age >= 16 && age < 18 && height >= 1.70) {
        document.write("permitido")
    }else {
        if (age == 15 && allowed == true) {
            document.write("permitido")
        } else {
            document.write("permiso denegado")
        }

    }
}