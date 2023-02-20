const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((p) => {
  p.addEventListener('click', () => {
    RemoveActiveClasses();
    p.classList.add("active")
  });
})

function RemoveActiveClasses() {
  panels.forEach((p) => {
    p.classList.remove('active');
  })
}