const ShowCase = ()=>{


    return(
        <section className=" grid grid-cols-2 gap-4 border rounded-xl border-zinc-50">
            <div className="bg-black-200 bg-opacity-15 grid-span-1 m-4 border rounded-lg border-slate-100 border-opacity-15">
            <div className="flex gap-2 p-4">
                <div className="text-white">
                    <div>logo</div>
                </div>
                <div className="text-white">
                    <div>title</div>
                </div>
            </div>
            <div className="px-4">
                <p>description</p>
            </div>
            {/* icons div */}
            <div className="flex justify-between px-4">
                {/* tech used & live project btn */}
                <div className="flex">
                    <h5 className="px-2">icon</h5>
                    <h5 className="px-2">icon</h5>
                    <h5 className="px-2">icon</h5>
                </div>
                <div>
                    <button>Check live site</button>
                </div>
            </div>

            {/* swiper arrows */}
            <div className="flex justify-between px-4">
                <div>
                    left
                </div>
                <div>
                    right
                </div>
            </div>
            </div>
            <div className="grid-span-1 m-4 border-2">
                <canvas>

                </canvas>
            </div>
        </section>
    )
}

export default ShowCase;