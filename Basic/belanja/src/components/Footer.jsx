export default function Footer({ items }) {

    if (items.length === 0) {
      return (<footer className="stats">Daftar belanja masih kosong</footer>);
    }
  
    let total = items.length;
    let checkedItems = items.filter( (item) => item.checked).length;
    let percent = Math.round((checkedItems/total) * 100);
  
    return (
      <footer className="stats">Ada { total } barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percent}%)</footer>
    );
}