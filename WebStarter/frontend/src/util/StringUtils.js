import Lodash from "lodash"

class StringUtils {

    static toKebabCase(string) {
        return Lodash.kebabCase(string);
    }

}

export default StringUtils;