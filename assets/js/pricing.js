
const payments = document.querySelectorAll('.payment');
const inputCheckbox = document.querySelector('#inputCheckbox');


inputCheckbox.addEventListener('input', change);

function change() {
  if (inputCheckbox.checked) {
    payments[0].innerText = '19.99';
    payments[1].innerText = '24.99';
    payments[2].innerText = '39.99';
  } else {
    payments[0].innerText = '199.99';
    payments[1].innerText = '249.99';
    payments[2].innerText = '399.99';
  }
}

