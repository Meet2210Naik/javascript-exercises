const sumAll = function(begin,end) {
    let sum = 0;
    if(begin >= 0  && end >= 0 && Number.isInteger(begin) && Number.isInteger(end)){
        if(begin < end){
             for(let i = begin ; i <= end ; i++ )
                {
                    sum += i;
                }
            return sum;
        }
        else if(begin > end) 
          {
              for(let i = end ; i <= begin ; i++ )
                  {
                      sum += i;
                  }
              return sum; 
          }
      } 
      else
        {
            return "ERROR";
        } 
};

// Do not edit below this line
module.exports = sumAll;
