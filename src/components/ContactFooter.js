import React from 'react';
import customer from '../images/customer.svg'

function Footer(){
    

return(
    <div className="container-fluid">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
<div style={{backgroundColor:'#001529' ,padding:'50px',textAlign:'center'}} className="row justify-content-center">
  <br/>
   <div className="icon-customer col-2" >
   <img src={customer} alt="" height="100"/><br/><br/>
   <h4 className="footericon1">Customer Care</h4>
   </div>
   <div className="icon-customer col-4">
   <img src={customer} alt="" height="100"/><br/><br/>
   <h4 className="footericon1">Customer Care</h4>
   </div>
   <div className="icon-customer col-2">
   <img src={customer} alt="" height="100"/><br/><br/>
   <h4 className="footericon1">Customer Care</h4>
   </div>
   <br/>
</div>
<br/>
<p style={{ textAlign: 'center' }}>All rights received ©2021 Created by TicketEzy Dev Team</p>
    </div>
);
}

export default Footer;