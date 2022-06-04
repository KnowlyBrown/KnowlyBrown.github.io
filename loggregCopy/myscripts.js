

function checkFill() {
  var bt = document.getElementById('btnn');
  if (loginUser.value != '' && loginPassword.value != ''){
    bt.disabled = false;
  } else {
    bt.disabled = true;
  }
}

document.getElementById("btnn").onclick = showDetails;
function showDetails() {
  const x = document.getElementById("loginUser").value;
  const y = document.getElementById("loginPassword").value;
  document.getElementById("userN").innerHTML =  Date();
  document.getElementById("passs").innerHTML = y;
}