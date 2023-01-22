let images = [{
    city: "Rostov-on-Don, Admiral",
    area: "81 m2",
    time: "3.5 months",
    photoUrl: "url(images/rostovAdmiral.jpg)"
    }, {
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    photoUrl: "url(images/sochi.jpg)"
    }, {
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    photoUrl: "url(images/rostovPatriotic.jpg)"    
    }];
let imageField = document.querySelector('.projects-div')
let topNavigationItems = document.querySelectorAll('.project-navigation__item');
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let pointerNavigationItems = document.querySelectorAll(".circle")

let cityData = document.getElementById("city");
let indexCityData = `<span class="projects-palette__span">${images[0].city}</span>`;
cityData.innerHTML = indexCityData;

let areaData = document.getElementById("area");
let indexAreaData = `<span class="projects-palette__span">${images[0].area}</span>`;
areaData.innerHTML = indexAreaData;

let timeData = document.getElementById("time");
let indexTimeData = `<span class="projects-palette__span">${images[0].time}</span>`;
timeData.innerHTML = indexTimeData;

let activeTopNavClass = "project-navigation__item_active";
topNavigationItems[0].classList.add(activeTopNavClass);

let activePointerNavClass = "circle_active";
pointerNavigationItems[0].classList.add(activePointerNavClass);

function initSlider() {
    let currentPhotoNumber = 0;
    imageField.style.backgroundImage = `${images[currentPhotoNumber].photoUrl}`;

    rightArrow.addEventListener('click', function () {
        
        if (currentPhotoNumber <2) {
            topNavigationItems[currentPhotoNumber].classList.remove(activeTopNavClass);
            pointerNavigationItems[currentPhotoNumber].classList.remove(activePointerNavClass);
            imageField.style.backgroundImage = `${images[currentPhotoNumber+1].photoUrl}`;
            currentPhotoNumber+=1;
            topNavigationItems[currentPhotoNumber].classList.add(activeTopNavClass);
            pointerNavigationItems[currentPhotoNumber].classList.add(activePointerNavClass);
            getData ();
        } else {
            currentPhotoNumber = 0;
            topNavigationItems[2].classList.remove(activeTopNavClass);
            pointerNavigationItems[2].classList.remove(activePointerNavClass);
            imageField.style.backgroundImage = `${images[currentPhotoNumber].photoUrl}`;
            getData ();
            topNavigationItems[0].classList.add(activeTopNavClass); 
            pointerNavigationItems[0].classList.add(activePointerNavClass);
        }
    })

    leftArrow.addEventListener('click', function () {
        if (currentPhotoNumber > 0) {
            topNavigationItems[currentPhotoNumber].classList.remove(activeTopNavClass);
            pointerNavigationItems[currentPhotoNumber].classList.remove(activePointerNavClass);
            imageField.style.backgroundImage = `${images[currentPhotoNumber-1].photoUrl}`;
            currentPhotoNumber-=1;
            topNavigationItems[currentPhotoNumber].classList.add(activeTopNavClass);
            pointerNavigationItems[currentPhotoNumber].classList.add(activePointerNavClass);
            getData ();
        } else {
            currentPhotoNumber = 2;
            topNavigationItems[0].classList.remove(activeTopNavClass);
            pointerNavigationItems[0].classList.remove(activePointerNavClass);
            imageField.style.backgroundImage = `${images[currentPhotoNumber].photoUrl}`;
            topNavigationItems[currentPhotoNumber].classList.add(activeTopNavClass);
            pointerNavigationItems[currentPhotoNumber].classList.add(activePointerNavClass);
            getData ();
            
        }
    })

    function getCityData () {
        let indexCityData = `<span class="projects-palette__span">${images[currentPhotoNumber].city}</span>`
        cityData.innerHTML = indexCityData;
    }

    function getAreaData () {
        let indexAreaData = `<span class="projects-palette__span">${images[currentPhotoNumber].area}</span>`
        areaData.innerHTML = indexAreaData;
    }

    function getTimeData () {
        let indexTimeData = `<span class="projects-palette__span">${images[currentPhotoNumber].time}</span>`
        timeData.innerHTML = indexTimeData;
    }

    function getData () {
        getCityData ();
        getAreaData ();
        getTimeData ();
    }

    let indexedTopNagationArray = new Array ;
    for (let i = 0; i < topNavigationItems.length; i++){
        indexedTopNagationArray.push(topNavigationItems[i]);
        topNavigationItems[i].addEventListener('click', function(e){

        topNavigationItems.forEach (item => {
            item.classList.remove(activeTopNavClass);
        })
        pointerNavigationItems.forEach(item => {
            item.classList.remove(activePointerNavClass);
        })


        imageField.style.backgroundImage = `${images[+indexedTopNagationArray.indexOf(e.currentTarget)].photoUrl}`;
        let currentPhotoNumber = images[+indexedTopNagationArray.indexOf(e.currentTarget)];
        let indexCityData = `<span class="projects-palette__span">${currentPhotoNumber.city}</span>`;
        cityData.innerHTML = indexCityData;
        let indexAreaData = `<span class="projects-palette__span">${currentPhotoNumber.area}</span>`;
        areaData.innerHTML = indexAreaData;
        let indexTimeData = `<span class="projects-palette__span">${currentPhotoNumber.time}</span>`;
        timeData.innerHTML = indexTimeData;
       
        topNavigationItems[+indexedTopNagationArray.indexOf(e.currentTarget)].classList.add(activeTopNavClass);
        pointerNavigationItems[+indexedTopNagationArray.indexOf(e.currentTarget)].classList.add(activePointerNavClass);
        });
      }

    let indexedPointerNagationArray = [];
      for (let i = 0; i < pointerNavigationItems.length; i++){
            indexedPointerNagationArray.push(pointerNavigationItems[i]);
            indexedPointerNagationArray[i].addEventListener('click', function(e){

                pointerNavigationItems.forEach(item => {
                    item.classList.remove(activePointerNavClass);
                })
                topNavigationItems.forEach (item => {
                    item.classList.remove(activeTopNavClass);
                })

            imageField.style.backgroundImage = `${images[+indexedPointerNagationArray.indexOf(e.currentTarget)].photoUrl}`;
            let currentPhotoNumber = images[+indexedPointerNagationArray.indexOf(e.currentTarget)];
            let indexCityData = `<span class="projects-palette__span">${currentPhotoNumber.city}</span>`;
            cityData.innerHTML = indexCityData;
            let indexAreaData = `<span class="projects-palette__span">${currentPhotoNumber.area}</span>`;
            areaData.innerHTML = indexAreaData;
            let indexTimeData = `<span class="projects-palette__span">${currentPhotoNumber.time}</span>`;
            timeData.innerHTML = indexTimeData;

            pointerNavigationItems[+indexedPointerNagationArray.indexOf(e.currentTarget)].classList.add(activePointerNavClass);
            topNavigationItems[+indexedPointerNagationArray.indexOf(e.currentTarget)].classList.add(activeTopNavClass);
          });
        }
}




document.addEventListener("DOMContentLoaded", initSlider);

