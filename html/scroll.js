let btnHome = document.getElementById("btnHome").addEventListener("click", scrollHome =>{
    let home = document.getElementById("firstRow").scrollIntoView({behavior: "smooth", block: "start"});
})

let btnProjects = document.getElementById("btnProjects").addEventListener("click", scrollProjects => {
    let projects = document.getElementById("thirdRow").scrollIntoView({behavior: "smooth", block: "start"});
})

let btnAbout = document.getElementById("btnAbout").addEventListener("click", scrollAbout =>{
    let about = document.getElementById("fourthRow").scrollIntoView({behavior: "smooth", block: "start"});
})