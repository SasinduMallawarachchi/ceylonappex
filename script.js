function sendEmail() {
    let params = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        serviceType: document.getElementById("serviceType").value,
        loanAmount: document.getElementById("loanAmount").value,
        employmentStatus: document.getElementById("employmentStatus").value,
        monthlyIncome: document.getElementById("monthlyIncome").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_8yreysi","template_7hsszwn",params)
}

function getstartFormSubmit(){
    let params = {
        fullName: document.getElementById("fullName").value,
        phone: document.getElementById("phone").value,
        serviceType: document.getElementById("serviceType").value,
    }
    emailjs.send("service_8yreysi","template_7hsszwn",params)
}
