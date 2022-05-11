import { IConfig } from "./IConfig";

export const LOCAL: IConfig = { // Local Test
    targetUrl: 'https://www.saucedemo.com/',
    testMsg: "Hello from LOCAL Test environment"
}
export const ST: IConfig = { // System Test
    targetUrl: 'https://www.saucedemo.com/',
    testMsg: "Hello from ST: System Test environment"
}
export const SIT: IConfig = { // System Integration Test
    targetUrl: 'https://www.saucedemo.com/',
    testMsg: "Hello from SIT: System Integration Testing environment"
}
export const OAT: IConfig = { // Operationa Acceptance Test
    targetUrl: 'https://www.saucedemo.com/',
    testMsg: "Hello from OAT: Operations Acceptance Testing environment"
}

