let ettMeasurements;
let infantMeasurements;
let surfaceAreaTable;
let emergencyDrugs;
let intubationDrugs;
let bolusDrugs;
let fluidInfusions;
let sedationInfusions;
let cardiacInfusions;
let otherInfusions;

fetch('./constants.json')
    .then(response => response.json())
    .then(data => {
        ettMeasurements = data.ettMeasurements;
        infantMeasurements = data.infantMeasurements;
        surfaceAreaTable = data.surfaceAreaTable;
        emergencyDrugs = parseInfusions(data.emergencyDrugs);
        intubationDrugs = parseInfusions(data.intubationDrugs);
        bolusDrugs = parseInfusions(data.bolusDrugs);
        fluidInfusions = parseInfusions(data.fluidInfusions);
        sedationInfusions = parseInfusions(data.sedationInfusions);
        cardiacInfusions = parseInfusions(data.cardiacInfusions);
        otherInfusions = parseInfusions(data.otherInfusions);
    })
    .catch(error => console.error('Error loading constants:', error));

function parseInfusions(infusions) {
    return infusions.map(infusion => ({
        ...infusion,
        standardRegime: eval(infusion.standardRegime),
        calculatedRegime: eval(infusion.calculatedRegime),
        startingRate: eval(infusion.startingRate),
        dose: eval(infusion.dose),
        calculatedDose: eval(infusion.calculatedDose),
        calculatedVolume: eval(infusion.calculatedVolume)
    }));
}

function calculateAge(birthDate) {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }
    return { years, months };
}

function calculateAgeInDays(birthDate) {
    const today = new Date();
    const timeDiff = today - birthDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}

function calculateEstimatedWeight(ageInDays) {
    let weight;
    if (ageInDays < 366) {
        weight = Math.round(ageInDays / 60) + 4;
    } else if (ageInDays < 2190) {
        weight = (Math.floor(ageInDays / 365) * 2) + 8;
    } else {
        weight = (Math.floor(ageInDays / 365) * 3) + 7;
    }
    return weight;
}

function calculateFluidBolus(weight) {
    return weight * 10; // 10ml/kg
}

function calculateDefibrillation(weight) {
    if (weight > 37.5) {
        return "150J (max - biphasic)";
    } else if (weight > 10) {
        return `${Math.round(weight * 4 / 10) * 10} J`; // Round to nearest 10
    } else {
        return `${Math.ceil(weight * 4 / 5) * 5} J`; // Round up to nearest 5
    }
}

function getNearestMeasurement(table, value) {
    const keys = Object.keys(table).map(Number).sort((a, b) => a - b);
    let nearestKey = keys[0];
    for (let key of keys) {
        if (value >= key) {
            nearestKey = key;
        } else {
            break;
        }
    }
    return table[nearestKey];
}

function getSurfaceArea(weight) {
    const entry = surfaceAreaTable.find(row => row.weight === weight);
    return entry ? entry.surfaceArea : null;
}

function boldText(text) {
    return text.replace(/(Central|Peripheral)/g, '<strong>$1</strong>');
}
function formatValue(value) {
    return value.replace(/(\d+(\.\d+)?)(\s*micrograms)/g, (match, numStr, _, unit) => {
        const num = Number(numStr);
        if (num > 1000) {
            return `${(num / 1000).toFixed(2).replace(/\.?0+$/, '')} mg`;
        }
        return match;
    }).replace(/(\d+(\.\d+)?)(\s*mg)/g, (match, numStr, _, unit) => {
        const num = Number(numStr);
        if (num > 1000) {
            return `${(num / 1000).toFixed(2).replace(/\.?0+$/, '')} g`;
        }
        return match;
    }).replace(/(\d+(\.\d+)?)/g, (match) => {
        const num = Number(match);
        if (num < 0.01) {
            return num.toPrecision(1).replace(/\.?0+$/, '');
        }
        return Number.isInteger(num) ? num.toString() : num.toFixed(2).replace(/\.?0+$/, '');
    });
}

