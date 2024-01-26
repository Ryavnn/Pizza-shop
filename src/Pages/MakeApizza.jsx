import { useState } from "react"
import Navbar from "../Components/Navbar"
function MakeApizza(){
    const [isdropDownOpen, setDropDownOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [sizeOption, setSizeOption] = useState('')
    const [count , setCount] = useState(0)
    const [checkedItem, setCheckedItem] = useState({
        thick: false,
        thin: false
    })
    const toggleDropdown = ()=>{
        setDropDownOpen(!isdropDownOpen);
    }
    const handleSelection = (option) =>{
        setSelectedOption(option)
        setSizeOption(option)
        setDropDownOpen(false)
    }
    const handleOption = (e)=>{
        setSizeOption (e.target.value)
    }
    const handleBoxChange = (option) => {
        setCheckedItem((prevCheckedItems) => ({
          ...prevCheckedItems,
          [option]: !prevCheckedItems[option],
        }));
      };
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return(
        <div className="Make-a-piza">
            <Navbar />

            <form className="make-a-pizza" onSubmit={handleSubmit}>
                <h1>Make your Pizza</h1>
                {/*<span className="Size">*/}
                     <input 
                        type="text" 
                        name="size"
                        value={sizeOption}
                        onChange={handleOption}
                        onClick={toggleDropdown} 
                        placeholder="Select option"
                        readOnly/>

                     {
                        isdropDownOpen && (
                            <ul className="size-options">
                                <li className="option-list" onClick={()=>handleSelection("Small")}>Small</li>
                                <li className="option-list" onClick={()=>handleSelection("Medium")}>Medium</li>
                                <li className="option-list" onClick={()=>handleSelection("Large")}>Large</li>
                                <li className="option-list" onClick={()=>handleSelection("Extra Large")}>Extra large</li>
                            </ul>
                        )
                     }
                {/*</span>*/}
                <div className="quantity">
                        <button onClick={()=>setCount(prevCount => prevCount - 1)}>-</button>
                        <span className="quantity-count">{count}</span>
                        <button onClick={()=>setCount(prevCount => prevCount + 1)}>+</button>
                </div>
                <label>
                    <input type="checkbox"
                         name="thick"
                         checked= {checkedItem.thick}
                         onChange={() => handleBoxChange('thick')}
                    />
                    Thick
                </label>
                <label>
                    <input type="checkbox"
                        name="thin"
                        checked= {checkedItem.thin}
                        onChange={() => handleBoxChange('thin')}
                    />
                    Thin
                </label>
                <input type="text"/>
            </form>
        </div>
    )
}
export default MakeApizza