import React, { Component } from 'react';

const Header = () => {
  
  const style = {
    backgroundColor: '#ddd',
    width: '100%',
    textAlign: 'center'
  }

  return (
    <table cellPadding="0" cellSpacing="0" style={style}>
      <tr>
        <td>
          <a href=""><img src="http://www.fotoregistro.com.br/img/fotoregistro/logo_fr.jpg" /></a>
        </td>
      </tr>
    </table>
  );
}

export default Header;