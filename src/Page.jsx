const Page = (props) =>{

    const {titulo, subtitulo} = props 

    console.log(props)
    return ( 
        <div>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <div>
            {props.children}
            </div>   
        </div>
    )
}
 
export default Page;

