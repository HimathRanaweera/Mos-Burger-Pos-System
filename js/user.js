// document.addEventListener("DOMContentLoaded", function (event) {
//     // Your code to run since DOM is loaded and ready
//     VanillaTilt.init(document.querySelectorAll(".card"), {
//         max: 25,
//         speed: 400,
//         glare: false,
//         "max-glare": 0.8
//     });
//     VanillaTilt.init(document.querySelectorAll(".card"));
// });








// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()