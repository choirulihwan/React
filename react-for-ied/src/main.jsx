var React = require('react');
var ReactDOM = require('react-dom');
var InfoPanel = require('./components/InfoPanel.jsx');
var ImagePanel = require('./components/ImagePanel.jsx');
var Header = require('./components/Header.jsx');

ReactDOM.render(<Header 
  tanggal = "April 23, 2020 18:00:00" 
  judul = "Persiapan bulan Ramadhan" 
  gambar = "./img/masjid-haram.jpg"
  />, document.getElementById('header_ramadlon'));

ReactDOM.render(<Header 
   tanggal = "May 23, 2020 18:00:00" 
    judul = "Persiapan Idul Fitri" 
    gambar = "./img/masjid-nabawi.jpg"
    />, document.getElementById('header_iedulfitri'));

/*ReactDOM.render(<InfoPanel
  heading="Earnings"
  content="$ 320.19"
  background="rgba(110,220,110,0.5)"
  contentColor="white"/>, document.getElementById('earnings'));

ReactDOM.render(<InfoPanel
  size="col-xs-10 col-xs-offset-1"
  heading="Clicks"
  content="1145"/>, document.getElementById('clicks'));

ReactDOM.render(<InfoPanel
  heading="Impressions"
  content="346789"/>, document.getElementById('impressions'));

ReactDOM.render(<InfoPanel
  heading="Users"
  content="34689"/>, document.getElementById('users'));
*/

ReactDOM.render(<ImagePanel
  topPanel={true}
  imgSrc="img/ketupat.jpg"
  valueLeft=""
  valueMiddle="KETUPAT|Makanan khas idul Fitri"  
  valueRight=""/>, document.getElementById('imageinfo1'));

ReactDOM.render(<ImagePanel
  topPanel={true}
  imgSrc="img/kurma.jpg"
  valueLeft=""
  valueRight="KURMA|makanan ta'jil"
  valueMiddle="" />, document.getElementById('imageinfo2'))
