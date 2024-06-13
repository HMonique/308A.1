//base case is how you tell the function to stop
//trampoline is a base case with a recursive function 

counter = 0;
function recursiveFunction(){
    counter ++;
    if (counter === 1500){


        console.log(counter);
    }
    recursiveFunction()
};

try {
    recursiveFunction
} catch (error) {
    console.log(error)
};

// let testArray = [1,2,3,4 [[5,6,7,8], [9,10]]]

// function flattenArray (array){
//     if (Array.isArray(array[i])){
//         result = result.concat(flattenArray(array[i]))
//     } else{
//         result.push(array[i])
//     }
// } return result

// console.log(flattenArray(testArray));


