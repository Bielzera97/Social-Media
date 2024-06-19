

interface titleProps {
        value : string;
        label : string;
        onChange : any        
    }

const Title = ({value, label, onChange} : titleProps) => {
    return(
        <section className="flex flex-col justify-start w-56">
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} className="text-black rounded outline-none "/>
        </section>
    )
}

export default Title