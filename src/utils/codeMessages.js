const codeMessages = {
    ok: (action, collection) => ({
        code: 200,
        message: `la operacion ${action} en ${collection} fue exitosa`
    }),
    newResource: (data, collection) => ({
        code: 201,
        message: `el recurso ${data} fue agregado a ${collection}`
    }),
    notAllowed: (collection) => ({
        code: 403,
        message: `no posee permisos para acceder a ${collection}`,
    }),
    notFound: (data, collection) => ({
        code: 404,
        message: `no se encontro ${data} en ${collection}`,
    }),
    notSupported: (method, collection) => ({
        code: 405,
        message: `el metodo ${method} no es soportado en ${collection}`,
    }),
    internalError: (err) => ({
        code: 500,
        message: `ha ocurrido un error: ${err.message}`,
    }),
}
export default codeMessages;