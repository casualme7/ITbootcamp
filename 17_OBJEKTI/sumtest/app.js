let num = {
    sum() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },
    multiply() {
        let sum = 1;
        for (let i = 0; i < arguments.length; i++) {
            sum *= arguments[i]
        }
        return sum;
    },
    oduzimanje() {
        for (let i = 1; i < arguments.length; i++) {
            arguments[0] -= arguments[i]
        }
        return arguments[0];
    }
}