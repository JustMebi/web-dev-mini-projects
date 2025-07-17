const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    if (btn.id === "clear") {
      display.value = "";
    } else if (btn.id === "equal") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
