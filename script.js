const ettMeasurements = {
    0: { diameter: "3.0", lengthLips: "11.0", lengthNose: "14.0", suctionCatheter: "6", urinaryCatheter: "6", chestDrain: "8-10" },
    90: { diameter: "3.0", lengthLips: "12.0", lengthNose: "15.0", suctionCatheter: "7", urinaryCatheter: "6", chestDrain: "8-10" },
    180: { diameter: "3.0-3.5", lengthLips: "12.5", lengthNose: "15.5", suctionCatheter: "7-8", urinaryCatheter: "6", chestDrain: "8-10" },
    365: { diameter: "3.5", lengthLips: "13.0", lengthNose: "16.0", suctionCatheter: "8", urinaryCatheter: "6", chestDrain: "10-12" },
    730: { diameter: "4.0", lengthLips: "13.5", lengthNose: "16.5", suctionCatheter: "10", urinaryCatheter: "8", chestDrain: "10-12" },
    1095: { diameter: "4.0-4.5", lengthLips: "14.0", lengthNose: "17.0", suctionCatheter: "10", urinaryCatheter: "8", chestDrain: "10-12" },
    1460: { diameter: "4.5", lengthLips: "14.5", lengthNose: "17.5", suctionCatheter: "10", urinaryCatheter: "8", chestDrain: "12-14" },
    1825: { diameter: "4.5-5.0", lengthLips: "15.0", lengthNose: "18.0", suctionCatheter: "12", urinaryCatheter: "8", chestDrain: "12-14" },
    2190: { diameter: "5.0", lengthLips: "15.5", lengthNose: "18.5", suctionCatheter: "12", urinaryCatheter: "8", chestDrain: "12-14" },
    2555: { diameter: "5.0-5.5", lengthLips: "16.0", lengthNose: "19.0", suctionCatheter: "12", urinaryCatheter: "8", chestDrain: "12-14" },
    2920: { diameter: "6.0-6.5", lengthLips: "16.5", lengthNose: "19.5", suctionCatheter: "12", urinaryCatheter: "8", chestDrain: "14-16" },
    3285: { diameter: "6.0-6.5", lengthLips: "17.0", lengthNose: "20.0", suctionCatheter: "12", urinaryCatheter: "8", chestDrain: "14-16" },
    3650: { diameter: "7.0", lengthLips: "17.5", lengthNose: "20.5", suctionCatheter: "12", urinaryCatheter: "10", chestDrain: "14-16" },
    4015: { diameter: "7.0", lengthLips: "18.0", lengthNose: "21.0", suctionCatheter: "12", urinaryCatheter: "10", chestDrain: "14-16" },
    4380: { diameter: "7.0-7.5", lengthLips: "18.5", lengthNose: "21.5", suctionCatheter: "12", urinaryCatheter: "10", chestDrain: "16-20" },
    4745: { diameter: "7.0-7.5", lengthLips: "21.0", lengthNose: "24.0", suctionCatheter: "12", urinaryCatheter: "10", chestDrain: "16-20" },
    5110: { diameter: "7.0-8.0", lengthLips: "21.0", lengthNose: "2.0", suctionCatheter: "12", urinaryCatheter: "12", chestDrain: "16-20" },
};

const infantMeasurements = {
    0.7: { diameter: "Uncuffed 2.5", lengthLips: "7.5", lengthNose: "9.0" },
    1.1: { diameter: "Uncuffed 2.5", lengthLips: "8.0", lengthNose: "9.5" },
    1.6: { diameter: "Uncuffed 3.0", lengthLips: "8.5", lengthNose: "10.0" },
    2.1: { diameter: "3.0", lengthLips: "9.0", lengthNose: "10.5" },
    2.6: { diameter: "3.0", lengthLips: "9.5", lengthNose: "11.0" },
};

