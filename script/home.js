//NAME USER IN PAGE
(function(){
    const user = localStorage.getItem('user')
    const userName = document.getElementById('welcome')
    
    if (user != null) {
     userName.innerHTML = `Welcome, ${user}`
    }else {
        userName.innerHTML = `Welcome`
    }
    
}())