import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function SlideImage() {
    const [val, setVal] = useState(false);

    return (
        <div className="w-full h-screen bg-zinc-300 flex items-center justify-center">
            <div className="relative w-[25vw] h-[40vw] bg-zinc-100 rounded-md flex overflow-hidden">
                <img
                    className={`shrink-0 w-full h-full object-cover transition-transform duration-500 -translate-x-${!val ? '0' : 'full'}`}
                    src="/Images/img1.jpg"
                />
                <img
                    className={`shrink-0 w-full h-full object-cover transition-transform duration-500 -translate-x-${!val ? '0' : 'full'}`}
                    src="/Images/img2.jpg"
                />

                <span
                    onClick={() => setVal(() => !val)}
                    className="absolute w-16 h-16 bottom-5 left-1/2 -translate-x-1/2 border-2 border-zinc-100 bg-[#dadadab8] flex items-center justify-center rounded-full cursor-pointer"
                >
                    {val ? <IoIosArrowRoundBack size={"2.2em"} color="#fff" /> : <IoIosArrowRoundForward size={"2.2em"} color="#fff" />}
                </span>
            </div>
        </div>
    );
}

export default SlideImage;
