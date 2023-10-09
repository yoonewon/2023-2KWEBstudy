const factorial = number =>{
    let result=1;
    for(let i=1;i<=number;i++){
        result*=i;
    }
    return result;
}


const permutation =(n,r)=>{
    return factorial(n)/factorial(n-r);
}

const combination = (n,r)=>{
    return permutation(n,r)/factorial(r);
}

const multiPermutation =(n,r)=>{
    let result=1;
    for(let i=0;i<r;i++){
        result*=n;
    }
    return result;
}

const mutiCombination =(n,r)=>{
    return combination(n+r-1,r);
}

module.exports ={
    permutation,
    combination,
    multiPermutation,
    mutiCombination,
};
