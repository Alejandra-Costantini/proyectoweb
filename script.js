fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results['0'])
        contenido.innerHTML = `
<img src="${data.results['0'].picture.large}">
<p>Username: "${data.results['0'].login.username}"</p>
<p>Email: "${data.results['0'].email}"</p>`

    })

function validateEmail() {
    var emailField = document.getElementById('email-contacto')
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w)*(\.\w{2, 10})+$/;

    if (validEmail.test(emailField.value)) {
        alert('Email valido');
        return true;
    } else {
        alert('Email invalido');
        return false
    }
}