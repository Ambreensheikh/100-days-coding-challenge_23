let countryCapital :Map<string, string>= new Map(); 
countryCapital.set(`Pakistan`,`Islamabad`),
countryCapital.set(`Iran` ,`Tehran`),
countryCapital.set(`Afghanistan` , `Kabul`)
for(let key of countryCapital.keys()){
    console.log(key);
}