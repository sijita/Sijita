import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';

export function Aside() {
    return (
        <aside>
            <ul className="d-flex flex-column px-3 fixed-bottom mb-0 d-none d-sm-block" style={{ listStyle: 'none', width: 0 }}>
            <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-30">
                <li className="my-4">
                    <a href="https://www.facebook.com/simon.jimeneztamayo/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 25 25" fill="none" stroke="#96a4b3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                </li>
            </XyzTransition>
            <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-25">
            <li className="my-4">
                <a href="https://api.whatsapp.com/send?phone=573193139280&text=Hola!%20Vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20una%20p%C3%A1gina." target="_blank" rel="noreferrer">
                    <svg xmlns='http://www.w3.org/2000/svg' width="25px" height="25px" className='ionicon' fill="#96a4b3" viewBox='0 0 512 512'><path d='M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z' fillRule='evenodd'/></svg>
                </a>
            </li>
            </XyzTransition>
            <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-20">
            <li className="my-4">
                <a href="https://www.instagram.com/simonjimenezt/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25" fill="none" stroke="#96a4b3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
            </li>
            </XyzTransition>
            <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-15">
            <li className="my-4">
                <a href="https://github.com/sijita" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25" fill="none" stroke="#96a4b3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </li>
            </XyzTransition>
            <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-10">
            <li>
                <hr width="2" size="100" className="mb-0" style={{ backgroundColor: '#BAFF29', marginLeft: '10px' }} />
            </li>
            </XyzTransition>
        </ul>
        </aside>
    )
}
