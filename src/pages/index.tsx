import { IconQRcode } from "../components/Icons";
import QRcode from "../components/QRcode";


export default function Home() {
  return (
   <div className={`h-screen bg-gradient-to-r from-gray-100 to-gray-200`}>
     
    <div className="flex w-screen items-center flex-shrink-0 text-white mr-6 p-6 bg-slate-700 mb-2">
        {IconQRcode}
        <span className="font-semibold text-xl tracking-tight ml-2">Gerador de QR Code</span>
      </div>
     <div className="flex w-screen justify-center">
      <QRcode />

     </div>
    </div>
  )
}
