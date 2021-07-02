import { ProductCard } from "../productCard/productCard.js";
import { Loader } from "../loader/loader.js";

export class ProductList {
    constructor(root) {
        this.root = root;
        this.url = 'https://boring-fe.herokuapp.com/advertisments';
        this.fetchData()
    
    }
    fetchData() {
       const loader = new Loader(this.root)
       loader.startLoader();
        
        fetch(this.url).then((response) => {
            return response.json();
        })
            .then((data) => {
                loader.stopLoader();
                this.data = (Array.isArray(data) && data.length && data) || []
                this.renderSlide();
                this.renderSlides();
            })
    }
    renderSlide() {
        this.containerSlide = document.createElement('div');
        this.containerSlide.classList.add('containerSlides');

        this.container = document.createElement('div');
        this.container.classList.add('slide-show__slides');
        this.data.forEach(product => {
            const slide = document.createElement('div');
            slide.classList.add('slide-show__slide');
            if (ProductCard.validate(product)) {
                new ProductCard(slide, product)
                this.container.append(slide) 
            }
        });

        this.showText = document.createElement('div');
        this.showText.classList.add('showText');
        this.showText.textContent = 'show text';
        this.activedescription = this.container.querySelectorAll('.productCard__description');
        this.showText.addEventListener('click',()=>{
           this.activedescription.forEach((elem)=>{
               elem.classList.toggle('active')
           })
        }) 

        this.conteinerBtn = document.createElement('div');
        this.conteinerBtn.classList.add('conteinerBtn');
         this.prevBtn = document.createElement('button');
         this.prevBtn.classList.add('slide-show__control');
         this.prevBtn.textContent = '< prev'
         this.prevBtn.addEventListener('click',()=>{ this.showPrev()});

         this.nextBtn = document.createElement('button');
         this.nextBtn.classList.add('slide-show__control');
         this.nextBtn.textContent = 'next >'
         this.nextBtn.addEventListener('click',()=>{this.showNext() });
         this.conteinerBtn.append(this.prevBtn,this.nextBtn)
         this.containerSlide.append(this.container,this.showText,this.conteinerBtn)
  
        this.root.append(this.containerSlide)

    }

    showPrev(){
        this.stopSlide();
        this.decreaseIndex();
        this.startSlide();
    }
    showNext(){
        this.stopSlide();
        this.increaceIndex();
        this.startSlide();
    }
    renderSlides(){
        this.slideIdx = document.querySelectorAll('.slide-show__slide');
        this.activeSlideIndex = 0;
        this.startSlide = ()=>{
            this.slideIdx[this.activeSlideIndex].classList.add('active');
             };
        this.stopSlide =()=>{
              this.slideIdx[this.activeSlideIndex].classList.remove('active');
             };
        this.decreaseIndex = ()=>{
               if(this.activeSlideIndex -1 < 0){
                   this.activeSlideIndex = this.slideIdx.length -1;
               }
               else { this.activeSlideIndex -=1; }
           };
        this.increaceIndex = ()=>{
               if(this.activeSlideIndex +1 <this.slideIdx.length){
                   this.activeSlideIndex +=1
               }
               else{ this.activeSlideIndex = 0; }
           };
    }
}
