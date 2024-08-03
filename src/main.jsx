import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

$(window).on('scroll', function(){
  if($(window).scrollTop() > 50){
    $('nav.navbar').css({'padding-block': '10px'});
  }
  else{
    $('nav.navbar').css({'padding-block': '25px'});
  }
})

// $(document).ready(function() {
//   $('nav + *').css({'margin-top': `${$('nav.navbar').outerHeight()}px`});
// });