import React from 'react';

export const ContactForm = () => {
    return <div className='mt-16'>
        <div className='w-1/2 mx-auto'>
            <div className="block shadow-yellow-500 p-10 rounded-lg shadow-lg max-w-md">
                <form>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block                 w-full                 px-3                 py-1.5                 text-base                 font-normal                 text-gray-700                 bg-white bg-clip-padding                 border border-solid border-gray-300                 rounded                 transition                 ease-in-out                 m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput7"
                            placeholder="Name" />
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput8"
                            placeholder="Email address" />
                    </div>
                    <div className="form-group mb-6">
                        <textarea
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
                            id="exampleFormControlTextarea13"
                            rows={3}
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button type="submit" className=" w-full      px-6      py-2.5      bg-yellow-600      text-white      font-medium      text-xs      leading-tight uppercase rounded      shadow-md      hover:bg-yellow-700 hover:shadow-lg      focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                </form>
            </div>
        </div>
    </div>;
};
