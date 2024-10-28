document.getElementById("phraseInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents form submission if the input is inside a form
      generateAcronym(); // Calls the function to generate the acronym
    }
  });
  
  function generateAcronym() {
    const phrase = document.getElementById("phraseInput").value;
    const words = phrase.split(" ");
    const acronym = words.map(word => word.charAt(0).toUpperCase()).join("");
    document.getElementById("acronymOutput").textContent = `Acronym: ${acronym}`;
  }
  