

function logica () {
    var numeros = ["Alexander", "Luz", "Emanuel", "Viviana"]


     /*   console.log (numeros[0] + "-"+ numeros[3]+"-" + numeros[2] + "-"+ numeros[1]) */
//ciclos

    for (let i =0; i <numeros.length;i++) {
  
        console.log(numeros[i])
  
  /*  const element = array[index];*/
    }

 /*   for (let i =2; i <10;i=1+2) {
  
        console.log(i)
*/

}



function arrobj() {

    let AlumnosMatriculados = [
                                {
                                    "rut" : "1-9",
                                    "nombre" : "Pedro",
                                    "apellido" : "Pérez",
                                    "cod_curso" : "AE600",
                                    "descripcion" : "Algoritmos y Estructura de datos"

                                },
                                {
                                    "rut" : "2-7",
                                    "nombre" : "Juan",
                                    "apellido" : "Jara",
                                    "cod_curso" : "BD253",
                                    "descripcion" : "Bases de Datos"
                                },
                                {
                                    "rut" : "2-7",
                                    "nombre" : "Juan",
                                    "apellido" : "Jara",
                                    "cod_curso" : "AE600",
                                    "descripcion" : "Algoritmos y Estructura de datos"
                                },
                                {
                                    "rut" : "3-5",
                                    "nombre" : "Diego",
                                    "apellido" : "Díaz",
                                    "cod_curso" : "BD253",
                                    "descripcion" : "Bases de Datos"
                                },
                                {
                                    "rut" : "4-4",
                                    "nombre" : "María",
                                    "apellido" : "Martínez",
                                    "cod_curso" : "BD253",
                                    "descripcion" : "Bases de Datos"
                                }
                              ]
    
    let Alumno = [
                    {
                        "rut" : "1-9",
                        "nombre" : "Pedro",
                        "apellido" : "Pérez"
                    },
                    {
                        "rut" : "2-7",
                        "nombre" : "Juan",
                        "apellido" : "Jara"
                    },
                    {
                        "rut" : "3-5",
                        "nombre" : "Diego",
                        "apellido" : "Díaz"
                    },
                    {
                        "rut" : "4-4",
                        "nombre" : "María",
                        "apellido" : "Martínez"
                    }
                 ]

    let Cursos = [
                    {
                        "cod_curso" : "AE600",
                        "descripcion" : "Algoritmos y Estructura de datos"
                    },
                    {
                        "cod_curso" : "BD253",
                        "descripcion" : "Bases de Datos"
                    }
                ]

    let Matricula =[
                        {
                            "rut" : "1-9",
                            "cod_curso" : "AE600"
                        },
                        {
                            "rut" : "2-7",
                            "cod_curso" : "BD253"
                        },
                        {
                            "rut" : "2-7",
                            "cod_curso" : "AE600"
                        },
                        {
                            "rut" : "3-5",
                            "cod_curso" : "BD253"
                        },
                        {
                            "rut" : "4-4",
                            "cod_curso" : "BD253"
                        }
                    ]

/*
    for (let i = 0; i < Cursos.length; i++) {
    console.log(Cursos[i].cod_curso)
*/
    for (let i = 0; i < AlumnosMatriculados.length; i++) {
    console.log(AlumnosMatriculados[i].apellido)
    
}

console.log (Cursos)    
console.log (Alumno) 
console.log (Matricula) 
console.log (AlumnosMatriculados) 

}