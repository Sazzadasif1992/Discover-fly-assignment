//First  class Section input
document.getElementById("firstClassCountIncrease").addEventListener("click", function () {
    handleFirstClassChange(true);
  });
document.getElementById("firstClassCountDecrease").addEventListener("click", function () {
    handleFirstClassChange(false);
  });
function handleFirstClassChange(isIncrease) {
  const firstclassInput = document.getElementById("firstClassInput");
  const firstclassCount = parseInt(firstclassInput.value);
  let firstclassNewCount = firstclassCount;
  if (isIncrease == true) {
    firstclassNewCount = firstclassCount + 1;
  }
  if (isIncrease == false && firstclassNewCount>0) {
    firstclassNewCount = firstclassCount - 1;
  }
  firstclassInput.value = firstclassNewCount;
  calculateTotal();
}
//End of first class Section





// Economy class Section

document.getElementById("economyCountIncrease").addEventListener("click", function () {
    handleClassChange(true);
  });
document.getElementById("economyCountDecrease").addEventListener("click", function () {
    handleClassChange(false);
  });
function handleClassChange(isIncrease) {
  const economyclassInput = document.getElementById("economyClassInput");
  const economyclassCount = parseInt(economyclassInput.value);
  let economyClassNewCount = economyclassCount;
  if (isIncrease == true) {
    economyClassNewCount = economyclassCount + 1;
  }
  if (isIncrease == false && economyClassNewCount>0) {
    economyClassNewCount = economyclassCount - 1;
  }
  economyclassInput.value = economyClassNewCount;
  calculateTotal();
}
//End of Economy class Section





// Total count Section

function calculateTotal() {
  const firstclassInput = document.getElementById("firstClassInput");
  const firstclassCount = parseInt(firstclassInput.value);
  const economyclassInput = document.getElementById("economyClassInput");
  const economyclassCount = parseInt(economyclassInput.value);

  const subtotalPrice = firstclassCount * 150 + economyclassCount * 100;
  document.getElementById("subtotal").innerText = subtotalPrice;
  const vat = Math.round(subtotalPrice * 0.1);
  document.getElementById("vat-amount").innerText = vat;
  const grandTotal = subtotalPrice + vat;
  document.getElementById("total").innerText = grandTotal;
}
//End of Total count Section



// Alert 
function showAlert(){
    alert("Confirm to book your ticket?");
}

// End of Alert