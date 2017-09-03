/*
* This is the file which will call our java script file that need to be tested. 
* Each describe block is equivalent to one test case    
*/
describe("Hello World", function () {

    it("should Return Hello world", function () {
        expect(helloworld()).toEqual('Hello World');
    });

});

// More examples on describe block
describe("Adding single number ",function (){ 
   
    it("should add numbers",function(){ 
        expect(nested.add(5)).toEqual(5); 
        expect(nested.add(5)).toEqual(10); 
    });     
});

// More examples on IT block
describe("Adding single number ", function () {

    // test case : 1   
    it("should add numbers", function () {
        expect(nested.add(5)).toEqual(5);
        expect(nested.add(5)).toEqual(10);
    });

    //test case : 2 
    it("should add numbers", function () {
        expect(nested.addAny(1, 2, 3)).toEqual(6);
    });
});

// Suite Block
describe("calculator", function () {

    //test case: 1  
    it("Should retain the current value of all time", function () {
        expect(Calculator.currentVal).toBeDefined();
        expect(Calculator.currentVal).toEqual(0);
    });

    //test case: 2  
    it("should add numbers", function () {
        expect(Calculator.add(5)).toEqual(5);
        expect(Calculator.add(5)).toEqual(10);
    });

    //test case :3   
    it("Should add any number of numbers", function () {
        expect(Calculator.addAny(1, 2, 3)).toEqual(6);
    });

});


// Nested Suites Block
describe("nested", function () {

    // Starting of first suite block  
    // First block    

    describe("Retaining values ", function () {

        //test case:1    
        it("Should retain the current value of all time", function () {
            expect(nested.currentVal).toBeDefined();
            expect(nested.currentVal).toEqual(0);
        });
    }); //end of the suite block   

    //second suite block 
    describe("Adding single number ", function () {

        //test case:2 
        it("should add numbers", function () {
            expect(nested.add(5)).toEqual(5);
            expect(nested.add(5)).toEqual(10);
        });
    }); //end of the suite block  

    //third suite block 
    describe("Adding Different Numbers", function () {

        //test case:3 
        it("Should add any number of numbers", function () {
            expect(nested.addAny(1, 2, 3)).toEqual(6);
        });
    }); //end of the suite block 
});


//Matchers

//Inbuilt Matcher

//toEqual()
//toBe()

//Custom Matcher
//validateAge()
describe('custom matchers demo', function() {
    beforeEach(function() {
        jasmine.addMatchers({
            toBeValidAge: function() {
                return {
                    compare: function(actual, expected) {  
                        var result = {};
                        result.pass = (actual >=18 && actual <=35);
                        result.message = actual + ' is not valid age for this job';   
                        return result;
                    }
                };
            }
        });
    });
    
    // First test
    it('age should be valid for this job', function() {
        var myAge = 23;
        expect(myAge).toBeValidAge();   
        // return true if test will pass
    });
 
    // Second test
    it('age should be valid for this job', function() {
        var yourAge = 15;
        expect(yourAge).toBeValidAge(); 
        // return false if test will fail
    });
});


//Skipping Spec
describe("This suite will demonstrate", function () {
    xit("spec being skipped", function () {
        var s = 10;
        expec(s).toBe(10);
    });
    it("spec being skipped", function () {
        var s = 10;
        expec(s).toBe(10);
        pending('this is why it is pending');
    });
});

//Skipping Suite
xdescribe("This Suite will be skipped", function () {
    it("a spec", function () {
        var s = 10;
        expec(s).toBe(10);
    });
});

//Equality Check
describe("Different Methods of Expect Block", function () {
    var currentVal = 0;

    it("The Example of toEqual() method", function () {
        expect(currentVal).toEqual(0);
    });
 
    it("The Example of not.toEqual() method", function () {
        expect(currentVal).not.toEqual(5); 
    });

    var name = "cigna";
    var name1 = cigna;

    it("The Example of toBe() method", function () {
        expect(name).toBe(name1);
    });

    it("The Example of not.toBe() method", function () {
        expect(true).not.toBe(false);
    });
});

//Boolean Check
describe("Different Methods of Expect Block", function () {

    it("The Example of toBeTruthy() method", function () {
        expect(exampleoftrueFalse(5)).toBeTruthy();
    });

    it("The Example of toBeTruthy() method", function () {
        expect(exampleoftrueFalse(15)).toBeFalsy();
    });
});

//Sequential Check
describe("Different Methods of Expect Block", function () {

    it("The  Example of toContain() method", function () {
        expect([1, 2, 3, 4]).toContain(3);
    });

    it("Example of toBeCloseTo()", function () {
        expect(12.34).toBeCloseTo(12.3, 1);
    });

    it("Example of toBeCloseTo() for fail condition", function () {
        expect(12.34).toBeCloseTo(15, 1);
    });

    it("Example of toMatch()", function () {
        expect("Jasmine in JasmineSpec.com").toMatch(/com/);
    });

    it("Example of toMatch() for fail condition", function () {
        expect("Jasmine in JasmineSpec.com").toMatch(/XYZ/);
    });

});

//Null check

currentVal = 0;

describe("Different Methods  of Expect Block", function () {

    it("Example of  toBeDefined", function () {
        expect(currentVal).toBeDefined();
    });

    it("Example of toBeUndefine()", function () {
        var undefineValue;
        expect(undefineValue).toBeUndefined();
    });

    it("Example oftoBeUndefine() for fail condition", function () {
        var undefineValue = 0;
        expect(undefineValue).toBeUndefined();
    });

    var value = null;

    it("Example of toBeNull()", function () {
        expect(value).toBeNull();
    });
});

//Inequality Check
describe("Different Methodsof Expect Block", function () {
    var exp = 8;

    it("Example of  toBeGreaterThan()", function () {
        expect(exp).toBeGreaterThan(5);
    });

    var exp = 4;

    it("Example of toBeLessThan()", function () {
        expect(exp).toBeLessThan(5);
    });
});

//Not a Number Check

describe("Different Methods of Expect Block", function () {

    it("Example of toBeNaN()", function () {
        expect(0 / 0).toBeNaN();
    });
});

//Exception Check

describe("Different Methods of Expect Block", function () {
    var foo = function () {
        return 1 + 2;
    };
    var bar = function () {
        return a + 1;
    };
    var baz = function () {
        throw 'what';
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
    expect(baz).toThrow('what');

    var foo = function () {
        throw new TypeError("foo bar baz");
    };

    expect(foo).toThrowError("foo bar baz");
});

//jasmine.any()
describe("jasmine.any", function () {
    it("matches any value", function () {
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
    });
});

//beforeEach and afterEach
describe("A spec using beforeEach and afterEach", function () {
    var value = 0;

    beforeEach(function () {
        value += 1;
    });

    afterEach(function () {
        value = 0;
    });

    it("is just a function, so it can contain any code", function () {
        expect(value).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(value).toEqual(1);
        expect(true).toEqual(true);
    });
});

//beforeAll and afterAll
describe("A spec using beforeAll and afterAll", function () {
    var value;

    beforeAll(function () {
        value = 1;
    });

    afterAll(function () {
        value = 0;
    });

    it("sets the initial value of foo before specs run", function () {
        expect(value).toEqual(1);
        value += 1;
    });

    it("does not reset foo between specs", function () {
        expect(value).toEqual(2);
    });
});

//Spies - spyOn()
