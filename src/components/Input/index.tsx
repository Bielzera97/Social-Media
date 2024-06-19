

interface inputProps {
        value : string;
        label : string;
        onChange : any        
    }

const Input = ({value, label, onChange} : inputProps) => {
    return(
        <>
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} className="text-black"/>
        </>
    )
}

export default Input