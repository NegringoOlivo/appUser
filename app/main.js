
const loadInitialTemplate = () => {
    const template = `
    <h1>Usuarios</h1>
    <form id="user-form">
        <div>
        <label>Nombre</label>
        <input name="name" />
        </div>
        <div>
        <label>Apellido</label>
        <input name="lastname" />
        </div>
        <button type="submi">Enviar</button>
    </form>
    <ul id="user-list"></ul>
    `
const body = document.getElementsByTagName("body")[0]
body.innerHTML = template

}
const getUsers = async () => { // pendiente 
    const response = await fetch("/users")
    const users = await response.json()
    console.log(users)

}

const asigList = () => {
    const lista = document.getElementById("user-list")
    lista.innerHTML = users
}

addFormListener = () => {
    const userForm = document.getElementById("user-form")
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        const data = Object.fromEntries(formData.entries())
        await fetch("/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
        })
        userForm.reset()
        getUsers();
    }
}

window.onload = () => {
    loadInitialTemplate();
    getUsers()
    addFormListener();
}