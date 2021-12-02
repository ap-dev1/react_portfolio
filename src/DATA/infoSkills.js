
var strong = .8;
var weak = 0.6;
// var light_blue = "#3771a1";

var skills = [

    {id: 1,  name: "HTML", scope: ["client"] , color: "#14213d", opacity: strong}, 
    {id: 2,  name: "CSS", scope: ["client"] , color: "#14213d", opacity: strong},
    {id: 3,  name: "Sass", scope: ["client"] , color: "#14213d", opacity: strong},

    {id: 4,  name: "JavaScript", scope: ["transport, client"] , color: "#14213d", opacity: strong},
    {id: 5,  name: "React.js", scope: ["client"] , color: "#14213d", opacity: weak},
    //{id: 6,  name: "jQuery", scope: ["transport"] , color: "#14213d", opacity: weak},
    {id: 7,  name: "D3.js", scope: ["visualize"] , color: "#14213d", opacity: weak},
    {id: 8,  name: "Node.JS", scope: ["transport"] , color: "#14213d", opacity: weak},

    {id: 9,  name: "VB.Net", scope: ["generate data", "explore", "analyze", "visualize"], notes: "experimental interfaces, collect human data, data analysis" , color: "#14213d", opacity: strong},

    { id: 10, name: "Python", scope: ["simulate", "explore", "analyze", "visualize"] , color: "#14213d", opacity: strong}, 
    {id: 11,  name: "pandas", scope: "explore, analyze, visualize" , color: "#14213d", opacity: weak},
    {id: 12,  name: "NLTK", scope: "" , color: "#14213d", opacity: weak},
    {id: 13,  name: "Spacy", scope: "" , color: "#14213d", opacity: weak},
    {id: 14,  name: "SciPy", scope: "" , color: "#14213d", opacity: weak},
    {id: 15,  name: "Tkinter", scope: "" , color: "#14213d", opacity: weak},
    {id: 16,  name: "Matplotlib", scope: "visualize", color: "#14213d" , opacity: weak},

    {id: 17,  name: "Postgres", scope: ["storage and retrieval"], color: "#14213d" , opacity: strong},
    {id: 18,  name: "DynamoDB", scope: ["storage and retrieval"] , color: "#14213d", opacity: strong},
    {id: 19,  name: "MongoDB/Atlas", scope: ["storage and retrieval"] , color: "#14213d", opacity: strong},
    {id: 20,  name: "SQLite", scope: ["storage and retrieval"] , color: "#14213d", opacity: strong},

    {id: 21,  name: "Tableau", scope: ["visualize"], color: "#14213d" , opacity: strong},
    {id: 22,  name: "MS Office/Excel", scope: ["explore", "analyze", "visualize"], color: "#14213d" , opacity: strong},
    {id: 23,  name: "Git", scope: ["productivity"] , color: "#14213d", opacity: strong},
    {id: 24,  name: "Agile", scope: ["productivity"] , color: "#14213d", opacity: strong},

]


var links = [

    { source: "", target: "" },
    { source: "", target: "" },
    { source: "", target: "" },

]

var infoSkills = { skills: skills, links: links }


export default infoSkills;
