function focusInput(ev, selector) {
  if (!ev.target.value) return;
  document.querySelector(selector).focus();
}

function reject() {
  document.querySelector(".code").classList.add("fail");
  setTimeout(function () {
    document.querySelector(".code").classList.remove("fail");
    document.querySelector("#digit-1").value = "";
    document.querySelector("#digit-2").value = "";
    document.querySelector("#digit-3").value = "";
    document.querySelector("#digit-1").focus();
  }, 500);
}

function accept() {
  document.querySelector(".code").classList.add("pass");
  setTimeout(function() { window.location = "part-two.html" }, 500);
}

function submit(ev) {
  if (ev.target.value == "") return;

  if (document.querySelector("#digit-1").value !== "5") return reject();
  if (document.querySelector("#digit-2").value !== "1") return reject();
  if (document.querySelector("#digit-3").value !== "3") return reject();

  accept();
}

document.querySelector("#digit-1").addEventListener("input", function(ev) { focusInput(ev, "#digit-2") });
document.querySelector("#digit-2").addEventListener("input", function(ev) { focusInput(ev, "#digit-3") });
document.querySelector("#digit-3").addEventListener("input", submit);

document.querySelector("button.hint").addEventListener("click", function() { document.querySelector(".hint-text").style.display = "block"; });
