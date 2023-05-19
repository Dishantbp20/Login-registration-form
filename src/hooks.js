var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var responseText = this.responseText;
    console.log(responseText); // Display the retrieved data
    
    // Process the data as needed
    // ...
  }
};

xhttp.open("GET", "data.txt", true); // Replace "data.txt" with your actual file path
xhttp.send();
