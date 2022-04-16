import BillInputDialog from './bill_input_dialog';
import './style.css'
export default function BillPage(){
    return(

        <>
        <div className="conatiner row">
        <h1>Bills</h1>
        <BillInputDialog/>

        </div>

        </>
    );
}