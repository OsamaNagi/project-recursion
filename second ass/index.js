const mergeSort = array => {
    if (array.length === 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    let lp = 0, rp = 0;
    let rizz = [];
    while (lp < left.length && rp < right.length) {
        if (left[ lp ] <= right[ rp ]) {
            rizz.push(left[ lp ]);
            lp++;
        } else {
            rizz.push(right[ rp ]);
            rp++;
        }
    }
    return rizz.concat(left.slice(lp)).concat(right.slice(rp));
};
console.log(mergeSort([ 5, 6, 4, 1, 3, 2 ]));
