const add = (a, b) => {
    return a + b;
}

const generateGreeting = (name) => {
    return `Hello ${name}`
}

test("should add two numbers", () => {
    const result = add(3,4);
    expect(result).toBe(7)
});

test("Should be Damian", () => {
    const result = generateGreeting("Damian");
    expect(result).toBe("Hello Damian");
})