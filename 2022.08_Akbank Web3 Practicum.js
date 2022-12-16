
var number =prompt('Odd or Even ?');
oddishOrEvenish=(sayi)=>{
    const ayrilmis = sayi.toString().split(''); 
    for (var i=0, sum=0;i<ayrilmis.length; sum += parseInt(ayrilmis[i++]));
    if (sum % 2 == 0){
        return 'Even';
    }return 'Odd'
};
console.log(oddishOrEvenish(number));
