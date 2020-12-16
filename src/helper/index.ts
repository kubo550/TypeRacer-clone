export const getPlayableArray = (text: string) =>
    text.split(/\s/).map((word, i, arr) => (i === arr.length - 1 ? word : word + " "));



export const countStats = (arr1: number[]) => {
    if (!arr1.length) return [0, 0, 0, 0];
    const arr = [...arr1];

    const getAvg = (numArr: number[]) =>
        numArr.reduce((prev, curr, idx, arr) => {
            if (idx === arr.length - 1) {
                return (prev + curr) / arr.length;
            }
            return prev + curr;
        }, 0);

    const max = arr.reduce((prev, curr) => (curr > prev ? curr : prev), 0);
    const last = arr[arr.length - 1];
    const avg = getAvg(arr);
    const avgLast10 = getAvg([...arr].slice(-10));
    return [max, last, avg, avgLast10];
};