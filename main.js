const menuHamburguer = document.getElementById('menuHamburguer')
const navList = document.getElementById('navList')
const navItems = navList.querySelectorAll('li');

menuHamburguer.onclick = () => {
    navList.classList.toggle('open')
    menuHamburguer.classList.toggle('active')
}

navItems.forEach(item => {
    item.onclick = () => {
        navList.classList.remove('open');
        menuHamburguer.classList.remove('active')

    };
});

function SendMail() {
    // event.preventDefault();
    var params = {
        from_name : document.getElementById('fullName').value,
        telephone : document.getElementById('telephone').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }

    emailjs.send('service_rpwc0mk', 'template_0wb99td', params).then(function (res) {
        alert('Mensagem enviada com sucesso!')
    })
}