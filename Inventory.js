/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from './Item.js';

class Inventory {
    constructor() {
        this.items = []; // Properti `items` untuk menyimpan daftar item
    }

    addItem(item) {
        // Menambahkan item baru ke dalam daftar items
        this.items.push(item);
    }

    removeItem(id) {
        // Menghapus item berdasarkan id yang diberikan
        this.items = this.items.filter(item => item.id !== id);
    }

    listItems() {
        // Mengembalikan string informasi detail barang dengan memanggil item.displayDetails() pada setiap item
        return this.items.map(item => item.displayDetails()).join('\n');
    }
}

// Jangan hapus kode di bawah ini!
export default Inventory;

