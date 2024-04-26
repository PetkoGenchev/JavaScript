function search() {
   let input = document.getElementById('searchText').value;
   let lielements = Array.from(document.querySelectorAll('#towns li'));
   let count = 0;

   for(let item of lielements) {
      if(item.textContent.includes(input)){
         count++;
         item.style.fontWeight = "bold";
         item.style.textDecoration = "underline";
      }
   }  

   let result = document.getElementById('result');
   result.textContent = `${count} matches found`;
}
