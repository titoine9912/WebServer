class RandomUtils {

    static generate(min, max) {
        min = min ? min : 0;
        max = max ? max : Number.MAX_SAFE_INTEGER;
        return Math.floor((Math.random() * max) + min);
    }

}

export default RandomUtils;