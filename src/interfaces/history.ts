export interface IHistory {
    action: string;
    length: number;
    block: () => void;
    createRef: (location: string) => void;
    go: () => void;
    goBack: () => void;
    goForward: () => void;
    listen: (listener: any) => void;
    push: (path: string, state?: object) => void;
    replace: (path: string, state?: object) => void;
}