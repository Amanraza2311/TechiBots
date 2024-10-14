let tabLinks =  document.getElementsByClassName("tab-links")
let tabContents =  document.getElementsByClassName("tab-contents")


function openTab(tabName){
    for(tabLink of tabLinks){
tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabName).classList.add("active-tab")
}

let sideMenu = document.getElementById("sideMenu")

function Open_Menu(){
    sideMenu.style.right ="0"
}

function Close_Menu(){
    sideMenu.style.right ="-200px"
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbyxhYChq6m39lC59UeD6SLqK49Kc8pHBpquUWd1BwsxomzfzhEQ-Dwoa1KYMhhkNJpI-A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => Swal.fire({
        title: "Thank You!",
        text: "Form sent Successfully!",
        icon: "success"
      }))
      .catch(error => Swal.fire({
        title: "Oops!",
        text: "Inaviled Information!",
        icon: "error"
      }))
      form.reset()
  })


 