
var expect = (val) => {
    return {
        toBe: (otherVal) => {
            if (val===otherVal)
                return true;
            else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (otherVal) => {
            if (val!==otherVal)
                return true;
            else {
                throw new Error("Equal");
            }
        },
    
    };
    
};

try {
    const result1 = expect(5).toBe(5);
    console.log(result1);
} catch (e) {
    console.error(e.message);
}

try {
    const result2 = expect(5).toBe(null);
    console.log(result2);
} catch (e) {
    console.error(e.message);
}

try {
    const result3 = expect(5).notToBe(null);
    console.log(result3);
} catch (e) {
    console.error(e.message);
}


/*Optimizing the use of try and catch method */

const test = [
    {func: () => expect(5).toBe(5), description:"Test 1: expect(5).toBe(5)"},
    {func: () => expect(5).toBe(null), description:"Test 2: expect(5).toBe(null)"},
    {func: () => expect(5).notToBe(null), description:"Test 3: expect(5).notToBe(null)"},
];

test.forEach((test) => {
    try {
        const result = test.func();
        console.log(test.description + ":" + result);
    }
    catch(e) {
        console.error(test.description + ":" + e.message);
    }
});
