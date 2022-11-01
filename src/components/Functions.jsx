import { createRoot, createSignal } from "solid-js";

export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function FETCH(toReturn) {
    await wait(2000)
    return toReturn
}



export const { skuClicked, setSkuClicked } = createRoot(() => {


    const [skuClicked, setSkuClicked] = createSignal()




    return { skuClicked, setSkuClicked };
})