import { useState } from "react";

export default function Form({onAddItem}) {
    const [name, setName] = useState('');
    const [qty, setQty] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
      
      //jika nama kosong, langsung keluar dari fungsi
      if (!name) return;
      
      const newItem = { name, quantity:qty, checked:false, id: Date.now() };
      onAddItem(newItem);
  
      console.log(newItem);
      setName('');
      setQty(1);
    }
  
    //membuat array dinamis
    const quantity = [...Array(20)].map( (_, i) => (
      <option key={i + 1} value={i + 1}>{i +1}</option>
    ));
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
            {quantity}
          </select>
          <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Tambah</button>
      </form>
    );
  }