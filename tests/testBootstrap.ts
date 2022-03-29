import {test as base} from "@playwright/test";
import {OAT} from "../src/configs/TargetEnvConfigs";

export type EnvConfig = {
    myname: _iConfig
}
/**
 * Provide everything a test could need eg. Page-objects, helpers, utils etc. here as fixtures
 */
export const test = base.extend<EnvConfig>({
    myname: OAT //set via env variable
})