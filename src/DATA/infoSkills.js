
var strong = .9;
var weak = 0.8;
// var light_blue = "#3771a1";
// 14213d - original background for skills, now color refers to font:
var skills = [

    { name: "HTML", scope: ["client"], color: "#ddd", opacity: strong },
    { name: "CSS/SCSS", scope: ["client"], color: "#ddd", opacity: strong },
    //{id: 3,  name: "Sass", scope: ["client"] , color: "#ddd", opacity: strong},

    // { name: "JavaScript", scope: ["transport, client"], color: "#dff118ea", opacity: strong },
    { name: "JavaScript", scope: ["transport, client"], color: "#ddd", opacity: strong },

    { name: "React.js", scope: ["client"], color: "#ddd", opacity: weak },
    //{id: 6,  name: "jQuery", scope: ["transport"] , color: "#ddd", opacity: weak},
    { name: "D3.js", scope: ["visualize"], color: "#ddd", opacity: weak },
    { name: "Node.js", scope: ["transport"], color: "#ddd", opacity: weak },


    // { name: "Python", scope: ["simulate", "explore", "analyze", "visualize"], color: "#95cfff", opacity: strong },
    { name: "Python", scope: ["simulate", "explore", "analyze", "visualize"], color: "#ddd", opacity: strong },
    { name: "pandas", scope: "explore, analyze, visualize", color: "#ddd", opacity: weak },
    { name: "NLTK", scope: "", color: "#ddd", opacity: weak },
    { name: "Spacy", scope: "", color: "#ddd", opacity: weak },
    { name: "SciPy", scope: "", color: "#ddd", opacity: weak },
    { name: "Tkinter", scope: "", color: "#ddd", opacity: weak },
    { name: "Matplotlib", scope: "visualize", color: "#ddd", opacity: weak },
    { name: "VB.Net", scope: ["generate data", "explore", "analyze", "visualize"], notes: "experimental interfaces, collect human data, data analysis", color: "#ddd", opacity: strong },

    { name: "Postgres", scope: ["storage and retrieval"], color: "#ddd", opacity: strong },
    { name: "DynamoDB", scope: ["storage and retrieval"], color: "#ddd", opacity: strong },
    { name: "MongoDB/Atlas", scope: ["storage and retrieval"], color: "#ddd", opacity: strong },
    { name: "SQLite", scope: ["storage and retrieval"], color: "#ddd", opacity: strong },

    { name: "Tableau", scope: ["visualize"], color: "#ddd", opacity: strong },
    { name: "MS Office/Excel", scope: ["explore", "analyze", "visualize"], color: "#ddd", opacity: strong },
    { name: "Git", scope: ["productivity"], color: "#ddd", opacity: strong },
    { name: "Agile", scope: ["productivity"], color: "#ddd", opacity: strong },

]


var links = [

    { source: "", target: "" },
    { source: "", target: "" },
    { source: "", target: "" },

]

var infoSkills = { skills: skills, links: links }


export default infoSkills;
