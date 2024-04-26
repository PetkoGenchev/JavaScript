
function factory(library, orders){
    let products = [];

    for(const order of orders) {
        let product = order.template;

        for(const part of order.parts){
            product[part] = library[part]
        }

        products.push(product);
    }
    return products;
}


const library = {
    print: function () {
    console.log(`${this.name} is printing a page`);   
    },   
    scan: function () {    
    console.log(`${this.name} is scanning a document`);    
    },    
    play: function (artist, track) {    
    console.log(`${this.name} is playing '${track}' by ${artist}`);    
    },   
    };    

const orders = [    
    {    
        template: { name: 'ACME Printer'},    
        parts: ['print']   
    },   
    {   
        template: { name: 'Initech Scanner'},    
        parts: ['scan']    
    },    
    {   
        _template: { name: 'ComTron Copier' },    
        get template() {
            return this._template;
        },
        set template(value) {
            this._template = value;
        },
    parts: ['scan', 'print']    
    },    
    {   
        template: { name: 'BoomBox Stereo'},    
        parts: ['play']    
    }    
    ];    
    const products = factory(library, orders); 
    console.log(products);