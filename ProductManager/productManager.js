class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(product) {
      const { code } = product;
  
      if (!this.isCodeUnique(code)) {
        console.log(`El código "${code}" ya está en uso. Intente con otro codigo.`);
        return;
      }
  
      if (!this.isValidProduct(product)) {
        console.log('Todos los campos del producto son obligatorios.');
        return;
      }
  
      const newProduct = {
        id: this.nextId++,
        ...product,
      };
  
      this.products.push(newProduct);
      console.log('Producto agregado exitosamente.');
    }
  
    isCodeUnique(code) {
      return !this.products.some(product => product.code === code);
    }
  
    isValidProduct(product) {
      return (
        product.title &&
        product.description &&
        product.price &&
        product.thumbnail &&
        product.code &&
        product.stock
      );
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (!product) {
        console.log('Producto no encontrado.');
      }
  
      return product;
    }
  }
  
  