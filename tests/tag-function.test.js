function tagFunction(array, ...args) {
    console.info(array)
    console.info(args);
}

test("tag function", () => {
    const name = "Indra";
    const firstName = "Muhammad"

    tagFunction`Hello ${firstName}${name}, how are you?`;
    tagFunction`Bye ${firstName}${name}, see you later`;
})

test("tag function sql", () => {
    const name = "Indra"
    const age = 30

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
})