const surfaceAreaTable = [
    { weight: 2.5, surfaceArea: 0.19 }, { weight: 3, surfaceArea: 0.21 }, { weight: 3.5, surfaceArea: 0.24 },
    { weight: 4, surfaceArea: 0.26 }, { weight: 4.5, surfaceArea: 0.28 }, { weight: 5, surfaceArea: 0.3 },
    { weight: 5.5, surfaceArea: 0.38 }, { weight: 6, surfaceArea: 0.38 }, { weight: 7, surfaceArea: 0.38 },
    { weight: 7.5, surfaceArea: 0.4 }, { weight: 8, surfaceArea: 0.42 }, { weight: 8.5, surfaceArea: 0.44 },
    { weight: 9, surfaceArea: 0.46 }, { weight: 9.5, surfaceArea: 0.47 }, { weight: 10, surfaceArea: 0.49 },
    { weight: 11, surfaceArea: 0.53 }, { weight: 12, surfaceArea: 0.56 }, { weight: 13, surfaceArea: 0.59 },
    { weight: 14, surfaceArea: 0.62 }, { weight: 15, surfaceArea: 0.65 }, { weight: 16, surfaceArea: 0.68 },
    { weight: 17, surfaceArea: 0.71 }, { weight: 18, surfaceArea: 0.74 }, { weight: 19, surfaceArea: 0.77 },
    { weight: 20, surfaceArea: 0.79 }, { weight: 21, surfaceArea: 0.82 }, { weight: 22, surfaceArea: 0.85 },
    { weight: 23, surfaceArea: 0.87 }, { weight: 24, surfaceArea: 0.9 }, { weight: 25, surfaceArea: 0.92 },
    { weight: 26, surfaceArea: 0.95 }, { weight: 27, surfaceArea: 0.97 }, { weight: 28, surfaceArea: 1 },
    { weight: 29, surfaceArea: 1 }, { weight: 30, surfaceArea: 1.1 }, { weight: 31, surfaceArea: 1.1 },
    { weight: 32, surfaceArea: 1.1 }, { weight: 33, surfaceArea: 1.1 }, { weight: 34, surfaceArea: 1.1 },
    { weight: 35, surfaceArea: 1.2 }, { weight: 36, surfaceArea: 1.2 }, { weight: 37, surfaceArea: 1.2 },
    { weight: 38, surfaceArea: 1.2 }, { weight: 39, surfaceArea: 1.3 }, { weight: 40, surfaceArea: 1.3 },
    { weight: 41, surfaceArea: 1.3 }, { weight: 42, surfaceArea: 1.3 }, { weight: 43, surfaceArea: 1.3 },
    { weight: 44, surfaceArea: 1.4 }, { weight: 45, surfaceArea: 1.4 }, { weight: 46, surfaceArea: 1.4 },
    { weight: 47, surfaceArea: 1.4 }, { weight: 48, surfaceArea: 1.4 }, { weight: 49, surfaceArea: 1.5 },
    { weight: 50, surfaceArea: 1.5 }, { weight: 51, surfaceArea: 1.5 }, { weight: 52, surfaceArea: 1.5 },
    { weight: 53, surfaceArea: 1.5 }, { weight: 54, surfaceArea: 1.6 }, { weight: 55, surfaceArea: 1.6 },
    { weight: 56, surfaceArea: 1.6 }, { weight: 57, surfaceArea: 1.6 }, { weight: 58, surfaceArea: 1.6 },
    { weight: 59, surfaceArea: 1.7 }, { weight: 60, surfaceArea: 1.7 }, { weight: 61, surfaceArea: 1.7 },
    { weight: 62, surfaceArea: 1.7 }, { weight: 63, surfaceArea: 1.7 }, { weight: 64, surfaceArea: 1.7 },
    { weight: 65, surfaceArea: 1.8 }, { weight: 66, surfaceArea: 1.8 }, { weight: 67, surfaceArea: 1.8 },
    { weight: 68, surfaceArea: 1.8 }, { weight: 69, surfaceArea: 1.8 }, { weight: 70, surfaceArea: 1.9 },
    { weight: 71, surfaceArea: 1.9 }, { weight: 72, surfaceArea: 1.9 }, { weight: 73, surfaceArea: 1.9 },
    { weight: 74, surfaceArea: 1.9 }, { weight: 75, surfaceArea: 1.9 }, { weight: 76, surfaceArea: 2 },
    { weight: 77, surfaceArea: 2 }, { weight: 78, surfaceArea: 2 }, { weight: 79, surfaceArea: 2 },
    { weight: 80, surfaceArea: 2 }, { weight: 81, surfaceArea: 2 }, { weight: 82, surfaceArea: 2.1 },
    { weight: 83, surfaceArea: 2.1 }, { weight: 84, surfaceArea: 2.1 }, { weight: 85, surfaceArea: 2.1 },
    { weight: 86, surfaceArea: 2.1 }, { weight: 87, surfaceArea: 2.1 }, { weight: 88, surfaceArea: 2.2 },
    { weight: 89, surfaceArea: 2.2 }, { weight: 90, surfaceArea: 2.2 }
];

