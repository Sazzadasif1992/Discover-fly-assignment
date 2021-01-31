//First  class Section input
document.getElementById("firstClassTicketIncrease").addEventListener("click", function () {
    handleFirstClassChange(true);
  });
document.getElementById("firstClassTicketDecrease").addEventListener("click", function () {
    handleFirstClassChange(false);
  });
function handleFirstClassChange(isIncrease) {
  const firstClassInput = document.getElementById("firstClassInput");
  const firstClassTicketCount = parseInt(firstClassInput.value);
  let firstClassNewCountPer = firstClassTicketCount;
  if (isIncrease == true) {
    firstClassNewCountPer = firstClassTicketCount + 1;
  }
  if (isIncrease == false && firstClassNewCountPer>0) {
    firstClassNewCountPer = firstClassTicketCount - 1;
  }
  firstClassInput.value = firstClassNewCountPer;
  calculateTotal();
}
//End of first class Section





// Economy class Section start

document.getElementById("economyClassIncrease").addEventListener("click", function () {
    handleClassChange(true);
  });
document.getElementById("economyClassDecrease").addEventListener("click", function () {
    handleClassChange(false);
  });
function handleClassChange(isIncrease) {
  const economyClassInput = document.getElementById("economyClassInput");
  const economyClassPer = parseInt(economyClassInput.value);
  let economyClassNewCount = economyClassPer;
  if (isIncrease == true) {
    economyClassNewCount = economyClassPer + 1;
  }
  if (isIncrease == false && economyClassNewCount>0) {
    economyClassNewCount = economyClassPer - 1;
  }
  economyClassInput.value = economyClassNewCount;
  calculateTotal();
}
//End of Economy class Section





// Total count Section start

function calculateTotal() {
  const firstClassInput = document.getElementById("firstClassInput");
  const firstClassCount = parseInt(firstClassInput.value);
  const economyClassInput = document.getElementById("economyClassInput");
  const economyClassCount = parseInt(economyClassInput.value);

  const subtotalPrice = firstClassCount * 150 + economyClassCount * 100;
  document.getElementById("subtotal").innerText = subtotalPrice;
  const vat = Math.round(subtotalPrice * 0.1);
  document.getElementById("vat-amount").innerText = vat;
  const grandTotal = subtotalPrice + vat;
  document.getElementById("total").innerText = grandTotal;
}
//End of Total count Section



