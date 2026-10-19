export const submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target)
    return data
}
export const checkPassword = (password) => {
    const [p1, p2] = password.map(p => p.value.trim())
    if (p1 !== p2) throw Error(`las contraseñas no coinciden`);
    return p1
}