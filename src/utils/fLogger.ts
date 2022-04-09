import * as winston from "winston"

export function frameworkLog(message: string, logLevel: string = 'info') {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({format: winston.format.simple()}),
            new winston.transports.File({ filename: 'logs/combined-framework.log' })
        ]
    })
    logger.log({
        level: logLevel,
        message: `[FRAMEWORK] ${message}`
    })
}