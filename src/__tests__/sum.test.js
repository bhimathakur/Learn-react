import Sum from "../sum"


test("should return sum of two positive numbers", () => {
    expect(Sum(2,3)).toBe(5);
})