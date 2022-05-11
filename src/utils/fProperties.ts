import * as path from "path";
import PropertiesReader from "properties-reader";

const properties = PropertiesReader(`${path.resolve('./')}/framework.properties`)
/**
 * Resolve and add framework properties here.
 * If your properties values needs more complicated handling and processing create a new module that would do that.
 */
export const prop = {
    envVarCheck: properties.get('envVarCheck')
}