import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

const Toggle = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="py-16 flex items-center justify-center gap-5">
            <div className=''>
                <h2 className='font-extrabold'>Job Seeker</h2>
            </div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
            <div>
                <h2 className='font-extrabold'>Job Poster</h2>
            </div>
        </div>
        // <div>
        //     <form class="tabber">
        //         <label for="t1">Pizza</label>
        //         <input id="t1" name="food" type="radio" checked />
        //         <label for="t2">Tacos</label>
        //         <input id="t2" name="food" type="radio" />
        //         <div class="blob"></div>
        //     </form>
        // </div>



    )
};

export default Toggle;