var buttonSubmit = document.querySelector('.footer-form-button')

buttonSubmit.addEventListener('click', async function(e) {
  e.preventDefault()
  var userEmail = document.querySelector(".footer-email-input").value
  console.log(userEmail)
  
  console.log("ain")
  try {
    const response = await fetch("http://localhost:3000/email", {
      method: "POST",
      body: JSON.stringify({userEmail}),
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
  return response.data
    
  } catch (error) {
    console.log(error)
    
  }

})