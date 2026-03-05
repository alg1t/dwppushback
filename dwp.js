// // hamburger function

// const toggle = document.querySelector(".nav-toggle");
// const links = document.querySelector(".nav-links");

// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
//   links.classList.toggle("open");
// });

// //copy function

// const copyBtn = document.getElementById("copyBtn");
// const templateBox = document.getElementById("templateBox");

// copyBtn.addEventListener("click", async () => {
//   const text = templateBox.innerText;

//   try {
//     await navigator.clipboard.writeText(text);
//     copyBtn.textContent = "Copied!";
//     setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
//   } catch (err) {
//     const range = document.createRange();
//     range.selectNode(templateBox);
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(range);
//     document.execCommand("copy");
//     window.getSelection().removeAllRanges();
//     copyBtn.textContent = "Copied!";
//     setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
//   }
// });
// ------------------------------
// Hamburger function
// ------------------------------

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    links.classList.toggle("open");
  });
}

// ------------------------------
// Copy function
// ------------------------------

const copyBtn = document.getElementById("copyBtn");
const templateBox = document.getElementById("templateBox");

if (copyBtn && templateBox) {
  copyBtn.addEventListener("click", async () => {
    const text = templateBox.innerText;

    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    } catch (err) {
      const range = document.createRange();
      range.selectNode(templateBox);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    }
  });
}
