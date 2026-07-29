function multiplier(factor){
            console.log("FACTOR - " + factor);
            
            return function(number){
                console.log("number " + number);
                
                return factor * number;
            }
        }
        const multiplyByTwo = multiplier(2)
        console.log(multiplyByTwo(10))