export class ProductCard {
    constructor(root, data) {
        this.root = root;
        this.data = data;

        this.render()
    }
    static validate({ title, img, description }) {
        return title && img && description
    }
    render() {
        this.productCard = document.createElement('div');
        this.productCard.classList.add('productCard');
        this.productCard.id = this.data.id;

        const { title, description } = this.data;

        const template = `
        <img class="productCard__img" src="https://boring-fe.herokuapp.com/${this.data.img}" alt="">
        <div class="productCard__title">
           <h1>${title}</h1>
        </div>
        <div class="productCard__description"
           <p>${description}</p>
        </div>
        `
        this.productCard.innerHTML = template;
        this.root.append(this.productCard)
    }
}