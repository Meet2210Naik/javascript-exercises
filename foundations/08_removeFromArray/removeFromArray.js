const removeFromArray = function(myArray,num1,num2,num3,num4) {

    let size = myArray.length;
    for(let i = size - 1; i >=  0 ; i--)
        {
            
            if(myArray[i] === num1 || myArray[i] === num2 || myArray[i] === num3 || myArray[i] === num4)
                {
                    myArray.splice(i,1);
                }
        }
        
        return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
