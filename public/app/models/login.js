export const login = {
    username: {
        type: "text",
        required: true,
    },
    password: {
        type: "password",
        required: true,
    }
}
export const signin = {
    username: {
        type: "text",
        required: true,
    },
    fullname: {
        type: "text",
        required: true,
    },
    email: {
        type: "text",
        required: true,
    },
    password: [
        {
            type: 'password',
            required: true,
        },
        {
            type: 'password',
            required: true,
        },
    ]
}