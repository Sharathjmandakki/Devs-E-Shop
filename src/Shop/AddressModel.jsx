import React, { useState } from 'react'
import Sheet from 'react-modal-sheet'
export default function AddressModel(props) {
    const [isOpen, setOpen] = useState(props.bool);
    return (
        <>
            <button onClick={() => setOpen(true)}>Buy Now</button>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)} className='bg-gray-700'>
                <Sheet.Container className='mt-5 p-5 max-h-80'>
                    <Sheet.Header className='flex flex-wrap justify-between'>
                        <button type="submit" class="m-5 " onClick={() => setOpen(false)} ></button>
                        <button type="submit" class=" text-5xl font-bold">Chose any one to place order</button>
                        <button type="submit" class="  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800" onClick={() => setOpen(false)}>❌</button>
                    </Sheet.Header>
                    <Sheet.Content>
                        <div className='ml-10 mr-10 flex justify-between'>
                            <button type="submit" class="m-10 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cash On Dilavery</button>
                            <button type="submit" class="m-10 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay</button>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}
