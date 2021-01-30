// array of projects I want displayed on page
let projects = [
    {
        name: "Pōchidoeggu",
        pic: "Images/pochidoeggu.PNG",
        description: "Pōchidoeggu lets you create an account which is saved via MySQL then login using Passport to authenticate.  Once logged in you are able to play with a virtual pet with css animations to feed, walk, or sleep your pet.",
        liveLink: "https://pochidoeggu.herokuapp.com/",
        repoLink: "https://github.com/vfavorito/pochidoeggu"
    },
    {
        name: "Marvel Character Cards",
        pic: "Images/marvelCards.PNG",
        description: "Marvel character cards is an app that allows you to search marvel characters.  Upon selection of a character a theme song is played and the user is given the ability to make a card of that character.",
        liveLink: "https://vfavorito.github.io/Marvel-Cards/",
        repoLink: "https://github.com/vfavorito/Marvel-Cards"
    },
    {
        name: "vinnieWeather",
        pic: "Images/vinnieWeather.PNG",
        description: "vinnieWEATHER is an app that displays a weather dashboard. The User is able to add any city to the dashboard and upon selecting a city current weather is displayed as well as a five day forecast.",
        liveLink: "https://vfavorito.github.io/weather-app/",
        repoLink: "https://github.com/vfavorito/weather-app"
    },
    {
        name: "Burger-Simulator",
        pic: "Images/burger-simulator.PNG",
        description: "Burger-Simulator is a burger eating dashboard.  The User is able to add a burger then devour it.  The burgers added and devoured are saved to a remote database so you can add one now and devour it later!",
        liveLink: "https://vfavorito-burger-simulator.herokuapp.com/",
        repoLink: "https://github.com/vfavorito/burger-simulator"
    }
]
// function that creates project blocks on page
projects.forEach( projects => {
    let divEl = $("<div>");
    divEl.addClass("projectDiv");
    let nailPic = $("<img>");
    nailPic.addClass("nailPic");
    let proPic = $("<img>");
    proPic.addClass("projectPic");
    proPic.attr("src",projects.pic);
    let proName = $("<h5>");
    proName.addClass("projectName")
    proName.text(projects.name);
    let proDesc = $("<p>");
    proDesc.addClass("projectDesc")
    proDesc.text(projects.description);
    let liveLink = $("<a>");
    liveLink.text("Live Link");
    liveLink.attr("href",projects.liveLink);
    liveLink.attr("target","_blank");
    liveLink.addClass("projectLinks");
    let repoLink = $("<a>");
    repoLink.text("Repository Link");
    repoLink.attr("href",projects.repoLink);
    repoLink.attr("target","_blank");
    repoLink.addClass("projectLinks");
    divEl.append(nailPic, proPic, proName, proDesc, liveLink, repoLink);
    $("#projects").append(divEl);
});