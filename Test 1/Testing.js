// function cityParts(input) {
//     let towns = {};
    
//     for (const info of input) {
//         let infoArray = info.split(' <-> ');
//         let town = infoArray[0];
//         let population = Number(infoArray[1]);

//         if(!towns[town]) {
//             towns[town] = 0;
//         }

//         towns[town] += population;
//     }

//     for (const town in towns) {
//             console.log(`${town} : ${towns[town]}`)
//         }
//     }

function cityTaxes(name,population,treasury){
    let record = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            percentage /= 100;
            this.population *= percentage+1;
        },
        applyRecession(percentage) {
            percentage /= 100;
            this.treasury *= 1 - percentage;
        }
    };
    return record;
}



const city = cityTaxes('Tortuga',7000,15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


// cityParts(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// );