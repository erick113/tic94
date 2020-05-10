const gretting = "Hola bienvenido";
const averageAge=21;
const tic94 = [ //! array
    {
        name: "Carla",
        age: 23,
        sex: "Femenino"
    },
    {
        name: "Diego",
        age: 20,
        sex: "Masculino"
    },
    {
        name: "Fernanda",
        age: 25,
        sex: "Femenino"
    }
];

const tic95 = [
    {
        name: "Wayne Haynes",
        age: 24
    },
    {
        name: "Emilie Joseph",
        age: 25
    },
    {
        name: "Glen Herrera",
        age: 20
    },
    {
        name: "Eunice Morton",
        age: 27
    },
    {
        name: "David Brooks",
        age: 19
    },
    {
        name: "Carolyn Hardy",
        age: 20
    },
    {
        name: "Douglas Bowman",
        age: 22
    },
    {
        name: "Flora Dixon",
        age: 29
    },
    {
        name: "Minnie Ryan",
        age: 28
    },
    {
        name: "Douglas Glover",
        age: 23
    },
    {
        name: "Theodore Paul",
        age: 19
    },
    {
        name: "Nell Holland",
        age: 26
    },
    {
        name: "Olive Harris",
        age: 26
    },
    {
        name: "Mark Hill",
        age: 22
    },
    {
        name: "Isabel Norton",
        age: 24
    },
    {
        name: "Daniel Ball",
        age: 24
    },
    {
        name: "Caroline Moore",
        age: 24
    },
    {
        name: "Hettie Rivera",
        age: 29
    },
    {
        name: "George Chapman",
        age: 27
    },
    {
        name: "Winnie Reynolds",
        age: 22
    },
    {
        name: "Jennie Campbell",
        age: 19
    },
    {
        name: "Lena Moreno",
        age: 25
    },
    {
        name: "Etta Morgan",
        age: 26
    },
    {
        name: "Dylan Carlson",
        age: 20
    },
    {
        name: "Ellen Butler",
        age: 25
    },
    {
        name: "Etta Lynch",
        age: 28
    },
    {
        name: "Lula Sims",
        age: 28
    },
    {
        name: "Annie Henry",
        age: 23
    },
    {
        name: "Elsie Frazier",
        age: 22
    },
    {
        name: "Augusta Armstrong",
        age: 26
    }
];

function showAlums(grupo){
    var ancianosNombres = [];
    var ancianosEdades = [];
    var jovenesNombres = [];
    var jovenesEdades = [];
    var mensajes = [];

    for (const alumn of grupo) {
        if (alumn.age > 20){
            ancianosNombres.push(`${alumn.name}, `);
            ancianosEdades.push(`${alumn.age}, `);
        }
        else{
            jovenesNombres.push(`${alumn.name}, `);
            jovenesEdades.push(`${alumn.age}, `);
        }
    }
    mensajes.push(<p>Los alumnos {ancianosNombres} de las edades de: {ancianosEdades} probablemente sean recursadores o entraron mas grande que la generacion normal 🌮🍻</p>);
    mensajes.push(<p>Y los alumnos {jovenesNombres} de la edad de : {jovenesEdades} va de acuerdo a su generacion 📚</p>);
    return mensajes;
}
const element=(
    <div>
        <h1>{gretting}</h1>
        <h3>La edad promedio de esta generacion en curso es de {averageAge}</h3>
        <br></br>
        <div>{showAlums(tic95)} </div>
    </div>
    );
const container = document.getElementById("root");
ReactDOM.render(element,container);
