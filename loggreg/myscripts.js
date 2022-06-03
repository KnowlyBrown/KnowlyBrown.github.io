



function showDetails() {
  
  document.getElementById("btnn").onclick = showDetails;

  const x = document.getElementById("loginUser").value;
  const y = document.getElementById("loginPassword").value;
  
  document.getElementById("userN").innerHTML = x;
  document.getElementById("passs").innerHTML = y;
}

