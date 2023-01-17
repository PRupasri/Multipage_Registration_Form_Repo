const customBtn = document.getElementById("custom-button");
const customTextBtn = document.getElementById("custom-text");
var realFileBtn = document.getElementById("real-file");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.onchange = function() {
    if (this.files[0].size > 4 * 1048576) {
        alert("max size limit exceeded");
        this.value = "";
    } else {
        customTextBtn.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }

};

var hscFileBtn = document.getElementById("hsc-file");
const hscBtn = document.getElementById("hsc-button");
const hscTextBtn = document.getElementById("hsc-text");

hscBtn.addEventListener("click", function() {
    hscFileBtn.click();
});

hscFileBtn.onchange = function() {
    if (this.files[0].size > 4 * 1048576) {
        alert("max size limit exceeded");
        this.value = "";
    } else {
        hscTextBtn.innerHTML = hscFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }

}

const sscBtn = document.getElementById("ssc-button");
const sscTextBtn = document.getElementById("ssc-text");
var sscFileBtn = document.getElementById("ssc-file");

sscBtn.addEventListener("click", function() {
    sscFileBtn.click();
});

sscFileBtn.onchange = function() {
    if (this.files[0].size > 4 * 1048576) {
        alert("max size limit exceeded");
        this.value = "";
    } else {
        sscTextBtn.innerHTML = sscFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }

}

const semBtn = document.getElementById("sem-button");
const semTextBtn = document.getElementById("sem-text");
var semFileBtn = document.getElementById("sem-file");

semBtn.addEventListener("click", function() {
    semFileBtn.click();
});

semFileBtn.onchange = function() {
    if (this.files[0].size > 10 * 1048576) {
        alert("max size limit exceeded");
        this.value = "";
    } else {
        semTextBtn.innerHTML = semFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }

};


function getApplicationDataFromLocalStorage() {
    let strigifiedApplicationData = localStorage.getItem("ApplicationDataList");
    let parsedApplicationList = JSON.parse(strigifiedApplicationData);
    if (parsedApplicationList === null) {
        return [];
    } else {
        return parsedApplicationList;
    }
}

let ApplicationDataList = getApplicationDataFromLocalStorage();
let ApplicationCount = ApplicationDataList.length;

let x = false;

function test() {
    event.preventDefault();
    let firstNameEl = document.getElementById("firstName");
    let lastNameEl = document.getElementById("lastName");
    let dateEl = document.getElementById("dateOfBirth");
    let emailEl = document.getElementById("email");
    let fatherFirstNameEl = document.getElementById("fatherName1");
    let fatherLastNameEl = document.getElementById("fatherName2");
    let motherFirstNameEl = document.getElementById("motherName1");
    let motherLastNameEl = document.getElementById("motherName2");
    let genderEl = document.querySelector('input[name="gender"]:checked');
    let nationalityEl = document.getElementById("nationality");
    let addressEl = document.getElementById("homeAddress");
    let cityEl = document.getElementById("homeAddressCity");
    let statusEl = document.getElementById("status");
    let telephoneHomeEl = document.getElementById("telephoneHome");
    let telephoneMobileEl = document.getElementById("telephoneMobile");
    let hscEl = document.getElementById("hsc");
    let hscStatusEl = document.getElementById("hscStatus");
    let hscScoreEl = document.getElementById("hscScore");
    let sscStatusEl = document.getElementById("sscStatus");
    let sscBoardEl = document.getElementById("sscBoard");
    let sscScoreEl = document.getElementById("sscScore");
    let studyingEl = document.querySelector('input[name="studying"]:checked');
    let institutionNameEle = document.getElementById("instituteName");
    let selectedIdEle = document.getElementById("selectedId");
    let educationBranchEl = document.getElementById("educationBranch");
    let overallPercentEl = document.getElementById("overallPercent");
    let backlogsEl = document.getElementById("backlogs");

    let profile = {
        applicantName: firstNameEl.value + lastNameEl.value,
        date: dateEl.value,
        email: emailEl.value,
        fatherName: fatherFirstNameEl.value + fatherLastNameEl.value,
        motherName: motherFirstNameEl.value + motherLastNameEl.value,
        gender: genderEl.value,
        nationality: nationalityEl.value,
        address: addressEl.value,
        city: cityEl.value,
        status: statusEl.value,
        telephoneHome: telephoneHomeEl.value,
        telephoneMobile: telephoneMobileEl.value,
        hsc: hscEl.value,
        hscStatus: hscStatusEl.value,
        hscScore: hscScoreEl.value,
        sscStatus: sscStatusEl.value,
        sscBoard: sscBoardEl.value,
        sscScore: sscScoreEl.value,
        studying: studyingEl.value,
        instituteName: "NA",
        selectedId: "NA",
        educationBranch: "NA",
        overallPercent: overallPercentEl.value,
        backlogs: backlogsEl.value,
        photoFile: realFileBtn.value,
        hscFile: hscFileBtn.value,
        sscFile: sscFileBtn.value,
        semFile: semFileBtn.value
    };
    console.log(x)
    if (x) {
        profile = {
            ...profile,
            instituteName: institutionNameEle.value,
            selectedId: selectedIdEle.value,
            educationBranch: educationBranchEl.value,
        }
    }

    ApplicationCount = ApplicationCount + 1;

    let new_profile_info = {
        uniqueNo: ApplicationCount,
        profile: profile,
    };

    ApplicationDataList.push(new_profile_info);

    localStorage.setItem("ApplicationDataList", JSON.stringify(ApplicationDataList));

    console.log(JSON.stringify(ApplicationDataList));



    firstNameEl.value = "";
    lastNameEl.value = "";
    dateEl.value = "";
    emailEl.value = "";
    fatherFirstNameEl.value = "";
    fatherLastNameEl.value = "";
    motherFirstNameEl.value = "";
    motherLastNameEl.value = "";
    genderEl.value = "";
    nationalityEl.value = "";
    addressEl.value = "";
    cityEl.value = "";
    statusEl.value = "";
    telephoneHomeEl.value = "";
    telephoneMobileEl.value = "";
    hscEl.value = "";
    hscStatusEl.value = "";
    hscScoreEl.value = "";
    sscStatusEl.value = "";
    sscBoardEl.value = "";
    sscScoreEl.value = "";
    studyingEl.value = "";
    overallPercentEl.value = "";
    backlogsEl.value = "";
    customTextBtn.textContent = "No Choosen File";
    hscTextBtn.textContent = "No Choosen File";
    sscTextBtn.textContent = "No Choosen File";
    semTextBtn.textContent = "No Choosen File";
    if (x) {
        institutionNameEle.value = "";
        selectedIdEle.value = "";
        educationBranchEl.value = "";
    }

}



