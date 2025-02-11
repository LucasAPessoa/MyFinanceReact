import clsx from "clsx";


function AddButton({ className, handleSaveButtonClick }) {


    return  <>
    
    <button onClick={()=>handleSaveButtonClick()} className={clsx("w-[6em] h-auto rounded-3xl px-2 py-1", className)}>Btn 1</button>
    
    </>
    }

export default AddButton;