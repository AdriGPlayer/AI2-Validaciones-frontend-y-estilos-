let bar = Array.from(document.querySelectorAll("li"));

bar.forEach(function(it) {
  it.onclick = function() {
    bar.forEach(function(el) {
      el.classList.remove("active");
    });
    this.classList.toggle("active");
  };
});
function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return;
  } else if (!validateEmail(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }


  document.getElementById("confirmation-message").style.display = "block";
}

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}


const navLinks = document.querySelectorAll('.bar li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    navLinks.forEach(link => link.parentElement.classList.remove('active'));
    this.parentElement.classList.add('active');
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

