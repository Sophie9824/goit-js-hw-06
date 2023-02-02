const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', handleSubmitForm)

function handleSubmitForm(event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert('Заповніть всі поля!');
        return
    }

    const formData = {
        email: email.value,
        password: password.value,
    }

    console.log(formData)
    formRef.reset();
}