import { createSignal, For, Show } from "solid-js";
import { allProductsTable } from "../assets/db";
import { FETCH, setSkuClicked } from "./Functions";



export default function List() {

    const [fetchedAllProductsTable, setFetchedAllProductsTable] = createSignal()
    const [onViewAllProductsTable, setOnViewAllProductsTable] = createSignal();
    (async () => {
        let fetched = await FETCH(allProductsTable)
        setFetchedAllProductsTable(fetched)
        setOnViewAllProductsTable(fetched)
    })();



    let itemsCountView

    let chosen6

    function changeView(e) {
        if (e.target.value === '4') {
            setOnViewAllProductsTable(fetchedAllProductsTable().slice(0, -2))
            itemsCountView.classList.remove('grid-cols-3')
            itemsCountView.classList.add('grid-cols-2')
        } else {
            setOnViewAllProductsTable(fetchedAllProductsTable())
            itemsCountView.classList.remove('grid-cols-2')
            itemsCountView.classList.add('grid-cols-3')
        }
    }

    function changeViewGalleryList(e) {
        console.log('changeViewGalleryList')
        console.log(e.target.value)
        if (e.target.value === 'gallery') {
            itemsCountView.classList.add('grid')
            if (chosen6.checked)
                itemsCountView.classList.add('grid-cols-3')
            else
                itemsCountView.classList.add('grid-cols-2')

        } else {
            console.log('list')
            itemsCountView.classList.remove('grid')
            itemsCountView.classList.remove('grid-cols-2')

        }
    }



    return (


        <div class='w-[70vw]'>
            <Show when={onViewAllProductsTable()} fallback={<div class='w-screen h-screen flex'> <div class='m-auto text-[30px]'>Loading...</div></div>}>
                <br />
                <br />
                <div ref={itemsCountView} class='w-[90%] m-auto grid grid-cols-3'>
                    <For each={onViewAllProductsTable()}>{(product, index) =>
                        <div class='w-[90%] m-auto mb-[40px] rounded-xl bg-gray-300' onClick={() => { setSkuClicked(product) }}>
                            <div class='h-[200px] w-[95%] my-[2.5%] bg-white m-auto flex rounded-xl' >
                                <img class='h-[90%] m-auto ' src={product.img} alt="product img" />
                            </div>

                            <div class='text-center mt-[10px] mb-[5px]'>{product.name}</div>
                            <div class='text-center mb-[10px]'>{product.desc}</div>
                        </div>
                    }</For>
                </div>

                <div class='flex'>
                    <div class='m-auto flex'>
                        <div>
                            <input class='sr-only peer' type="radio" name="itemsCount" id="itemsCount1" value='4' onInput={changeView} />
                            <label class=' flex  w-[50px] h-[50px] border-solid border-[3px] border-black rounded-2xl text-[25px] peer-hover:bg-gray-100 peer-checked:bg-gray-300' htmlFor="itemsCount1"><div class='m-auto'>4</div> </label>
                        </div>


                        <input ref={chosen6} class='sr-only peer' type="radio" name="itemsCount" id="itemsCount2" value='6' onInput={changeView} checked />
                        <label class='ml-[20px] flex   w-[50px] h-[50px] border-solid border-[3px] border-black rounded-2xl text-[25px] peer-hover:bg-gray-100 peer-checked:bg-gray-300' htmlFor="itemsCount2"><div class='m-auto'>6</div> </label>
                    </div>

                    <div class='m-auto flex'>
                        <div>
                            <input class='sr-only peer' type="radio" name="galleryList" id="galleryList1" value='list' onInput={changeViewGalleryList} />
                            <label class=' flex px-[15px] h-[50px]   border-solid border-[3px] border-black rounded-2xl text-[25px] peer-hover:bg-gray-100 peer-checked:bg-gray-300' htmlFor="galleryList1"><div class='m-auto'>List</div> </label>
                        </div>


                        <input class='sr-only peer' type="radio" name="galleryList" id="galleryList2" value='gallery' onInput={changeViewGalleryList} checked />
                        <label class='ml-[20px] h-[50px] flex px-[15px]  border-solid border-[3px] border-black rounded-2xl text-[25px] peer-hover:bg-gray-100 peer-checked:bg-gray-300' htmlFor="galleryList2"><div class='m-auto'>Gallery</div> </label>
                    </div>

                </div>
                <br /><br />
            </Show>
        </div>

    );
}