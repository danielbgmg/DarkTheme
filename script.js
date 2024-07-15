const btn = document.querySelector('.btn-switchTheme')

btn.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light");
})
