
export interface BasketItmEnv {
    id: number,
    temp: [min: number, max: number],
    press: [min: number, max: number],
    rashod: [min: number, max: number],
}

export interface BasketItm {
    pagetitle: string,
    count: number,
    env: BasketItmEnv,
}

