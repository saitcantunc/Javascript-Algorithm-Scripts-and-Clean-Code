const sortWithSelection = (unsortedArr) => {
    const { length } = unsortedArr;

    for (let i = 0; i < length; i++) {
        let min = unsortedArr[i];
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (min > unsortedArr[j]) {
                min = unsortedArr[j];
                minIndex = j;
            }
        }

        if (i !== minIndex) {
            [unsortedArr[i], unsortedArr[minIndex]] = [unsortedArr[minIndex], unsortedArr[i]];
        }
    }

    return unsortedArr;
}

console.log(sortWithSelection([2,4,5,6,1,30,27,15,14]))