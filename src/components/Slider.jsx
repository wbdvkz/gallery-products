import { onMount, onCleanup, For } from 'solid-js'

export default function Slider({ pic }) {

    if (pic.length === 1) {
        return (
            <>

                <div class="carousel" data-carousel>
                    <ul data-slides>

                        <li class="slide" data-active>
                            <img src={pic[0]} alt="" />
                        </li>


                    </ul>
                </div>

            </>
        )
    }


    function butcl(button) {
        button = button.target
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active


        clearInterval(kliker)
        funkliker()
    }




    let kliker


    let btbt
    function funkliker() {


        return kliker = setInterval(() => { btbt.click() }, 5000);
    }

    onMount(() => {
        funkliker()
    })

    onCleanup(() => {
        clearInterval(kliker)
    });





    return (
        <>

            <div class="carousel" data-carousel>
                <button type='button' id='carbut' onClick={butcl} class="carousel-button prev" data-carousel-button="prev">‹</button>
                <button type='button' id='carbut' ref={btbt} onClick={butcl} class="carousel-button next" data-carousel-button="next">›</button>
                <ul data-slides>


                    <li class="slide" data-active>
                        <img src={pic[0]} alt="" />
                    </li>

                    <For each={pic.slice(1)}>{(ii, ind) =>
                        <li class="slide">
                            <img src={ii} alt="" />
                        </li>
                    }</For>
                </ul>
            </div>

        </>
    )
}

