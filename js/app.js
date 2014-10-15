

_.templateSettings.interpolate = /{([\s\S]+?)}/g;

var someHtmlString = [
	"<div 'class=left-side'>",
        "<img src='{avatar_url}'>",
        "<h3>{name}</h3>",
        "<h5>{login}</h5>",
        "<hr>",
        "<ul>",
            "<li> blog: {blog} </li>",
            "<li> location: {location} </li>",
            "<li> email: {email} </li>",  
        "</ul>",
        "<hr>",
        "<span> Followers </span>",
        "<span> Starred </span>",
        "<span> Following </span>",

    "</div>",
     "<div 'class=right-side'>",
     	"<span> Contributions </span>",
        "<span> Repositories </span>",
        "<span> Public Activity </span>",
     "</div>",

    ].join("");

function writeToDOM(data){
    document.body.innerHTML = _.template(someHtmlString, data);
}

$.getJSON("https://api.github.com/users/mb289").then(writeToDOM)