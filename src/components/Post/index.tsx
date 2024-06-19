interface postProps {
    label: string,
    value : string,
    onChange: any
}




const Post = ({label, value, onChange} : postProps) => {
    return(
        <section className="flex flex-col justify-start">
            <label>{label}</label>
            <textarea value={value} onChange={onChange} className=" w-96 rounded outline-none text-sm"/>
        </section>
        
    )
}

export default Post