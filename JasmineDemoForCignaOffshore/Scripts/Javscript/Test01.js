/*         
* This is the JavaScript file that need to be tested through jasmine   
* Below is the helloworld function that will return 'Hello World' 
*            
*/

var helloworld = function () {
    return 'Hello World';
};

var nested = {

    currentVal: 0,

    add: function (num1) {
        this.currentVal += num1;
        return this.currentVal;
    },

    addAny: function () {
        var sum = this.currentVal;

        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }

        this.currentVal = sum;
        return this.currentVal;
    }
};

function exampleoftrueFalse(num) {
    if (num < 10)
        return true;
    else
        return false;
}