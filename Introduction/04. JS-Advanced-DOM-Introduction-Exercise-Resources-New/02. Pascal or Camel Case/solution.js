function solve() {
  let textToConvert = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let resultValue = document.getElementById('result');

  switch(convention){
    case 'Camel Case':
      
    resultValue.textContent = textToConvert.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');

      break;
    case 'Pascal Case':

    resultValue.textContent = textToConvert.replace(/\w+/g,
    function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

      break;
    default:
      resultValue.textContent = "Error!";
  }

  console.log(resultValue.textContent);
}