const drugs = [
    { name: "Adenosine", initialDosePerKg: 100, fullDosePerKg: 250, unit: "micrograms", concentration: 3, normalDose: "100 micrograms/kg (initial), 250 micrograms/kg (full)", maxInitialDose: 6000, maxFullDose: 24000 },
    { name: "Adrenaline 1:10000", dosePerKg: 0.1, unit: "ml", concentration: 0.1, normalDose: "0.1 ml/kg", displayConcentration: "", specialVolume: true }, // 1:10000 = 0.1mg/ml
    { name: "Amiodarone", dosePerKg: 5, unit: "mg", concentration: 50, normalDose: "5 mg/kg", specialDose: "over 3 mins, only in arrest", maxDose: 300 },
    { name: "Atropine", dosePerKg: 20, unit: "micrograms", concentration: 600, normalDose: "20 micrograms/kg", minDose: 100, maxDose: 600 }, // 20 micrograms/kg, concentration converted to micrograms/ml
    { name: "Sodium Bicarbonate 8.4%", dosePerKg: 1, unit: "ml", concentration: 1, normalDose: "1 ml/kg", displayConcentration: "1mmol/ml" }, // 1mmol/ml
    { name: "Calcium Gluconate 10%", dosePerKg: 0.5, unit: "ml", concentration: 1, normalDose: "0.5 ml/kg", displayConcentration: "", specialVolume: true, maxDose: 30 }, // 10% = 1g/10ml = 0.1g/ml = 100mg/ml
    { name: "Lidocaine 1%", dosePerKg: 1, unit: "mg", concentration: 10, normalDose: "1 mg/kg" }, // 1% = 10mg/ml
    { name: "Naloxone", dosePerKg: 10, unit: "micrograms", concentration: 400, normalDose: "10 micrograms/kg" }, // 10 micrograms/kg, concentration converted to micrograms/ml
    { name: "Tranexamic Acid", dosePerKg: 15, unit: "mg", concentration: 100, normalDose: "15 mg/kg", maxDose: 1500 },
    { name: "Vasopressin", dosePerKg: 0.4, unit: "units", concentration: 20, normalDose: "0.4 units/kg" }
];

const bolusDrugs = [
    { name: "Aciclovir", dosePerKg: 20, unit: "mg", normalDose: "20 mg/kg if <60 days old, 500 * surface area (m²) if <12 years old, otherwise 5 mg/kg" },
    { name: "CefTRIAXone", dosePerKg: 80, unit: "mg", normalDose: "80 mg/kg, once daily", maxDose: 4000 },
    { name: "Glucose 10%", dosePerKg: 2, unit: "ml", normalDose: "2 ml/kg bolus, for hypoglycaemia", maxDose: 100 },
    { name: "LORazepam", dosePerKg: 0.1, unit: "mg", normalDose: "0.1 mg/kg", maxDose: 4 },
    { name: "LevETIRAcetam", dosePerKg: 40, unit: "mg", normalDose: "40 mg/kg - infuse over 5 mins", maxDose: 3000 },
    { name: "Magnesium Sulphate 50%", dosePerKg: 0.08, unit: "ml", normalDose: "0.08 ml/kg - dilute x10, slow IV over 20 mins", maxDose: 4 },
    { name: "PHENobarbitol", dosePerKg: 20, unit: "mg", normalDose: "20 mg/kg - slow IV over 30 mins" },
    { name: "Phenytoin", dosePerKg: 20, unit: "mg", normalDose: "20 mg/kg - slow IV over 30 mins", maxDose: 2000 },
    { name: "Hypertonic Saline", dosePerKg: 5, unit: "ml", normalDose: "5 ml/kg of 3% or 3 ml/kg of 5%", maxDose3Percent: 250, maxDose5Percent: 150 }
];

const intubationDrugs = [
    { name: "Atropine", dosePerKg: 20, unit: "micrograms", concentration: 600, normalDose: "20 micrograms/kg", minDose: 100, maxDose: 600 },
    { name: "FentaNYL", dosePerKg: 2, unit: "micrograms", concentration: 50, normalDose: "2 micrograms/kg" },
    { name: "Ketamine", dosePerKg: 2, unit: "mg", normalDose: "2 mg/kg", displayConcentration: "Many concentrations available - please check!" },
    { name: "Midazolam", dosePerKg: 100, unit: "micrograms", concentration: 5000, normalDose: "100 micrograms/kg" }, // 5 mg/ml
    { name: "Rocuronium", dosePerKg: 1, unit: "mg", concentration: 10, normalDose: "1 mg/kg" }, // 10 mg/ml
    { name: "Propofol 1%", dosePerKg: 0.25, unit: "ml", normalDose: "0.25 ml/kg" }, // 1% = 10mg/ml
    { name: "Suxamethonium", dosePerKg: (weight) => weight < 10 ? 2 : 1, unit: "mg", concentration: 50, normalDose: (weight) => weight < 10 ? "2 mg/kg" : "1 mg/kg" },
    { name: "Thiopentone (rarely indicated)", dosePerKg: 5, unit: "mg", concentration: 25, normalDose: "5 mg/kg" } // 25 mg/ml
];

