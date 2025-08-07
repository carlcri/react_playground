import React, {useState, ChangeEvent} from "react";

interface FilterControlsProps{
    onFilterValues: (product_name: string)=>void
}

function FilterControls(props: FilterControlsProps){
    const [name, setName] = useState<string>('');

    const handleName = (event:ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    }
    props.onFilterValues(name);
    
    return(
        <>
            <h4>hello filter controls</h4>
            <input placeholder="ej, microfono" type="text" value={name} onChange={handleName}/>
        </>
    );
}

export default FilterControls;