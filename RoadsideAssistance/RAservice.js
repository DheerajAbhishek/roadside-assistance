let locate = document.querySelector("#location");
let map = document.querySelector("#map")
let i = document.querySelector("#text");
let y = ""
let x = 0
let bp = document.querySelector("#petrol")
let bm = document.querySelector("#mechanic")
let bev = document.querySelector("#ev")
let clear = document.querySelector("#clear");
let pmap = document.querySelector("#pmap")
let mmap = document.querySelector("#mmap")
let evmap = document.querySelector("#evmap")
let user = document.querySelector(".userloc")
let h2map = document.querySelector("#hmap")
//------------------------------------------------------------------
let section = document.querySelector("#sec");
let p = document.createElement("p");
let latitude = 0;
let longitude = 0;
locate.onclick = (function () {
    function sucess(pos) {
        bp.disabled = false
        bm.disabled = false
        bev.disabled = false
        pmap.disabled = false
        mmap.disabled = false
        evmap.disabled = false
        h2map.classList.add("dontshow")
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude
        p.innerText = "latitude="
        p.innerText += latitude
        p.innerText += "  "
        p.innerText += "longitude="
        p.innerText += longitude
        console.log(`lat=${latitude} long=${longitude}`);
        section.appendChild(p)
        p.classList.add("posi")
        let fuelform = document.querySelector("#fuel");
        fuelform.action += `/@${latitude},${longitude},14z?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`;
        console.log("Updated form action:", fuelform.action);
        let mechform = document.querySelector("#mech");
        mechform.action += `/@${latitude},${longitude},14z?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`;
        let evform = document.querySelector("#fev");
        evform.action += `/@${latitude},${longitude},14z?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`;
        console.log("Updated form action:", evform.action);
        console.log("Updated form action:", mech.action);
        alert("location found sucessfully")
        user.classList.add("show")
        user.src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.93369209369!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1695576098947!5m2!1sen!2sin`
    }
    function error(error) {
        console.error(error.code)
        alert("Can't find your location, please allow location permission or check internet connection")
    }
    navigator.geolocation.getCurrentPosition(sucess, error)
})
//------------------------------------------------------------------------------


clear.onclick = (function () {
    i.value = null;
    bp.disabled = true
    bm.disabled = true
    bev.disabled = true
})
i.addEventListener("input", function () {

    bp.disabled = false
    bm.disabled = false
    bev.disabled = false
    y = i.value;
    x = y.length;
    console.log("updated value of y", y)
    console.log("x=", x)
    if (x === 0) {
        bp.disabled = true
        bm.disabled = true
        bev.disabled = true
    }
    let fuelform = document.querySelector("#fuel");
    fuelform.addEventListener("submit", function () {
        fuelform.action += `+${y}/14z?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`;
        console.log("Updated form action:", fuelform.action);
    })
    let mechform = document.querySelector("#mech");
    mechform.addEventListener("submit", function () {
        mechform.action += `+${y}/14z?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`;
        console.log("Updated form action:", mech.action);
    })
    let evform = document.querySelector("#fev");
    evform.addEventListener("submit", function () {
        evform.action += `+${y}/14z?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`;
        console.log("Updated form action:", evform.action);
    })
})
8
pmap.onclick = (function () {
    map.src = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30386.435928125167!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgas%20stations%20near!5e0!3m2!1sen!2sin!4v1727231648815!5m2!1sen!2sin`
    map.classList.add("show")
    user.classList.add("dontshow")
})

mmap.onclick = (function () {
    map.src = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30386.435928125167!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smechanic%20stations%20near!5e0!3m2!1sen!2sin!4v1727231648815!5m2!1sen!2sin`
    map.classList.add("show")
    user.classList.add("dontshow")
})

evmap.onclick = (function () {
    map.src = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30386.435928125167!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sev%20stations%20near!5e0!3m2!1sen!2sin!4v1727231648815!5m2!1sen!2sin`
    map.classList.add("show")
    user.classList.add("dontshow")
})

