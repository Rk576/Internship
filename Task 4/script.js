document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission with EmailJS
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'default_service';
        const templateID = 'template_ID'; // Replace 'template_ID' with your EmailJS template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
            }, (err) => {
                alert(JSON.stringify(err));
            });
    });
});
