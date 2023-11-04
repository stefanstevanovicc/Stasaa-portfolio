document.getElementById('contact-stack-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var message = document.getElementById('message').value;

    if (!message) {
        alert('Please enter a message');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://www.emailjs.com/api/v1.0/email/send', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Message sent successfully');
        }
    };
    var data = JSON.stringify({
        to_email: 'stasalepovicskola@gmail.com',
        message_html: message
    });
    xhr.send(data);
});