let submitBtnEl = document.getElementById("submitBtn");
let submittedEl = document.getElementById("submitted");
submitBtnEl.addEventListener("click", function() {

    alert("Your Data Submitted Successfully!");
});



const firstNameEl = document.getElementById("firstName");
const nameErrMsgEl = document.getElementById("nameErrMsg");



firstNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
        nameErrMsgEl.textContent.color = "red";
    } else {
        if (event.target.value.includes(" ")) {
            nameErrMsgEl.textContent = "Invalid Format";
        } else {
            nameErrMsgEl.textContent = "";
        }
    }
});

const dateOfBirthEl = document.getElementById("dateOfBirth");
const dobErrMsgEl = document.getElementById("dobErrMsg");

dateOfBirthEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        dobErrMsgEl.textContent = "Required*";
    } else {
        dobErrMsgEl.textContent = "";
    }
});

const emailEl = document.getElementById("email");
const emailErrMsgEl = document.getElementById("emailErrMsg");

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        if ((event.target.value).includes("@")) {
            emailErrMsgEl.textContent = "";
        } else {
            emailErrMsgEl.textContent = "Invalid Email";
        }
    }
});

const fatherName1El = document.getElementById("fatherName1");
const fatherErrMsgEl = document.getElementById("fatherErrMsg");

fatherName1El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        fatherErrMsgEl.textContent = "Required*";
    } else {
        if (event.target.value.includes(" ")) {
            fatherErrMsgEl.textContent = "Invalid Format";
        } else {
            fatherErrMsgEl.textContent = "";
        }
    }
});

const motherName1El = document.getElementById("motherName1");
const motherErrMsgEl = document.getElementById("motherErrMsg");

motherName1El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        motherErrMsgEl.textContent = "Required*";
    } else {
        if (event.target.value.includes(" ")) {
            motherErrMsgEl.textContent = "Invalid Format";
        } else {
            motherErrMsgEl.textContent = "";
        }
    }
});

const nationalityEl = document.getElementById("nationality");
const nationalityErrMsgEl = document.getElementById("nationalityErrMsg");

nationalityEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nationalityErrMsg.textContent = "Required*";
    } else {
        if (event.target.value.includes(" ")) {
            nationalityErrMsg.textContent = "Invalid Format";
        } else {
            nationalityErrMsg.textContent = "";
        }
    }
});

const homeAddressEl = document.getElementById("homeAddress");
const homeAddressErrMsgEl = document.getElementById("homeAddressErrMsg");

homeAddressEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        homeAddressErrMsgEl.textContent = "Required*";
    } else {
        homeAddressErrMsgEl.textContent = "";
    }
});

const telephoneMobileEl = document.getElementById("telephoneMobile");
const telephoneMobileErrMsgEl = document.getElementById("telephoneMobileErrMsg");

telephoneMobileEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        telephoneMobileErrMsgEl.textContent = "Required*";
    } else {
        if (event.target.value.length === 10) {
            telephoneMobileErrMsgEl.textContent = "";
        } else {
            telephoneMobileErrMsgEl.textContent = "10 digit mobile number required";
        }
    }
});

const hscEl = document.getElementById("hsc");
const hscErrMsgEl = document.getElementById("hscErrMsg");

hscEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscErrMsgEl.textContent = "Required*";
    } else {
        hscErrMsgEl.textContent = "";
    }
});