const sedationInfusions = [
    {
        name: "Morphine",
        standardRegime: (weight) => weight < 50 ? "1mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "Neat (1mg/ml)",
        calculatedRegime: (weight) => weight < 50 ? `${weight}mg in 50ml` : `50mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 50 ? 20 : 1000 / weight;
            const formattedRate = Number.isInteger(rate) ? rate : rate.toFixed(1);
            return weight < 50 ? `1ml/hr (20 micrograms/kg/hr)` : `1ml/hr (${formattedRate} micrograms/kg/hr)`;
        }
    },
    {
        name: "Midazolam",
        standardRegime: (weight) => weight < 50 ? "5mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "Neat (5mg/ml)",
        calculatedRegime: (weight) => weight < 50 ? `${weight * 5}mg in 50ml` : `250mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 50 ? 100 : 5000 / weight;
            const formattedRate = Number.isInteger(rate) ? rate : rate.toFixed(1);
            return weight < 50 ? `1ml/hr (100 micrograms/kg/hr)` : `1ml/hr (${formattedRate} micrograms/kg/hr)`;
        }
    },
    {
        name: "Rocuronium",
        standardRegime: (weight) => weight < 16.6 ? "30mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "Neat (10mg/ml)",
        calculatedRegime: (weight) => weight < 16.6 ? `${weight * 30}mg in 50ml` : `500mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 16.6 ? 600 : 10000 / weight;
            const formattedRate = Number.isInteger(rate) ? rate : rate.toFixed(1);
            return weight < 16.6 ? `1ml/hr (600 micrograms/kg/hr)` : `1ml/hr (${formattedRate} micrograms/kg/hr)`;
        }
    },
    {
        name: "Atracurium",
        standardRegime: (weight) => weight < 33 ? "15mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "Neat (10mg/ml)",
        calculatedRegime: (weight) => weight < 33 ? `${weight * 15}mg in 50ml` : `500mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 33 ? 300 : 10000 / weight;
            const formattedRate = Number.isInteger(rate) ? rate : rate.toFixed(1);
            return weight < 33 ? `1ml/hr (300 micrograms/kg/hr)` : `1ml/hr (${formattedRate} micrograms/kg/hr)`;
        }
    },
    {
        name: "FentaNYL",
        standardRegime: () => "Neat (50 micrograms/ml)",
        calculatedRegime: () => "250 micrograms in 5ml",
        startingRate: (weight) => {
            const rateLow = weight * 1 / 50;
            const rateHigh = weight * 2 / 50;
            const formattedRateLow = Number.isInteger(rateLow) ? rateLow : rateLow.toFixed(1);
            const formattedRateHigh = Number.isInteger(rateHigh) ? rateHigh : rateHigh.toFixed(1);
            return `${formattedRateLow} - ${formattedRateHigh} ml/hr (1 - 2 micrograms/kg/hr)`;
        }
    },
    {
        name: "Thiopentone",
        standardRegime: () => "Neat (25mg/ml)",
        calculatedRegime: () => "100mg in 4ml",
        startingRate: (weight) => {
            const rateLow = weight * 1 / 25;
            const rateHigh = weight * 6 / 25;
            const formattedRateLow = Number.isInteger(rateLow) ? rateLow : rateLow.toFixed(1);
            const formattedRateHigh = Number.isInteger(rateHigh) ? rateHigh : rateHigh.toFixed(1);
            return `${formattedRateLow} - ${formattedRateHigh} ml/hr (1 - 6 mg/kg/hr)`;
        }
    }
];

