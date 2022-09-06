import Item from "./Item"

const ItemList = ({listProducts}) =>{

    return (  
        <section className="items">    
        {listProducts.map(productos => <Item key={productos.id} productos={productos}/>)}
        </section>
    );
}
 
export default ItemList;