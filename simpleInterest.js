console.log('--:: Simple interest:--');

function simpleInterest(principal, interestRate, time){
        const interest = principal * interestRate * time;
        return interest;
}

const p = 12000;
const i = 0.07;
const t = 3;
const totalInterest = simpleInterest(p,i,t);
console.log(totalInterest);