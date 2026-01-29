

const repeatString = function(string,numOfTimes) {
    
    let word ='';
    if(numOfTimes >= 0){
        for(let i = 0; i < numOfTimes ; i++)
            {
              word += string;
            }
            return word;
    }
    else{
       return string = "ERROR";
    }

};



// Do not edit below this line
module.exports = repeatString;
