import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav()
let show = (data) => {
    console.log(data);  
    data.map((ele,index) => {
      let img = document.createElement("img");
      img.src = ele.image;
      img.setAttribute("class", "image")
      let title = document.createElement("h3");
      title.innerHTML = `Name: ${ele.title}`;
      title.setAttribute("class", "text")
      let price = document.createElement("p");
      price.innerHTML = `Price: ${ele.price}$`;
      price.setAttribute("class", "pri")
      let add = document.createElement("button");
      add.innerHTML = "+";
      add.addEventListener("click",()=>{
        console.log("click");
        cart[index].qty+=1;
        localStorage.setItem("cart", JSON.stringify(cart))
        window.location.reload();
      })
      let qty=document.createElement("p")
      qty.innerHTML=ele.qty
      let remove = document.createElement("button")
      remove.innerHTML = "-"
      remove.addEventListener("click",()=>{
        console.log(ele);
        let qty=cart[index].qty;
        if(qty==1){
          cart.splice(index,1);
          localStorage.setItem("cart",JSON.stringify(cart));
          window.location.reload()
        }
        else{
          cart[index].qty-=1;
          localStorage.setItem("cart",JSON.stringify(cart));
          window.location.reload()
        }
      })
      let qtydiv=document.createElement("div")
      qtydiv.append(add,qty,remove)
      qtydiv.setAttribute("class","warapper")
      let div = document.createElement("div")
      div.setAttribute("class","maindiv")
      div.append(img,title,price,qtydiv)
      document.getElementById("cart").append(div)
    });

  };    

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
show(cart)