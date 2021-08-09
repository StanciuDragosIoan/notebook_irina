const filter = () => { 
    document.querySelectorAll(".note").forEach((item) => {
        let value = document.querySelector(".search")
                                .value.toLowerCase();
        
                                console.log(value);
        const noteTitle = item.children[0].innerText;
      
        if (
          noteTitle.toLowerCase().indexOf(value) != -1 
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }        
   
      });
}