fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001").then(res => res.json()
    .then(data => {
        users = data.map(user => {

        }
    
     
    


const searchInput = document.querySelector('[search]');
        searchInput.addEventListener("input", e => {


            const value = e.target.value.toLowerCase();
            users.forEach(user => {
                const isVisible = user.info.toLowerCase().includes(value)
            })
        })