export const userService = {
    getUser
}

function getUser() {
    return Promise.resolve({
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    })
}