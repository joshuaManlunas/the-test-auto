import {test as base} from "@playwright/test";
import {smokeEnv} from "../src/configs/TargetEnvConfigs";

export type EnvConfig = {
    myname: _iConfig
}

export const test = base.extend<EnvConfig>({
    myname: smokeEnv //set via env variable
})