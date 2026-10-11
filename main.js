const input = document.getElementById("input");

function clearInput() {
  input.value = "";
}

function updateInput(element) {
  input.value += element;
}

function evaluateInput() {
  try {
    let results = eval(input.value);
    input.value = results;
  } catch (error) {
    input.value = "Error";
  }
}
