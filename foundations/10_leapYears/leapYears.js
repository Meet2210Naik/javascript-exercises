const leapYears = function(year) {

    if(year >= 1000)
    {
        year = year % 100;
        console.log(year);
        if(year % 4 === 0)
            {
                return true;
            }
            else 
                {
                    return false;
                }
    }

            
};

// Do not edit below this line
module.exports = leapYears;
