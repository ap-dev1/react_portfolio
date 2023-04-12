import React, { Component } from "react";
import { nanoid } from "nanoid";
// import infoTimeline from "./DATA/infoTimeline";
import infoHighlights from "./DATA/infoHighlights";

import HeaderSection from "./COMPONENTS/header_files/HeaderSection";
import About from "./COMPONENTS/about_files/AboutSection";
import MyTimeline from "./COMPONENTS/timeline_files/MyTimeline";

import TeachingIntro from "./COMPONENTS/teaching/TeachingIntro";

import Contact from "./COMPONENTS/contact/ContactSection";

import MyVitae from "./COMPONENTS/vitae/MyVitae";

import ResearchIntro from "./COMPONENTS/background/ResearchIntro";

import ResearchOverview from "./COMPONENTS/background/ResearchOverview";

import ResearchDemo from "./COMPONENTS/background/ResearchDemo";
// import MatchingDemo from "./COMPONENTS/matching/MatchingDemo";

// import EmergenceMain from "./COMPONENTS/emergence/EmergenceMain";
// import EmergenceMain2 from "./COMPONENTS/emergence2/EmergenceMain2.jsx";
// import TeaserPopa2019 from "./COMPONENTS/background/TeaserPopa2019";


import BgDivider from "./COMPONENTS/background/BgDivider";



const abc = ["A", "B", "C"]

class App extends Component {


    componentDidMount() {
        var navigationMarkers = [
            { markerID: 'About', navButtonID: "btnAbout" },
            { markerID: 'teaching-intro', navButtonID: "btnteaching-intro" },
            { markerID: 'research-intro', navButtonID: "btnresearch-intro" },
            { markerID: 'research-overview', navButtonID: "btnresearch-overview" },

            { markerID: 'research-demo', navButtonID: "btnresearch-demo" },


            // { markerID: 'EmergenceSection', navButtonID: "btnEmergenceSection" },


            { markerID: 'Parkour', navButtonID: "btnParkour" },
            // { markerID: 'Portfolio', navButtonID: "btnPortfolio" },

            // { markerID: 'AgreementMatching', navButtonID: "btnAgreementMatching" },
            // { markerID: 'HammingCOD', navButtonID: "btnHammingCOD" },
            // { markerID: 'MutationADHD', navButtonID: "btnMutationADHD" },
            // // { markerID: 'FastMatching', navButtonID: "btnFastMatching" },
            // { markerID: 'Dissertation', navButtonID: "btnDissertation" },
            // { markerID: 'Jeab2016', navButtonID: "btnJeab2016" },
            // { markerID: 'Sparc', navButtonID: "btnSparc" },
            // { markerID: 'Triangles', navButtonID: "btnTriangles" },
            // { markerID: 'nbtSelection', navButtonID: "btnnbtSelection" },
            // { markerID: 'Popa2019a', navButtonID: "btnPopa2019a" },
            // { markerID: 'Popa2019b', navButtonID: "btnPopa2019b" },


            { markerID: 'sectionVitae', navButtonID: "btnsectionVitae" },
            { markerID: 'Contact', navButtonID: "btnContact" }
        ]

        let observerOptions = { root: null, threshold: 0, }


        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                let navButtonID = navigationMarkers.filter(aa => aa.markerID.includes(entry.target.id))[0].navButtonID
                let navButton = document.getElementById(navButtonID)


                if (document.getElementsByClassName("currentView").length > 0) {
                    //console.log("at least one element with class CURRENT VIEW, removed.")
                    document.getElementsByClassName("currentView")[0].classList.remove("currentView")
                }

                navButton.classList.add("currentView")
            });
        },
            observerOptions);


        // Apply the observer to every section:
        navigationMarkers.forEach(marker => {
            observer.observe(document.getElementById(marker.markerID))
        })

    }





    render() {

        return (
            <div>


                <HeaderSection />

                <About />

                <TeachingIntro />

                <ResearchIntro />

                <ResearchOverview />

                <BgDivider title="DEMO" />

                <ResearchDemo />

                {/* <BgDivider title="HOW IT WORKS" /> */}

                {/* <EmergenceMain2 /> */}


                <BgDivider title="highlights" />


                {/* <div
                    id='div-highlights'
                    key={nanoid()}
                    style={{
                        backgroundColor: '#274235',
                        color: 'lightgreen',
                        maxWidth: '100%',
                        margin: 'auto',
                        padding: '2rem',
                        textAlign: 'center',
                        color: 'rgba(25, 200, 150, 1)',
                    }}
                >
                    <div

                        key={nanoid()}
                        style={{
                            color: 'lightgreen',
                            margin: 'auto',
                            padding: '1rem',
                            textAlign: 'center',
                            color: 'rgba(25, 200, 150, 1)',
                            boxShadow: "0px 0px 30px rgba(0, 255, 50, .25)",
                            maxWidth: "70%"
                        }}
                    >
                        <h1> Highlights </h1>

                        <p>Lorem ipsum </p>
                    </div>
                </div> */}



                <MyTimeline
                    // events={infoHighlights.slice(0, 11)}
                    events={infoHighlights}
                    orientation="vertical"
                    startFrom="first"
                />

                {/* <MyTimeline
                    events={infoHighlights.slice(11)}
                    orientation="vertical"
                    startFrom="first"
                    bg={'#274242'}
                    contentBg={'#273542'}
                    titleColor={'#a8dce3'}
                    titleColor={'#ffba00'}
                /> */}

                {/* <Chapter04 /> */}

                <MyVitae />

                <Contact />



            </div >
        );
    }
}

export default App;