const cardiacInfusions = [
    {
        name: "Central DOPamine",
        standardRegime: (weight) => weight < 40 ? "15mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "3mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%",
        calculatedRegime: (weight) => weight < 40 ? `${formatValue(weight * 15)}mg in 50ml` : `${formatValue(weight * 3)}mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 40 ? 5 : 1;
            return `1ml/hr (${rate} micrograms/kg/min)`;
        }
    },
    {
        name: "DOBUTamine",
        standardRegime: (weight) => weight < 40 ? "15mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "3mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%",
        calculatedRegime: (weight) => weight < 40 ? `${formatValue(weight * 15)}mg in 50ml` : `${formatValue(weight * 3)}mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 40 ? 5 : 1;
            return `1ml/hr (${rate} micrograms/kg/min)`;
        }
    },
    {
        name: "Peripheral Adrenaline",
        standardRegime: (weight) => weight < 40 ? "0.03mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "0.006mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%",
        calculatedRegime: (weight) => weight < 40 ? `${formatValue(weight * 0.03)}mg in 50ml` : `${formatValue(weight * 0.006)}mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 40 ? 10 : 50;
            return `${rate}ml/hr (0.1 micrograms/kg/min)`;
        }
    },
    {
        name: "Central Adrenaline",
        standardRegime: (weight) => weight < 40 ? "0.3mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "0.06mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%",
        calculatedRegime: (weight) => weight < 40 ? `${formatValue(weight * 0.3)}mg in 50ml` : `${formatValue(weight * 0.06)}mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 40 ? 0.1 : 0.02;
            return `1ml/hr (${rate} micrograms/kg/min)`;
        }
    },
    {
        name: "Metaraminol",
        standardRegime: (weight) => {
            if (weight < 10) {
                return "0.3mg/kg made up to 50ml with NaCl 0.9%";
            } else if (weight < 66.6) {
                return "0.15mg/kg made up to 50ml with NaCl 0.9%";
            } else {
                return "10mg made up to 50ml with NaCl 0.9%";
            }
        },
        calculatedRegime: (weight) => {
            if (weight < 10) {
                return `${formatValue(weight * 0.3)}mg in 50ml`;
            } else if (weight < 66.6) {
                return `${formatValue(weight * 0.15)}mg in 50ml`;
            } else {
                return `10mg in 50ml`;
            }
        },
        startingRate: (weight) => {
            if (weight < 10) {
                return `2.5ml/hr (0.25 micrograms/kg/min)`;
            } else if (weight < 66.6) {
                return `5ml/hr (0.25 micrograms/kg/min)`;
            } else {
                const rate = formatValue(0.075 * weight);
                return `${rate}ml/hr (0.25 micrograms/kg/min)`;
            }
        }
    },
    {
        name: "Noradrenaline",
        standardRegime: (weight) => weight < 40 ? "0.3mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "0.06mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%",
        calculatedRegime: (weight) => weight < 40 ? `${formatValue(weight * 0.3)}mg in 50ml` : `${formatValue(weight * 0.06)}mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 40 ? 0.1 : 0.02;
            return `1ml/hr (${rate} micrograms/kg/min)`;
        }
    },
    {
        name: "Vasopressin",
        standardRegime: (weight) => weight < 16.6 ? `${formatValue(weight * 2.4)} units made up to 40ml with Glucose 5% or NaCl 0.9%` : `40 units made up to 40ml with Glucose 5% or NaCl 0.9%`,
        calculatedRegime: (weight) => weight < 16.6 ? `${formatValue(weight * 2.4)} units in 40ml` : `40 units in 40ml`,
        startingRate: (weight) => {
            const rate = weight < 16.6 ? 1 : formatValue(weight * 0.06);
            return `${rate}ml/hr (0.001 units/kg/min)`;
        }
    },
    {
        name: "Milrinone",
        standardRegime: (weight) => weight < 33.3 ? "1.5mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "Neat (1mg/ml)",
        calculatedRegime: (weight) => weight < 33.3 ? `${formatValue(weight * 1.5)}mg in 50ml` : `50mg in 50ml`,
        startingRate: (weight) => {
            const rate = weight < 33.3 ? 0.5 : 50000 / (3000 * weight);
            const formattedRate = formatValue(rate);
            return `1ml/hr (${formattedRate} micrograms/kg/min)`;
        }
    },
    {
        name: "Dinoprostone (PGE2)",
        standardRegime: (weight) => weight < 10 ? "100 micrograms made up to 50ml with Glucose 5% or Glucose 10%" : "N/A",
        calculatedRegime: (weight) => weight < 10 ? "100 micrograms in 50ml" : "N/A",
        startingRate: (weight) => {
            if (weight < 10) {
                const rate = 100000 / (3000 * weight);
                const formattedRate = formatValue(rate);
                return `1ml/hr (${formattedRate} ng/kg/min)`;
            } else {
                return "N/A";
            }
        }
    }
];

const otherInfusions = [
    {
        name: "Peripheral Salbutamol",
        standardRegime: () => "10mg made up to 50ml with Glucose 5% or NaCl 0.9%",
        calculatedRegime: () => "10mg in 50ml",
        startingRate: (weight) => {
            const rate = formatValue(0.3 * weight);
            return `${rate}ml/hr (1 microgram/kg/min)`;
        }
    },
    {
        name: "Peripheral Aminophylline",
        standardRegime: () => "500mg made up to 500ml with Glucose 5% or NaCl 0.9%",
        calculatedRegime: () => "500mg in 500ml",
        startingRate: (weight) => {
            const rate = formatValue(weight);
            return `${rate}ml/hr (1 mg/kg/hr)`;
        }
    },
    {
        name: "Peripheral Tranexamic Acid",
        standardRegime: () => "500mg made up to 500ml with Glucose 5% or NaCl 0.9%",
        calculatedRegime: () => "500mg in 500ml",
        startingRate: (weight) => {
            if (weight > 62.5) {
                return "Run at 125 ml/hr (max dose) for 8hr (or until bleeding stops)";
            } else {
                const rate = formatValue(weight * 2);
                return `Run at ${rate} ml/hr (2mg/kg/hr) for 8hr (or until bleeding stops)`;
            }
        }
    },
    {
        name: "Central Salbutamol",
        standardRegime: (weight) => weight < 16 ? "3mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "Neat (1mg/ml)",
        calculatedRegime: (weight) => weight < 16 ? `${formatValue(weight * 3)}mg in 50ml` : "50mg in 50ml",
        startingRate: (weight) => {
            const rate = weight < 16 ? 1 : 50000 / (weight * 3000);
            const formattedRate = formatValue(rate);
            return `1ml/hr (${formattedRate} micrograms/kg/min)`;
        }
    },
    {
        name: "Central Aminophylline",
        standardRegime: (weight) => weight < 25 ? "50mg/kg made up to 50ml with Glucose 5% or NaCl 0.9%" : "Neat (25mg/ml)",
        calculatedRegime: (weight) => weight < 25 ? `${formatValue(weight * 50)}mg in 50ml` : "1250mg in 50ml",
        startingRate: (weight) => {
            const rate = weight < 25 ? 1 : 1250 / (weight * 50);
            const formattedRate = formatValue(rate);
            return `1ml/hr (${formattedRate} mg/kg/hr)`;
        }
    }
];

const boldText = (text) => text.replace(/(Central|Peripheral)/g, '<strong>$1</strong>');

function formatValue(value, unit = '') {
    const formattedValue = Number.isInteger(value) ? value.toString() : value.toFixed(2).replace(/\.?0+$/, '');
    return unit ? `${formattedValue} ${unit}` : formattedValue;
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
      }, err => {
        console.log('ServiceWorker registration failed: ', err);
      });
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

document.addEventListener("DOMContentLoaded", () => {
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
        patientAgeInDays = calculateAgeInDays(dob);
        ageDisplay.textContent = `Age: ${age.years} years and ${age.months} months`;
    });

    ageValueInput.addEventListener("input", updateEstimatedAgeInDays);
    ageUnitSelect.addEventListener("change", updateEstimatedAgeInDays);

    function updateEstimatedAgeInDays() {
        const ageValue = parseInt(ageValueInput.value) || 0;
        const ageUnit = ageUnitSelect.value;
        if (ageUnit === "years") {
            patientAgeInDays = ageValue * 365;
        } else if (ageUnit === "months") {
            patientAgeInDays = ageValue * 30;
        }
        ageDisplay.textContent = `Age: ${ageValue} ${ageUnit}`;
    }

    estimateWeightButton.addEventListener("click", () => {
        if (patientAgeInDays > 0) {
            const estimatedWeight = calculateEstimatedWeight(patientAgeInDays);
            weightField.value = estimatedWeight;
        } else {
            alert("Please enter the date of birth or estimated age to calculate weight.");
        }
    });

    submitButton.addEventListener("click", () => {
        const weight = parseFloat(weightField.value);
        const dob = dobField.value;
        const ageValue = ageValueInput.value;

        if (!dob && !ageValue) {
            alert("Please enter either a date of birth or an age.");
            return;
        }

        if (!weight || weight <= 0) {
            alert("Please enter a valid weight.");
            return;
        }

        let measurements;
        let suctionCatheterMeasurement;
        let fluidBolus;
        let defibrillation;
        let urinaryCatheterMeasurement;
        let chestDrainMeasurement;
        let drugDoses;

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
        drugDoses = calculateDrugDoses(weight);

        displayResults(measurements, suctionCatheterMeasurement, fluidBolus, defibrillation, urinaryCatheterMeasurement, chestDrainMeasurement, drugDoses, weight, boldText);
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
    };

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
        if (ageInDays < 365) {
            weight = (ageInDays / 60) + 4;
        } else if (ageInDays < 6 * 365) {
            weight = ((ageInDays / 365) * 2) + 8;
        } else {
            weight = ((ageInDays / 365) * 3) + 7;
        }
        return Math.round(weight); // Rounds to the nearest integer
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
    
    function calculateDrugDoses(weight) {
        const getSurfaceArea = (weight) => {
            const entry = surfaceAreaTable.find(row => row.weight === weight);
            return entry ? entry.surfaceArea : null;
        };
        
        const calculatedDrugs = drugs.map(drug => {
            if (drug.name === "Adenosine") {
                let initialDose = weight * drug.initialDosePerKg;
                let fullDose = weight * drug.fullDosePerKg;
                if (initialDose > drug.maxInitialDose) initialDose = drug.maxInitialDose;
                if (fullDose > drug.maxFullDose) fullDose = drug.maxFullDose;
                const initialDoseText = initialDose >= 1000 ? `${(initialDose / 1000).toFixed(Number.isInteger(initialDose / 1000) ? 0 : 2)} mg` : `${initialDose} mcg`;
                const fullDoseText = fullDose >= 1000 ? `${(fullDose / 1000).toFixed(Number.isInteger(fullDose / 1000) ? 0 : 2)} mg` : `${fullDose} mcg`;
                const initialVolume = initialDose / (drug.concentration * 1000);
                const fullVolume = fullDose / (drug.concentration * 1000);
                return {
                    name: drug.name,
                    normalDose: drug.normalDose,
                    dose: `${initialDoseText} (initial), ${fullDoseText} (full)`,
                    concentration: `${drug.concentration} mg/ml`,
                    volume: `${formatValue(initialVolume, 'ml')} (initial), ${formatValue(fullVolume, 'ml')} (full)`
                };
            } else {
                let dose = weight * drug.dosePerKg;
                if (drug.minDose && dose < drug.minDose) dose = drug.minDose;
                if (drug.maxDose && dose > drug.maxDose) dose = drug.maxDose;
                const maxDoseText = drug.maxDose && dose === drug.maxDose ? " (max dose)" : "";
                const volume = dose / drug.concentration;
                return {
                    name: drug.name,
                    normalDose: drug.normalDose,
                    dose: `${formatValue(dose, drug.unit)} ${drug.specialDose || ''}${maxDoseText}`.trim(),
                    concentration: drug.displayConcentration || `${drug.concentration} ${drug.unit}/ml`,
                    volume: drug.specialVolume ? `${drug.dosePerKg} ml/kg` : formatValue(volume, 'ml')
                };
            }
        });
        
        const calculatedBolusDrugs = bolusDrugs.map(drug => {
            let dose;
            if (drug.name === "Aciclovir") {
                if (patientAgeInDays < 60) {
                    dose = weight * 20;
                } else if (patientAgeInDays < 4383) {
                    const surfaceArea = getSurfaceArea(weight);
                    dose = surfaceArea ? 500 * surfaceArea : 0;
                } else {
                    dose = weight * 5;
                }
                dose = Math.round(dose / 10) * 10; // Round to nearest 10 mg
            } else if (drug.name === "Hypertonic Saline") {
                const dose3Percent = weight * 5;
                const dose5Percent = weight * 3;
                const maxDose3PercentText = dose3Percent > drug.maxDose3Percent ? " (max dose)" : "";
                const maxDose5PercentText = dose5Percent > drug.maxDose5Percent ? " (max dose)" : "";
                dose = `${formatValue(Math.min(dose3Percent, drug.maxDose3Percent), 'ml')} of 3%${maxDose3PercentText} or ${formatValue(Math.min(dose5Percent, drug.maxDose5Percent), 'ml')} of 5%${maxDose5PercentText}`;
            } else {
                dose = weight * drug.dosePerKg;
                if (drug.maxDose && dose > drug.maxDose) dose = drug.maxDose;
            }
            const maxDoseText = drug.maxDose && dose === drug.maxDose ? " (max dose)" : "";
            return {
                name: drug.name,
                normalDose: drug.normalDose,
                dose: drug.name === "Hypertonic Saline" ? dose : `${formatValue(dose, drug.unit)}${maxDoseText}`
            };
        });
        
        const calculatedIntubationDrugs = intubationDrugs.map(drug => {
            let dosePerKg = typeof drug.dosePerKg === 'function' ? drug.dosePerKg(weight) : drug.dosePerKg;
            let normalDose = typeof drug.normalDose === 'function' ? drug.normalDose(weight) : drug.normalDose;
            let dose = weight * dosePerKg;
            
            if (drug.minDose && dose < drug.minDose) dose = drug.minDose;
            if (drug.maxDose && dose > drug.maxDose) dose = drug.maxDose;
            const maxDoseText = drug.maxDose && dose === drug.maxDose ? " (max dose)" : "";
            const volume = dose / drug.concentration;
            if (drug.name === "Midazolam" && dose >= 1000) {
                dose = `${(dose / 1000).toFixed(Number.isInteger(dose / 1000) ? 0 : 2)} mg`;
            } else {
                dose = formatValue(dose, drug.unit);
            }
            return {
                name: drug.name,
                normalDose: normalDose,
                dose: `${dose}${maxDoseText}`,
                concentration: drug.name === "Midazolam" ? "5 mg/ml" : drug.displayConcentration || `${drug.concentration} ${drug.unit}/ml`,
                volume: drug.name === "Ketamine" || drug.name === "Propofol 1%" ? "" : formatValue(volume, 'ml')
            };
        });
    
        return { calculatedDrugs, calculatedBolusDrugs, calculatedIntubationDrugs };
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

    function displayResults(measurements, suctionCatheterMeasurement, fluidBolus, defibrillation, urinaryCatheterMeasurement, chestDrainMeasurement, drugDoses, weight, boldText) {
        const tubeSizesTable = document.getElementById('tube-sizes');
        const emergencyDrugsTable = document.getElementById('emergency-drugs');
        const bolusDrugsTable = document.getElementById('bolus-drugs');
        const intubationDrugsTable = document.getElementById('intubation-drugs');
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

        emergencyDrugsTable.innerHTML = `
            <caption>Emergency Drug Doses</caption>
            <tr>
                <th>Drug</th>
                <th>Dose</th>
                <th>Calculated Dose</th>
                <th>Usual Concentration</th>
                <th>Calculated Volume</th>
            </tr>
            ${drugDoses.calculatedDrugs.map(drug => `
                <tr>
                    <td>${boldText(drug.name)}</td>
                    <td>${drug.normalDose}</td>
                    <td>${drug.dose}</td>
                    <td>${drug.name === "Adrenaline 1:10000" || drug.name === "Sodium Bicarbonate 8.4%" || drug.name === "Calcium Gluconate 10%" ? "" : drug.concentration}</td>
                    <td>${drug.name === "Adrenaline 1:10000" || drug.name === "Sodium Bicarbonate 8.4%" || drug.name === "Calcium Gluconate 10%" ? "" : drug.volume}</td>
                </tr>
            `).join('')}
        `;

        bolusDrugsTable.innerHTML = `
            <caption>Bolus Drugs</caption>
            <tr>
                <th>Drug</th>
                <th>Dose</th>
                <th>Calculated Dose</th>
            </tr>
            ${drugDoses.calculatedBolusDrugs.map(drug => `
                <tr>
                    <td>${boldText(drug.name)}</td>
                    <td>${drug.normalDose}</td>
                    <td>${drug.dose}</td>
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
            ${drugDoses.calculatedIntubationDrugs.map(drug => `
                <tr>
                    <td>${boldText(drug.name)}</td>
                    <td>${drug.normalDose}</td>
                    <td>${drug.dose}</td>
                    <td>${drug.name === "Propofol 1%" ? "" : drug.concentration}</td>
                    <td>${drug.name === "Propofol 1%" ? "" : drug.volume}</td>
                </tr>
            `).join('')}
        `;

        const fluidRequirement100 = 4 * (weight > 10 ? 10 : weight) + 2 * (weight - 10 > 0 ? (weight > 20 ? 10 : weight - 10) : 0) + 1 * (weight - 20 > 0 ? weight - 20 : 0);
        const fluidRequirement80 = fluidRequirement100 * 0.8;

        const formatFluidValue = (value) => {
            return Number.isInteger(value) ? `${value} ml/hr` : `${value.toFixed(1)} ml/hr`;
        };

        fluidsTable.innerHTML = `
            <caption>Fluids</caption>
            <tr>
                <th>Requirement</th>
                <th>Calculated Dose</th>
            </tr>
            <tr>
                <td>100% fluid requirement</td>
                <td>${formatFluidValue(fluidRequirement100)}</td>
            </tr>
            <tr>
                <td>80% fluid requirement</td>
                <td>${formatFluidValue(fluidRequirement80)}</td>
            </tr>
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
                    <td>${infusion.standardRegime(weight)}</td>
                    <td>${infusion.calculatedRegime(weight)}</td>
                    <td>${infusion.startingRate(weight)}</td>
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
                    <td>${infusion.standardRegime(weight)}</td>
                    <td>${infusion.calculatedRegime(weight)}</td>
                    <td>${infusion.startingRate(weight)}</td>
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
                    <td>${infusion.standardRegime(weight)}</td>
                    <td>${infusion.calculatedRegime(weight)}</td>
                    <td>${infusion.startingRate(weight)}</td>
                </tr>
            `).join('')}
        `;
    }
});