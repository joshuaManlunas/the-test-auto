import {_iConfig} from "./_iConfig";

export const LOCAL : _iConfig = { //Local Test
    targetUrl: 'https://www.saucedemo.com/',
    testMsg: "Hello from LOCAL Test environment"
}
export const ST : _iConfig = { //System Test
    targetUrl: 'https://www.saucedemo.com/',
    testMsg: "Hello from ST: System Test environment"
}
export const SIT : _iConfig = { //System Integration Test
    targetUrl: 'https://www.saucedemo.com/',
    testMsg: "Hello from SIT: System Integration Testing environment"
}
export const OAT : _iConfig = { //Operationa Acceptance Test
    targetUrl: 'https://www.saucedemo.com/',
    testMsg: "Hello from OAT: Operations Acceptance Testing environment"
}

