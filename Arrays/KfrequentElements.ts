const frequentElements = (nums:number[], k:number) => {
    const map = new Map();

    for (let val of nums) {
        map.set(val, (map.get(val) || 0) + 1);
    }

    const result = [];

    for (let i = 0; i < k; i++) {
        let max = -Infinity;
        let maxKey;

        for (let [key, frequency] of map) {
            if (frequency > max) {
                max = frequency;
                maxKey = key;
            }
        }

        result.push(maxKey);
        map.delete(maxKey);
    }

    return result;
};