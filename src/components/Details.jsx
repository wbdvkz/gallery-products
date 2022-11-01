import { createEffect, createSignal, Show } from "solid-js";
import { oneProductDetailsTable } from "../assets/db";
import { skuClicked } from "./Functions";
import Slider from "./Slider";



export default function Details() {


    const skuDetails = () => {
        if (!skuClicked()) return
        let skuFind = oneProductDetailsTable.find(obj => obj.id === skuClicked().id)
        return skuFind
    }

    const [detailsTabSelected, setDetailsTabSelected] = createSignal('Textiles')
    function changeTab(e) {
        console.log(e.target.value)
        setDetailsTabSelected(e.target.value)
    }

    return (
        <Show when={skuDetails()}  >
            <div class='fixed right-0 w-[30vw] h-screen overflow-auto bg-gray-300'>
                <div class='grid items-center grid-cols-3 w-[100%] h-[50px] text-center'>
                    <div class='w-full h-full '>
                        <input class='sr-only peer' type="radio" name="details" id="Textiles" value="Textiles" checked onInput={changeTab} />
                        <label class='hover:bg-gray-100 peer-checked:bg-gray-100 w-full h-full flex' htmlFor="Textiles"><div class='m-auto'>Textiles</div></label>
                    </div>
                    <div class='w-full h-full '>
                        <input class='sr-only peer' type="radio" name="details" id="Rules" value="Rules" onInput={changeTab}  />
                        <label class='hover:bg-gray-100 peer-checked:bg-gray-100 w-full h-full flex' htmlFor="Rules" ><div class='m-auto'>Rules</div></label>
                    </div>
                    <div class='w-full h-full '>
                        <input class='sr-only peer' type="radio" name="details" id="Suppliers" value="Suppliers" onInput={changeTab}  />
                        <label class='hover:bg-gray-100 peer-checked:bg-gray-100 w-full h-full flex' htmlFor="Suppliers"><div class='m-auto'>Suppliers</div></label>
                    </div>
                </div>
                <hr />
                <br />
                <br />

                <Show when={detailsTabSelected() === 'Textiles'}>
                    <div class='flex justify-evenly'>

                        <div>
                            {console.log(skuDetails())}
                            <Slider pic={skuDetails().textiles[0].images} />

                        </div>

                        <div>
                            <div class='text-[30px] font-medium'>{skuDetails().textiles[0].title}</div>
                            <hr />
                            <div class='text-[20px]'>{skuDetails().textiles[0].desc}</div>
                            <div class='text-[20px] text-blue-500'>{skuDetails().textiles[0].material}</div>
                            <div>comments</div>
                        </div>



                    </div>
                    <br /><br />
                    <div class='flex justify-evenly'>
                        <div>
                            <button class='w-[100px] py-[10px] text-[20px] bg-blue-600 text-white font-semibold rounded-2xl' type='button' onClick={() => alert('Shared')}>Share</button>
                            <br />
                            <br />
                            <button class='w-[100px] py-[10px] text-[20px] bg-blue-600 text-white font-semibold rounded-2xl' type='button' onClick={() => alert('Saved')}>Save</button>

                        </div>
                    </div>

                    <br /><br />
                    <hr />
                </Show>
            </div>
        </Show>
    );
}