function Cart() {
const monsteraPrice = 8
const ivyPrice = 10
const flowerPrice = 15
return (<div>
    <h2>Panier</h2>
    <ul>
        <li>Montserra : {monsteraPrice}€</li>
        <li>Ivy : {ivyPrice}€</li>
        <li>Flower : {flowerPrice}€</li>
    </ul>
    Total : {monsteraPrice + ivyPrice + flowerPrice}
</div>)
}
export default Cart