function crystals(input) {
    let resultCrystal = Number(input[0]);
    let cut = 0.25;
    let lap = 0.8;
    let grind = -20;
    let etch = -2;
    let xRay = 1;

    for (let i = 1; i < input.length; i++) {
        let chunk = Number(input[i]);
        console.log(`Processing chunk ${chunk} microns`);

        let counterCut = 0;
        let counterLap = 0;
        let counterGrid = 0;
        let counterEtch = 0;

        while (chunk > resultCrystal) {
            chunk *= cut;
            counterCut++;
            if (chunk * cut < resultCrystal) {
                break;
            }
        }

        if (counterCut >= 1) {
            chunk = Math.floor(chunk);
            console.log(`Cut x${counterCut}`);
            console.log(`Transporting and washing`);
        }
        while (chunk > resultCrystal) {
            chunk *= lap;
            counterLap++;
            if (chunk * lap < resultCrystal) {
                break;
            }
        }

        if (counterLap >= 1) {
            chunk = Math.floor(chunk);
            console.log(`Lap x${counterLap}`);
            console.log(`Transporting and washing`);
        }

        while (chunk > resultCrystal) {
            chunk += grind;
            counterGrid++;
            if (chunk + grind < resultCrystal) {
                break;
            }
        }

        if (counterGrid >= 1) {
            chunk = Math.floor(chunk);
            console.log(`Grind x${counterGrid}`);
            console.log(`Transporting and washing`);
        }

        while (chunk > resultCrystal) {
            chunk += etch;
            counterEtch++;
        }

        if (counterEtch >= 1) {
            chunk = Math.floor(chunk);
            console.log(`Etch x${counterEtch}`);
            console.log(`Transporting and washing`);
        }

        if (chunk < resultCrystal) {
            chunk += xRay;
            console.log(`X-ray x1`);
        }
        console.log(`Finished crystal ${Math.floor(chunk)} microns`);
    }
}

crystals([1000, 4003, 4005]);