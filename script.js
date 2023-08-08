const student = "Raiyan";
// student = "Rumaisa";
let friend = "Subah Sadaf";
friend = "Shuchy";
// console.log(friend);

function maxNumber(array = [20,60]){
        const max = Math.max(...array);
        return max;
}

const biggestNumber = maxNumber()
console.log(biggestNumber);