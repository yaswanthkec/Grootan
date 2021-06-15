function fetchData(){
    fetch("https://reqres.in/api/users")
    .then(response => {
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.data);
        const html = data.data
        .map(user => {
            return `<h2><a href="fetch.html">${user.first_name}</a></h2>`;
            })
            .join(" ");
            console.log("html");
            document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
    })
    .catch(error => {
        console.log(error);
    });
}

fetchData();