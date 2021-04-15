
var strong = .8;
var weak = 0.6;
var light_blue = "#3771a1";

var skills = [

    // {id: 1,  name: "HTML", scope: ["client"] , color: "#081c15", opacity: strong}, 
    // {id: 1,  name: "CSS", scope: ["client"] , color: "#081c15", opacity: strong},
    // {id: 1,  name: "Sass", scope: ["client"] , color: "#081c15", opacity: strong},

    {id: 1,  name: "HTML", scope: ["client"] , color: "#14213d", opacity: strong}, 
    {id: 1,  name: "CSS", scope: ["client"] , color: "#14213d", opacity: strong},
    {id: 1,  name: "Sass", scope: ["client"] , color: "#14213d", opacity: strong},

    // {id: 1,  name: "JavaScript", scope: ["transport, client"] , color: "#f22600", opacity: strong},
    // {id: 2,  name: "React.js", scope: ["client"] , color: "#f22600", opacity: weak},
    // {id: 5,  name: "jQuery", scope: ["transport"] , color: "#f22600", opacity: weak},
    // {id: 3,  name: "D3.js", scope: ["visualize"] , color: "#f22600", opacity: weak},
    // {id: 4,  name: "Node.JS", scope: ["transport"] , color: "#f22600", opacity: weak},
    // {id: 8,  name: "VB.Net", scope: ["generate data", "explore", "analyze", "visualize"], notes: "experimental interfaces, collect human data, data analysis" , color: "#f22600", opacity: strong},


    {id: 1,  name: "JavaScript", scope: ["transport, client"] , color: "#14213d", opacity: strong},
    {id: 2,  name: "React.js", scope: ["client"] , color: "#14213d", opacity: weak},
    {id: 5,  name: "jQuery", scope: ["transport"] , color: "#14213d", opacity: weak},
    {id: 3,  name: "D3.js", scope: ["visualize"] , color: "#14213d", opacity: weak},
    {id: 4,  name: "Node.JS", scope: ["transport"] , color: "#14213d", opacity: weak},
    {id: 8,  name: "VB.Net", scope: ["generate data", "explore", "analyze", "visualize"], notes: "experimental interfaces, collect human data, data analysis" , color: "#14213d", opacity: strong},


    { id: 6, name: "Python", scope: ["generate data", "explore", "analyze", "visualize"] , color: "#14213d", opacity: strong}, 
    {id: 2,  name: "pandas", scope: "explore, analyze, visualize" , color: "#14213d", opacity: weak},
    {id: 3,  name: "NLTK", scope: "" , color: "#14213d", opacity: weak},
    {id: 4,  name: "Spacy", scope: "" , color: "#14213d", opacity: weak},
    {id: 5,  name: "SciPy", scope: "" , color: "#14213d", opacity: weak},
    {id: 6,  name: "Tkinter", scope: "" , color: "#14213d", opacity: weak},
    {id: 7,  name: "Matplotlib", scope: "visualize", color: "#14213d" , opacity: weak},


    // {id: 1,  name: "AWS RDS/Postgres", scope: ["storage and retrieval"], color: "#2c3e50" , opacity: 1},
    // {id: 1,  name: "DynamoDB", scope: ["storage and retrieval"] , color: "#2c3e50", opacity: 1},
    // {id: 1,  name: "MongoDB/Atlas", scope: ["storage and retrieval"] , color: "#2c3e50", opacity: 1},
    // {id: 1,  name: "SQLite", scope: ["storage and retrieval"] , color: "#2c3e50", opacity: 1},

    {id: 1,  name: "AWS RDS/Postgres", scope: ["storage and retrieval"], color: "#14213d" , opacity: strong},
    {id: 1,  name: "DynamoDB", scope: ["storage and retrieval"] , color: "#14213d", opacity: strong},
    {id: 1,  name: "MongoDB/Atlas", scope: ["storage and retrieval"] , color: "#14213d", opacity: strong},
    {id: 1,  name: "SQLite", scope: ["storage and retrieval"] , color: "#14213d", opacity: strong},

    // {id: 1,  name: "JavaScript", scope: ["transport, client"] , color: "#6a040f", opacity: strong},
    // {id: 2,  name: "React.js", scope: ["client"] , color: "#6a040f", opacity: strong},
    // {id: 5,  name: "jQuery", scope: ["transport"] , color: "#6a040f", opacity: weak},
    // {id: 3,  name: "D3.js", scope: ["visualize"] , color: "#6a040f", opacity: weak},
    // {id: 4,  name: "Node.JS", scope: ["transport"] , color: "#6a040f", opacity: weak},

    // {id: 1,  name: "FireStore", scope: ["storage and retrieval"] , color: "#081c15", opacity: strong },
    // {id: 1,  name: "Nginx", scope: ["transport"]  , color: "#081c15", opacity: strong},
    // {id: 1,  name: "Heroku", scope: ["integrate/deploy"]  , color: "#081c15", opacity: weak},
    // {id: 1,  name: "Netlify", scope: ["integrate/deploy"]  , color: "#081c15", opacity: weak},
    // {id: 1,  name: "Github", scope: ["integrate/deploy"]  , color: "#081c15", opacity: weak},

    {id: 1,  name: "Tableau", scope: ["visualize"], color: "#14213d" , opacity: strong},
    {id: 1,  name: "MS Office/Excel", scope: ["explore", "analyze", "visualize"], color: "#14213d" , opacity: strong},
    {id: 1,  name: "Git", scope: ["productivity"] , color: "#14213d", opacity: strong},
    {id: 1,  name: "Agile", scope: ["productivity"] , color: "#14213d", opacity: strong},

]


var links = [

    { source: "", target: "" },
    { source: "", target: "" },
    { source: "", target: "" },

]

var infoSkills = { skills: skills, links: links }


export default infoSkills;
