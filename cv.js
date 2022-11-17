let url = "data.json";
let myList = document.querySelector(".myList");
let basicList = document.querySelector(".basicList");
let employmentList = document.querySelector(".employmentList");
let educationList = document.querySelector(".educationList");
let skillList = document.querySelector(".skillList");
let loadingStatus = document.querySelector(".status");


async function getCV() {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();

        loadingStatus.innerText = "";
       
      const cvKeys = Object.keys(data)

      cvKeys.forEach(key => {
   

        const cvItems = data[key];
        cvItems.forEach(cvItem => {
            if (cvItem.hasOwnProperty("name")) {
                
                const myRenderedCvItem = document.createElement("div")
                myRenderedCvItem.innerHTML = `
                <strong>${cvItem.name}</strong>
                `;
                
                basicList.appendChild(myRenderedCvItem);
            }
            if (cvItem.hasOwnProperty("company")) {
             
                const myRenderedCvItem = document.createElement("div")
                myRenderedCvItem.innerHTML = `
                <strong>${cvItem.company}</strong>
                <p>${cvItem.position}</p>
                <p>${cvItem.startDate}</p>
                <p>${cvItem.endDate}</p>
                <br>
                `;
               
                employmentList.appendChild(myRenderedCvItem);
            }
            if (cvItem.hasOwnProperty("school")) {
              
                const myRenderedCvItem = document.createElement("div")
                myRenderedCvItem.innerHTML = `
                <br>
                <strong>${cvItem.school}</strong>
                <p>${cvItem.type}</p>
                <p>${cvItem.year}</p>
                <br>
                `;
               
                educationList.appendChild(myRenderedCvItem);
            }
            if (cvItem.hasOwnProperty("skills")) {
                const myRenderedCvItem = document.createElement("div")
                myRenderedCvItem.innerHTML = `
                <strong>${cvItem.skills}</strong>
                <br>
                <strong>${cvItem.inProgress}</strong>
                `;
              
                skillList.appendChild(myRenderedCvItem);
            }

            console.log(cvItem)
        })

      })

        
    }
    else {
        console.log("HTTP error: " + response.status);
        myList.innerHTML = `<li>No CV data found</li`;
    }
}
getCV();