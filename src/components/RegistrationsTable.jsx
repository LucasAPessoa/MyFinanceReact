import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import AddButton from "./AddButton.jsx";


function RegistrationsTable() {

    const [addCategoryVisibility, setAddCategoryVisibility] = useState("hidden")
    const [name, setName] = useState("")
    const [type, setType] = useState("")

    const {categories, onAddCategoryClick} = useOutletContext()

    const debRef = useRef(null);
    const credRef = useRef(null);


    function handleChangeAddCategoryVisibility() {
        addCategoryVisibility === "hidden" ? setAddCategoryVisibility("") : setAddCategoryVisibility("hidden")
    }

    function handleSaveButtonClick() {
        if(!name.trim() || !name.trim()){
            alert("Preencha todos os campos!")
        } else {
            onAddCategoryClick(name, type)
            setName("")
            setType("")
            if (debRef.current) debRef.current.checked = false;
            if (credRef.current) credRef.current.checked = false;
            
        }}





    return(

        <div className="w-full h-max bg-background text-text border-text transition-color absolute ">
            <div className="flex justify-center">
                <table className="w-2/3 ">
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>   
                                <button onClick={()=> handleChangeAddCategoryVisibility()} className="w-36 text-center">aaaa</button>
                            </td>
                        </tr>
                        <tr>
                            <th className="w-20">ID</th>
                            <th className="w-auto">Nome</th>
                            <th className="w-auto">Btn1</th>
                            <th className="w-auto">Btn2</th>
                        </tr>
                        {categories.map(category => {
                
                            return(
                                <tr key={category.id} className="h-12 border-b-2 border-slate-400/10 ">
                                    <td className="w-20 h-8 text-center">{category.id}</td>
                                    <td className="w-max h-auto">{category.name}</td>
                                    <td className="w-36 text-center text-white">
                                        <AddButton  className="bg-blue-500">Btn 1</AddButton>
                                    </td>
                                    <td className="w-36  text-center text-white">
                                        <AddButton className="bg-red-600">Btn 2</AddButton>
                                    </td>
                                    
                                </tr>
                                
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>

            <div className= {`w-screen h-max absolute z-100 top-0 flex justify-center align-middle text-text text-xl ${addCategoryVisibility}`}>
                <div className="bg-background w-2/4 h-1/2 flex flex-col gap-2 text-center shadow-2xl rounded-xl border-2 border-slate-700"  >
                    <div className=" text-center relative">
                        <h2 className="text-2xl px-2 py-4 font-bold">Nova Categoria</h2>
                        <button onClick={()=> handleChangeAddCategoryVisibility()} className="absolute right-4 top-2 text-2xl font-medium">X</button>
                    </div>
                    <div>
                        <label htmlFor="name" className=" pr-4 text-text">Nome:</label>
                        <input  id="name" type="text" value={name} className="rounded-2xl  p-2 ps-4 h-8 text-black" onChange={(event) => {
                                    setName(event.target.value)
                                }} />
                    </div>
                    
                    <div key={type} className="flex justify-around ">
                        
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                ref={debRef}
                                name="option"
                                className="hidden peer"
                                value={"deb"}
                                checked={type === "deb"}
                                onChange={(event) => {
                                    setType(event.target.value)
                                    
                                }}
                            />
                            <div className="w-6 h-6 border-2 border-blue-500 rounded-full transition-colors duration-700 flex items-center justify-center peer-checked:border-8 ">
                            </div>
                            <span className="ml-2 text-text">Débito</span>
                        </label>

                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                ref={credRef}
                                name="option"
                                className="hidden peer"
                                value={"cred"}
                                checked={type === "cred"}
                                onChange={(event) => {
                                    setType(event.target.value)
                                    
                                }}
                            />
                            <div className="w-6 h-6 border-2 border-blue-500 rounded-full transition-colors duration-700 flex items-center justify-center peer-checked:border-8 ">
                            </div>
                            <span className="ml-2 text-text">Crédito</span>
                        </label>
                    </div>

                    <div>
                        <AddButton handleSaveButtonClick={handleSaveButtonClick} className="bg-blue-500"> Salvar</AddButton>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RegistrationsTable;