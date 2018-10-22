import Lodash from "lodash"

class StateUtils {

    static createNew(value) {
        return Lodash.cloneDeep(value);
    }

}

export default StateUtils;