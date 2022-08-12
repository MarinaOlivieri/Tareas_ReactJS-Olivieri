import Item from "./Item"

const ItemList = ({listProducts}) =>{

    console.log(listProducts)
    return (  
        <section className="items">    
        {listProducts.map(products => <Item key={products.id} products={products}/>)}
        </section>
    );
}
 
export default ItemList;