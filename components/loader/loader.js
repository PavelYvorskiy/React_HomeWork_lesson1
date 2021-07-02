
const  template =`<div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                 `


export class Loader{
constructor(root){
    this.root = root;
    this.loader = document.createElement('div');
    this.loader.classList.add('lds-ring');
    this.loader.innerHTML = template;

}
startLoader(){
    this.root.appendChild(this.loader)
    return this;
}
stopLoader(){
    this.root.removeChild(this.loader)
    return this
}
}