const Page = (props) =>{

    const {titulo, subtitulo} = props 

    return ( 
        <div>
            <h2 className="h2-general">{titulo}</h2>
            <h3>{subtitulo}</h3>
            <div>
            {props.children}
            </div>   
        </div>
    )
}
 
export default Page;

