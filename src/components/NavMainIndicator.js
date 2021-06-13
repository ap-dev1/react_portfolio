import React, { useState, useEffect } from "react";


var NavMainIndicator = () => {

    var [position, setPosition] = useState(0)


    var handleScroll = () => {

        var navPosition = 0

        // var a = document.getElementById("About").offsetTop
        //var b = document.getElementById("btnAbout").offsetTop

        var scrollPosition = window.pageYOffset
        var heightLarge = document.getElementById("root").clientHeight
        //var heightSmall = document.getElementById("nav1").clientHeight

        var heightSmall = document.getElementById("nav1").clientHeight - 20

        var displacement = (heightLarge - scrollPosition) / heightLarge
        var newHeight = heightSmall - (displacement * heightSmall)


        console.log(document.getElementById("nav1").clientHeight, heightSmall)

        // console.log(displacement, scrollPosition, newHeight)

        //console.log(heightLarge, heightSmall, heightSmall / heightLarge)
        //console.log(scrollPosition, windoesHeight, navHeight, scaleFactor)

        // MINIMIZE
        // if (scrollPosition <= a) {
        //     navPosition = document.getElementById("btnAbout").offsetTop
        // } else {
        //     // navPosition = scaleFactor * (navHeight - b)
        //     navPosition = scaleFactor * (navHeight)
        // }

        //navPosition = heightSmall / heightLarge * scrollPosition


        setPosition(newHeight)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, []);


    return (

        <div className="indicator" style={{ top: position }}></div>

    );
};

export default NavMainIndicator;