function displayResults(measurements, suctionCatheterMeasurement, fluidBolus, defibrillation, urinaryCatheterMeasurement, chestDrainMeasurement, weight, patientAgeInDays, surfaceArea) {
    const tubeSizesTable = document.getElementById('tube-sizes');
    const emergencyDrugsTable = document.getElementById('emergency-drugs');
    const intubationDrugsTable = document.getElementById('intubation-drugs');
    const bolusDrugsTable = document.getElementById('bolus-drugs');
    const fluidsTable = document.getElementById('fluids');
    const sedationInfusionsTable = document.getElementById('sedation-infusions');
    const cardiacInfusionsTable = document.getElementById('cardiac-infusions'); 
    const otherInfusionsTable = document.getElementById('other-infusions');

    tubeSizesTable.innerHTML = `
        <caption>Tube Sizes / Emergency Calculations</caption>
        <caption style="font-size: 1em;">All values are starting suggestions only</caption>
        <tbody>
            <tr>
                <th>ETT Tube Diameter</th>
                <td>${measurements.diameter} mm</td>
            </tr>
            <tr>
                <th>ETT Length (Lips)</th>
                <td>${measurements.lengthLips} cm</td>
            </tr>
            <tr>
                <th>ETT Length (Nose)</th>
                <td>${measurements.lengthNose} cm</td>
            </tr>
            <tr>
                <th>ETT Suction Catheter</th>
                <td>${suctionCatheterMeasurement.suctionCatheter} Fr</td>
            </tr>
            <tr>
                <th>Fluid Bolus (10ml/kg)</th>
                <td>${fluidBolus} ml</td>
            </tr>
            <tr>
                <th>Defibrillation (4J/kg)</th>
                <td>${defibrillation}</td>
            </tr>
            <tr>
                <th>Urinary Catheter</th>
                <td>${urinaryCatheterMeasurement.urinaryCatheter} Fr</td>
            </tr>
            <tr>
                <th>Chest Drain</th>
                <td>${chestDrainMeasurement.chestDrain} Fr</td>
            </tr>
        </tbody>
    `;

    function createDrugRow(infusion) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${boldText(infusion.name)}</td>
            <td>${formatValue(infusion.dose(weight))}</td>
            <td>${formatValue(infusion.calculatedDose(weight))}</td>
            <td>${infusion.concentration}</td>
            <td>${formatValue(infusion.calculatedVolume(weight))}</td>
        `;
        row.addEventListener('click', () => {
            const modal = document.getElementById('description-modal');
            const descriptionContent = document.getElementById('description-content');
            descriptionContent.innerHTML = infusion.description; // Set the description content
            modal.style.display = 'block'; // Show the modal
        });
        return row;
    }

    // Close the modal when the user clicks the close button
    document.getElementById('close-description-modal').onclick = function() {
        document.getElementById('description-modal').style.display = 'none';
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        const modal = document.getElementById('description-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    emergencyDrugsTable.innerHTML = `
        <caption>Emergency Drug Doses</caption>
        <tr>
            <th>Drug</th>
            <th>Dose</th>
            <th>Calculated Dose</th>
            <th>Usual Concentration</th>
            <th>Calculated Volume</th>
        </tr>
    `;
    emergencyDrugs.forEach(infusion => {
        emergencyDrugsTable.appendChild(createDrugRow(infusion));
    });

    bolusDrugsTable.innerHTML = `
        <caption>Bolus Drugs</caption>
        <tr>
            <th>Drug</th>
            <th>Dose</th>
            <th>Calculated Dose</th>
        </tr>
        ${bolusDrugs.map(infusion => `
            <tr>
                <td>${boldText(infusion.name)}</td>
                <td>${formatValue(infusion.dose(weight))}</td>
                <td>${infusion.calculatedDose.length === 3 ? formatValue(infusion.calculatedDose(weight, patientAgeInDays, surfaceArea)) : formatValue(infusion.calculatedDose(weight))}</td>
            </tr>
        `).join('')}
    `;

    intubationDrugsTable.innerHTML = `
        <caption>Intubation Drugs</caption>
        <tr>
            <th>Drug</th>
            <th>Dose</th>
            <th>Calculated Dose</th>
            <th>Usual Concentration</th>
            <th>Calculated Volume</th>
        </tr>
        ${intubationDrugs.map(infusion => `
            <tr>
                <td>${boldText(infusion.name)}</td>
                <td>${formatValue(infusion.dose(weight))}</td>
                <td>${formatValue(infusion.calculatedDose(weight))}</td>
                <td>${infusion.concentration}</td>
                <td>${formatValue(infusion.calculatedVolume(weight))}</td>
            </tr>
        `).join('')}
    `;

    fluidsTable.innerHTML = `
        <caption>Fluids</caption>
        <tr>
            <th>Requirement</th>
            <th>Calculated Dose</th>
        </tr>
        ${fluidInfusions.map(infusion => `
            <tr>
                <td>${boldText(infusion.name)}</td>
                <td>${formatValue(infusion.calculatedDose(weight))}</td>
            </tr>
        `).join('')}
    `;

    sedationInfusionsTable.innerHTML = `
        <caption>Sedation Infusions</caption>
        <tr>
            <th>Drug</th>
            <th>Standard Regime</th>
            <th>Calculated Regime</th>
            <th>Starting Rate</th>
        </tr>
        ${sedationInfusions.map(infusion => `
            <tr>
                <td>${boldText(infusion.name)}</td>
                <td>${formatValue(infusion.standardRegime(weight))}</td>
                <td>${formatValue(infusion.calculatedRegime(weight))}</td>
                <td>${formatValue(infusion.startingRate(weight))}</td>
            </tr>
        `).join('')}
    `;
    cardiacInfusionsTable.innerHTML = `
        <caption>Cardiac Infusions</caption>
        <tr>
            <th>Drug</th>
            <th>Standard Regime</th>
            <th>Calculated Regime</th>
            <th>Starting Rate</th>
        </tr>
        ${cardiacInfusions.map(infusion => `
            <tr>
                <td>${boldText(infusion.name)}</td>
                <td>${formatValue(infusion.standardRegime(weight))}</td>
                <td>${formatValue(infusion.calculatedRegime(weight))}</td>
                <td>${formatValue(infusion.startingRate(weight))}</td>
            </tr>
        `).join('')}
    `;
    otherInfusionsTable.innerHTML = `
        <caption>Other Infusions</caption>
        <tr>
            <th>Drug</th>
            <th>Standard Regime</th>
            <th>Calculated Regime</th>
            <th>Starting Rate</th>
        </tr>
        ${otherInfusions.map(infusion => `
            <tr>
                <td>${boldText(infusion.name)}</td>
                <td>${formatValue(infusion.standardRegime(weight))}</td>
                <td>${formatValue(infusion.calculatedRegime(weight))}</td>
                <td>${formatValue(infusion.startingRate(weight))}</td>
            </tr>
        `).join('')}
    `;
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt event triggered'); // Log event trigger
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can install the PWA
    const installButtonContainer = document.querySelector('.install-button-container');
    installButtonContainer.style.display = 'block';

    const installButton = document.getElementById('install-button');
    installButton.addEventListener('click', () => {
        console.log('Install button clicked'); // Log button click
        // Hide the install button container
        installButtonContainer.style.display = 'none';
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // New update available
                            const updateNotification = document.createElement('div');
                            updateNotification.className = 'update-notification';
                            updateNotification.innerHTML = `
                                <p>New version available. <button id="refresh">Refresh</button></p>
                            `;
                            document.body.appendChild(updateNotification);

                            document.getElementById('refresh').addEventListener('click', () => {
                                installingWorker.postMessage('SKIP_WAITING');
                            });
                        }
                    }
                };
            };
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });

        let refreshing;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            window.location.reload();
            refreshing = true;
        });
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            navigator.serviceWorker.getRegistration().then(registration => {
                if (registration) {
                    registration.update();
                }
            });
        }
    });
}

function isIos() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}

function isInStandaloneMode() {
    return ('standalone' in window.navigator) && (window.navigator.standalone);
}

if (isIos() && !isInStandaloneMode()) {
    const iosInstallModal = document.getElementById('ios-install-modal');
    const closeIosModalButton = document.getElementById('close-ios-modal');
    iosInstallModal.style.display = 'block';

    closeIosModalButton.onclick = function() {
        iosInstallModal.style.display = 'none';
    };
}

window.addEventListener('beforeprint', () => {
    fetch('https://abacus.jasoncameron.dev/hit/watchdrugcalculator/pageprints')
        .then(response => response.json())
        .then(data => console.log('Page print recorded:', data))
        .catch(error => console.error('Error recording page print:', error));
});

document.addEventListener("DOMContentLoaded", () => {

    fetch('https://abacus.jasoncameron.dev/hit/watchdrugcalculator/pageviews')
        .then(response => response.json())
        .then(data => console.log('Page view recorded:', data))
        .catch(error => console.error('Error recording page view:', error));

    fetch('https://abacus.jasoncameron.dev/get/watchdrugcalculator/pageviews')
        .then(response => response.json())
        .then(data => {
            document.getElementById('page-views').textContent = data.value;
        })
        .catch(error => {
            console.error('Error recording page view:', error);
            document.getElementById('page-views').textContent = 'Error';
        });

    fetch('https://abacus.jasoncameron.dev/get/watchdrugcalculator/submitbutton')
        .then(response => response.json())
        .then(data => {
            document.getElementById('submit-button-clicks').textContent = data.value;
        })
        .catch(error => {
            console.error('Error recording submit button click:', error);
            document.getElementById('submit-button-clicks').textContent = 'Error';
        });

    fetch('https://abacus.jasoncameron.dev/get/watchdrugcalculator/pageprints')
        .then(response => response.json())
        .then(data => {
            document.getElementById('page-prints').textContent = data.value;
        })
        .catch(error => {
            console.error('Error recording page print:', error);
            document.getElementById('page-prints').textContent = 'Error';
        });

    const ageMethodRadios = document.querySelectorAll('input[name="age-method"]');
    const dobInput = document.getElementById("dob-input");
    const estimatedAgeInput = document.getElementById("estimated-age-input");
    const dobField = document.getElementById("dob");
    const ageDisplay = document.getElementById("age-display");
    const ageValueInput = document.getElementById("age-value");
    const ageUnitSelect = document.getElementById("age-unit");
    const weightField = document.getElementById("weight");
    const estimateWeightButton = document.getElementById("estimate-weight");
    const submitButton = document.getElementById("submit-button");
    const logo = document.getElementById("logo");
    const shareIcon = document.getElementById("share-icon");
    const qr = document.getElementById("qr");

    const updateLogo = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            logo.src = "images/logo-dark.png";
            shareIcon.src = "images/ios-share-icon-light.png";
            qr.src = "images/qr-dark.png";
        } else {
            logo.src = "images/logo-light.png";
            shareIcon.src = "images/ios-share-icon-dark.png";
            qr.src = "images/qr-light.png";
        }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateLogo);

    updateLogo();

    const printPatientName = document.getElementById("print-patient-name");
    const printDob = document.getElementById("print-dob");
    const printAge = document.getElementById("print-age");
    const printWeight = document.getElementById("print-weight");

    let patientAgeInDays = 0;

    function clearAgeData() {
        ageValueInput.value = '';
        ageUnitSelect.value = 'years';
        dobField.value = '';
        ageDisplay.textContent = '';
        patientAgeInDays = 0;
    }

    ageMethodRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            clearAgeData();
            if (radio.value === "dob") {
                dobInput.style.display = "block";
                estimatedAgeInput.style.display = "none";
            } else {
                dobInput.style.display = "none";
                estimatedAgeInput.style.display = "block";
            }
        });
    });

    dobField.addEventListener("change", () => {
        const dob = new Date(dobField.value);
        const age = calculateAge(dob);
        if (age.years > 18) {
            alert("Age cannot be greater than 18 years.");
            dobField.value = '';
            ageDisplay.textContent = '';
            return;
        }
        patientAgeInDays = calculateAgeInDays(dob);
        ageDisplay.textContent = `Age: ${age.years} years and ${age.months} months`;
        printDob.textContent = dobField.value;
        printAge.textContent = `${age.years} years and ${age.months} months`;
    });

    ageValueInput.addEventListener("input", updateEstimatedAgeInDays);
    ageUnitSelect.addEventListener("change", updateEstimatedAgeInDays);

    function updateEstimatedAgeInDays() {
        const ageValue = parseInt(ageValueInput.value) || 0;
        const ageUnit = ageUnitSelect.value;
        if (ageUnit === "years" && ageValue > 18) {
            alert("Age cannot be greater than 18 years.");
            ageValueInput.value = '';
            ageDisplay.textContent = '';
            return;
        }
        if (ageUnit === "years") {
            patientAgeInDays = ageValue * 365;
        } else if (ageUnit === "months") {
            patientAgeInDays = ageValue * 30;
        }
        ageDisplay.textContent = `Age: ${ageValue} ${ageUnit}`;
        printAge.textContent = `Age: ${ageValue} ${ageUnit}`;
    }

    estimateWeightButton.addEventListener("click", () => {
        if (patientAgeInDays > 0) {
            const estimatedWeight = calculateEstimatedWeight(patientAgeInDays);
            weightField.value = estimatedWeight;
            printWeight.textContent = `${estimatedWeight} kg`;
        } else {
            alert("Please enter the date of birth or estimated age to calculate weight.");
        }
    });

    submitButton.addEventListener("click", () => {

        fetch('https://abacus.jasoncameron.dev/hit/watchdrugcalculator/submitbutton')
            .then(response => response.json())
            .then(data => console.log('Submit button click recorded:', data))
            .catch(error => console.error('Error recording submit button click:', error));

        const weight = parseFloat(weightField.value);
        const dob = dobField.value;
        const ageValue = ageValueInput.value;
        const ageUnit = ageUnitSelect.value;

        if (!dob && !ageValue) {
            alert("Please enter either a date of birth or an age.");
            return;
        }

        if (!weight || weight <= 0) {
            alert("Please enter a valid weight.");
            return;
        }

        if (weight > 150) {
            alert("Weight cannot be greater than 150 kg.");
            return;
        }

        const nearestMeasurement = getNearestMeasurement(ettMeasurements, patientAgeInDays);
        const minWeight = nearestMeasurement.minWeight;
        const maxWeight = nearestMeasurement.maxWeight;

        if (weight < minWeight || weight > maxWeight) {
            alert(`Warning: The entered weight (${weight} kg) is outside the recommended range (${minWeight} kg - ${maxWeight} kg).`);
        }

        const patientName = document.getElementById("patient-name").value;
        printPatientName.textContent = patientName;
        document.getElementById("print-patient-name-2").textContent = patientName;

        if (dob) {
            const dobFormatted = new Date(dob).toLocaleDateString('en-GB');
            printDob.textContent = dobFormatted;
            document.getElementById("print-dob-2").textContent = dobFormatted;
            printAge.textContent = 'N/A';
            document.getElementById("print-age-2").textContent = 'N/A';
        } else {
            printAge.textContent = `Age: ${ageValue} ${ageUnit}`;
            document.getElementById("print-age-2").textContent = `Age: ${ageValue} ${ageUnit}`;
            printDob.textContent = 'N/A';
            document.getElementById("print-dob-2").textContent = 'N/A';
        }

        printWeight.textContent = `${weight} kg`;
        document.getElementById("print-weight-2").textContent = `${weight} kg`;

        const surfaceArea = getSurfaceArea(weight);

        let measurements;
        let suctionCatheterMeasurement;
        let fluidBolus;
        let defibrillation;
        let urinaryCatheterMeasurement;
        let chestDrainMeasurement;

        if (weight < 3.2) {
            measurements = getNearestMeasurement(infantMeasurements, weight);
        } else {
            measurements = getNearestMeasurement(ettMeasurements, patientAgeInDays);
        }

        suctionCatheterMeasurement = getNearestMeasurement(ettMeasurements, patientAgeInDays);
        urinaryCatheterMeasurement = getNearestMeasurement(ettMeasurements, patientAgeInDays);
        chestDrainMeasurement = getNearestMeasurement(ettMeasurements, patientAgeInDays);
        fluidBolus = calculateFluidBolus(weight);
        defibrillation = calculateDefibrillation(weight);

        displayResults(measurements, suctionCatheterMeasurement, fluidBolus, defibrillation, urinaryCatheterMeasurement, chestDrainMeasurement, weight, patientAgeInDays, surfaceArea);
    });

    // Modal functionality
    const modal = document.getElementById("disclaimer-modal");
    const closeModalButton = document.getElementById("close-modal");

    // Show the modal on page load
    window.onload = function() {
        modal.style.display = "block";
    };

    // Close the modal when the user clicks the OK button
    closeModalButton.onclick = function() {
        modal.style.display = "none";
    }
});