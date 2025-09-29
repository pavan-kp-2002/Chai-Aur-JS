const inventory = {
    items: {},

    addItem(name, qty){
        if(this.items[name]){
            this.items[name] += qty;
        }else {
            this.items[name] = qty
        }
    },

    removeItem: function(name, qty){
        if(this.items[name]){
            this.items[name] -= qty;
            if(this.items[name] < 0){
            delete this.items[name];
            }
        }else{
            console.log(`${name} does not exist in the inventory.`);
        }
    },

    listItems(){
        for(let item in this.items){
            console.log(`${item}: ${this.items[item]}`);
        }
    }
};

inventory.addItem("Bananna", 20);
inventory.addItem("Bananna", 5)
inventory.addItem("Apple", 5);
inventory.listItems();
inventory.removeItem("Apple", 6);
inventory.listItems();