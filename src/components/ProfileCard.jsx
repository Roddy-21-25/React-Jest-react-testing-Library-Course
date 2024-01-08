//? Al crear la funcion para los test es importante exportarla para poder usarla en
//? el archivo.test.js
export function titleCase(text) {
    if (text === '' ) return ''

    const arr = text.split(' ');
    const result = [];
    for (let elem of arr) {
        result.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase())
    }
    return result.join(' ')
}

function ProfileCard({ name, surname, age, description }) {
    return (
        <div>

        </div>
    )
}

export default ProfileCard