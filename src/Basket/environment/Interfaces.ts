
export type SliderUrl = 'wp' | 'wr' | 'wt'

export type range = {
    from: number,
    to: number,
}

export interface EItem {
    active_compatibility: string[],
    id: number,
    value: string,
}

export interface EnvStorage {
    compatibility: string[],
    id: string,
    wp: range,
    wr: range,
    wt: range,
}

export interface TEnv {
    limits: {
        wp: range
        wr: range
        wt: range
    }
    list: {
        [key: number]: EItem
    }
    storage: {
        [key: string]: EnvStorage,
        filter: EnvStorage,
    } 
}

export interface IEnv {

    name?: string, 

}