const getToken = (req) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("Autorização inexistente!");
    }

    const token = authHeader.split(" ")[1];

    return token;
}

export default getToken