
<script src="https://checkout.tebex.io/api/checkout.js"></script>

<script>
/* ✅ SINGLE ITEM BUY */
function buyNow(id){
  Tebex.checkout.open({
    ident: id,
    origin: window.location.origin
  });
}

/* ✅ CART CHECKOUT */
function checkoutCart(){
  if(cart.length > 0){
    Tebex.checkout.open({
      ident: cart[0].id,   // buys first item (your current system)
      origin: window.location.origin
    });
  } else {
    alert("Cart is empty!");
  }
}
</script>
