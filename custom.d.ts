declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '@jitsi/logger' {
    export interface IJitsiLogger {
        debug(...args: any[]): void;
        info(...args: any[]): void;
        log(...args: any[]): void;
        warn(...args: any[]): void;
        error(...args: any[]): void;
        trace?(...args: any[]): void;
    }

    export interface ILoggerStatics {
        new (category?: string): IJitsiLogger;
        setGlobalOptions(options: Record<string, any>): void;
        removeGlobalTransport(transport: any): void;
        addGlobalTransport(transport: any): void;
        LogCollector: new (...args: any[]) => any;
    }

    export function getLogger(id: string, transports?: any, options?: any): IJitsiLogger;

    const Logger: ILoggerStatics;

    export default Logger;
}

declare module '*modules/UI/videolayout/Filmstrip' {
    const Filmstrip: {
        getFilmstripHeight: () => number;
    };
    export default Filmstrip;
}
