import { useState } from "react"
import { saveAs } from 'file-saver';
import { IconDelete, IconDownload, IconNewQR } from "./Icons";

export default function QRcode () {
    const [link, setLink] = useState('')
    const [qrcode, setQrcode] = useState('')
    const [nome, setNome] = useState('')

    function geraQRCode(){
        setQrcode("https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" + link)
        setNome("qrcode_"+ link);
    }

    function download() {
        let img = document.getElementById('imageQRCode') as HTMLImageElement;
        let path = img.src;
        let arq = "qrcode_" + link + ".png";
        saveAs(path, arq); 
    }

    return(
        <div className="w-5/6 md:max-w-2xl">
            <div className="flex items-center border-b border-cyan-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                       type="text" onChange={(e: any)=> setLink(e.target.value)} aria-label="Full name" placeholder="Link" />
                <button onClick={geraQRCode} className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-sm border-4 text-white py-1 px-2 rounded-md" type="button">
                    {IconNewQR}
                </button>
            </div>

            {nome ? (
                <div className="m-4">
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-2/3 rounded-md" id="imageQRCode" src={qrcode}/>
                        <p className="text-gray-600 text-xs italic mb-4 mt-2">
                            {nome}
                        </p>
                        <div className="flex">
                            <button className={`
                                flex-shrink-0 bg-emerald-500 hover:bg-emerald-700 border-emerald-500 hover:border-emerald-700 
                                text-sm border-4 text-white py-1 px-2 rounded mr-2
                            `} onClick={download} type="button">{IconDownload}</button>

                            <button className={`
                                flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 
                                text-sm border-4 text-white py-1 px-2 rounded
                            `} onClick={() => {
                                setQrcode('')
                                setNome('')
                            }} type="button">{IconDelete}</button>
                        </div>
                    </div>
                </div>
            ) : false}
        </div>
    )
}