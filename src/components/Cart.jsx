const Cart = () =>{
    return ( 
        <>
         <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acción</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody id="items"></tbody>
            <tfoot>
              <tr id="footer">
                <th scope="row" colspan="5">Carrito vacío - Comience a comprar!</th>
              </tr>
            </tfoot>
          </table>
        </>
    )
}
 
export default Cart;