import { floor, max, min, round } from "lodash";

const WORDS_READ_PER_MINUTE_FOR_A_TYPICAL_HUMAN = 100;

export const sortByPropertyAlphabetical = (
    stringPropertyGetter: (x: object) => string,
    array: Array<any>,
    reverse: boolean = false
) => {
    return array.sort((a: any, b: any) => {
        const valA = stringPropertyGetter(a);
        const valB = stringPropertyGetter(b);

        if (valA == null || valB == null) {
            return 0;
        }
        var nameA = valA.toUpperCase(); // ignore upper and lowercase
        var nameB = valB.toUpperCase(); // ignore upper and lowercase

        return compareValues(nameA, nameB, reverse);
    });
};

export const sortByPropertyNumeric = (
    numberPropertyGetter: (x: object) => number,
    array: Array<any>,
    reverse: boolean = false
) => {
    return array.sort((a: any, b: any) => {
        const valA = numberPropertyGetter(a);
        const valB = numberPropertyGetter(b);

        if (valA == null || valB == null) {
            return 0;
        }
        return compareValues(valA, valB, reverse);
    });
};

export const sortArrayOfObjects = (array: Array<Object>, reverse: boolean = false) => {
    return array.sort((a: Object, b: Object) => {
        const valA = Object.keys(a)[0];
        const valB = Object.keys(b)[0];

        if (valA == null || valB == null) {
            return 0;
        }
        return compareValues(valA, valB, reverse);
    });
};

function compareValues<T>(valA: T, valB: T, reverse: boolean = false) {
    if (valA < valB) {
        return reverse ? 1 : -1;
    }
    if (valA > valB) {
        return reverse ? -1 : 1;
    }
    return 0;
}

const blackList = ["#", "<", "/", "src=", "-"];

export const computeReadingTime = (content: string): number => {
    const words = content.split(/\s+/).filter((word) => {
        let isBlackListed = false;
        blackList.forEach((blackListedWord) => {
            if (word.startsWith(blackListedWord)) {
                isBlackListed = true;
            }
        });
        return !isBlackListed;
    });

    const time = round(floor(words.length / WORDS_READ_PER_MINUTE_FOR_A_TYPICAL_HUMAN, 0));
    return time;
};
