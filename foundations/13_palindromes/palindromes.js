const palindromes = function (string) 
{
    const cleanstring = string.toLowerCase().replace(/[^a-z0-9]/g,'');
    let left = 0;
    let right = cleanstring.length - 1;

    
    while(left < right){
        if(cleanstring[left] !== cleanstring[right])
            {
                return false;
            }
            left++;
            right--;
    }
    return true;
    
    
};

// Do not edit below this line
module.exports = palindromes;