const hscBoardEl = document.getElementById("hscBoard");
const hscStatusErrMsgEl = document.getElementById("hscStatusErrMsg");

hscBoardEl.addEventListener("change", function(event) {
    if ((event.target.value !== "ICSC") && (event.target.value !== "CBSE") && (event.target.value !== "State Board")) {
        hscStatusErrMsgEl.textContent = "Required*";
    } else {
        hscStatusErrMsgEl.textContent = "";
    }
});

const hscScoreEl = document.getElementById("hscScore");
const hscScoreErrMsgEl = document.getElementById("hscScoreErrMsg");

hscScoreEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        hscScoreErrMsgEl.textContent = "Required*";
    } else {
        hscScoreErrMsgEl.textContent = "";
    }
});

const sscStatusEl = document.getElementById("sscStatus");
const sscStatusErrMsgEl = document.getElementById("sscStatusErrMsg");

sscStatusEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscStatusErrMsgEl.textContent = "Required*";
    } else {
        sscStatusErrMsgEl.textContent = "";
    }
});

const sscBoardEl = document.getElementById("sscBoard");
const sscBoardErrMsgEl = document.getElementById("sscBoardErrMsg");

sscBoardEl.addEventListener("change", function(event) {
    if ((event.target.value !== "ICSC") && (event.target.value !== "CBSE") && (event.target.value !== "State Board")) {
        sscBoardErrMsgEl.textContent = "Required*";
    } else {
        hscStatusErrMsgEl.textContent = "";
    }
});

const sscScoreEl = document.getElementById("sscScore");
const sscScoreErrMsgEl = document.getElementById("sscScoreErrMsg");

sscScoreEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        sscScoreErrMsgEl.textContent = "Required*";
    } else {
        sscScoreErrMsgEl.textContent = "";
    }
});


const onClick = document.getElementById("onClickRadio");

const pursuing = document.getElementById("pursuing");

onClick.addEventListener("change", function(event) {

    if (event.target.value === "Yes") {
        x = true
        let inputContainer = document.createElement("div");
        let labelElement = document.createElement("label");
        labelElement.setAttribute("for", "head");
        labelElement.id = "labelId";
        labelElement.classList.add("checkbox-label", "name");
        labelElement.textContent = "Current Education institutaion Name:";
        inputContainer.appendChild(labelElement);
        pursuing.appendChild(inputContainer);

        let labelSpanEl = document.createElement("span");
        labelSpanEl.textContent = "*";
        labelSpanEl.classList.add("star");
        labelElement.appendChild(labelSpanEl);

        let instituteNameEl = document.createElement("input");
        instituteNameEl.id = "instituteName";
        instituteNameEl.placeholder = "Enter Institutaion Name";
        instituteNameEl.classList.add("size");
        inputContainer.appendChild(instituteNameEl);
        pursuing.appendChild(inputContainer);


        let eduLabel = document.createElement("label");
        eduLabel.setAttribute("for", "education");

        eduLabel.classList.add("checkbox-label", "name");
        eduLabel.textContent = "Qualification:";
        inputContainer.appendChild(eduLabel);
        pursuing.appendChild(inputContainer);


        let selectEl = document.createElement("select");
        selectEl.id = "selectedId";
        selectEl.classList.add("board-type", "form-control", "mb-3");
        inputContainer.appendChild(selectEl);
        pursuing.appendChild(inputContainer);

        let option1 = document.createElement("option");
        option1.textContent = "Intermediate";
        option1.setAttribute("value", "Intermediate");
        option1.classList.add("board-type", "form-control");
        selectEl.appendChild(option1)
        inputContainer.appendChild(selectEl);

        let option2 = document.createElement("option");
        option2.textContent = "Degree";
        option2.setAttribute("value", "Degree");
        option2.classList.add("board-type", "form-control");
        selectEl.appendChild(option2)
        inputContainer.appendChild(selectEl);

        let option3 = document.createElement("option");
        option3.textContent = "B-Tech/BE";
        option3.setAttribute("value", "B-Tech/BE");
        option3.classList.add("board-type", "form-control");
        selectEl.appendChild(option3)
        inputContainer.appendChild(selectEl);

        let option4 = document.createElement("option");
        option4.textContent = "Others";
        option4.setAttribute("value", "Others");
        option4.classList.add("board-type", "form-control");
        selectEl.appendChild(option4)
        inputContainer.appendChild(selectEl);

        let eduBranchLabel = document.createElement("label");
        eduBranchLabel.setAttribute("for", "educationBranch");

        eduBranchLabel.classList.add("checkbox-label", "name");
        eduBranchLabel.textContent = "Branch:";
        inputContainer.appendChild(eduBranchLabel);
        pursuing.appendChild(inputContainer);

        let eduBranch = document.createElement("input");
        eduBranch.id = "educationBranch";
        eduBranch.setAttribute("placeholder", "B.Tech in Mechanical Engineering");
        eduBranch.classList.add("form-control", "board-type");
        inputContainer.appendChild(eduBranch);

    } else {
        x = false
        pursuing.textContent = "";
    }
})