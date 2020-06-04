class Product{
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product){
       const productList = document.getElementById('product-list');
       const element = document.createElement('div');
       element.innerHTML= `
            <div class="card text-center mb-4"> 
            <div class="card-body">
            <strong>Product</strong>: ${product.name}
            <strong> Product Price </strong> ${product.price}
            <strong> Product Year </strong> ${product.year} 
            <a href="#" class="btn btn-danger" name="delete">Delete</a>

            </div>
            
            </div>
       `;

       productList.appendChild(element);
       this.resetForm();
    }

    resetForm() {
        document.getElementById('Product-form').reset();


        }

    deleteProduct(element){

        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfuly', 'info');
        }

    }

    showMessage(message, cssClass) {
      const div =  document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //Shoeing in DOM
      const container =  document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);

    }
}

//EVENTOS DEL DOM

document.getElementById('Product-form').addEventListener('submit', function(e) {
    const name =  document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();

    if(name === '' || price === '' || year === ''){
       return ui.showMessage('Complete Fields Please', 'danger');
    }
    ui.addProduct(product);
    //this.resetForm();
    ui.showMessage('Product added Successfuly', 'success');


e.preventDefault(); // cancela el refresco de la pagina con la funcion event o "e"


});

document.getElementById('product-list').addEventListener('click', function(e){

   const ui = new UI();
   ui.deleteProduct(e.target)
}


)