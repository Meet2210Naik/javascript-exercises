const findTheOldest = function(people) {
    let today  = new Date();
    let maxAge = (people[0].yearOfDeath ?? today.getFullYear()) - people[0].yearOfBirth ;
    let age = 0;
    let eldest = people[0];

    for(let i = 1 ; i <  people.length ;i++)
        {
            age = (people[i].yearOfDeath ?? today.getFullYear()) - people[i].yearOfBirth;

            if(maxAge < age){
                maxAge = age;
                eldest = people[i];     
            }
            
        }

        return eldest;
        
};

// Do not edit below this line
module.exports = findTheOldest;
