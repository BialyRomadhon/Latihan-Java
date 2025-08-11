class Order {

    #status = "Pending";

    get status() {
        return this.#status;
    }


    set status(newStatus) {
        if (newStatus === "Delivered" || newStatus === "Cancelled") {
            this.#status = newStatus;
            console.log(`Status berhasil diubah menjadi: ${newStatus}`);
        } else {
            console.log(`Gagal: Status "${newStatus}" tidak valid.`);
        }
    }
}


const order1 = new Order();
console.log(`Status awal: ${order1.status}`);

console.log("\nMengubah status menjadi 'Delivered':");
order1.status = "Delivered"; 
console.log(`Status sekarang: ${order1.status}`); 

console.log("\nMencoba mengubah status menjadi 'Shipped' (tidak valid):");
order1.status = "Shipped";
console.log(`Status sekarang: ${order1.status}`); 

console.log("\nMengubah status menjadi 'Cancelled':");
order1.status = "Cancelled";
console.log(`Status sekarang: ${order1.status}`);
