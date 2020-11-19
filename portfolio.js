let projects = [
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
]
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