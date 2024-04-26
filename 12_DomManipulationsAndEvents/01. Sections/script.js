function create(words) {


   let resultElement = document.getElementById('content');
   
   let inputElements = words;


   for(const word of inputElements){
      let addDiv = document.createElement('div');
      let addParagraph = document.createElement('p');
         addParagraph.textContent = word;
         addDiv.appendChild(addParagraph);
         addParagraph.style.display = 'none';

         
         addDiv.addEventListener('click', (e) => {
             e.target.children[0].style.display = 'block';
   });
   resultElement.appendChild(addDiv);
   }
}