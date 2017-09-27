import React, { Component } from 'react';
import logo from './A3.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reserva tu asiento</h1>
        </header>
        <p className="App-intro">Completa los datos y reserva tu asiento.</p>

    <div className="col-md-12 col-xs-12 text-center">
      <center>
    <table>
        <tbody>
            <tr>
                <td className="disponible">
                    <p>01</p>
                </td>
                <td className="disponible">
                    <p>02</p>
                </td>
                <td className="disponible">
                    <p>03</p>
                </td>
                <td className="disponible">
                    <p>04</p>
                </td>
                <td className="disponible">
                    <p>05</p>
                </td>
            </tr>
            <tr>
                <td className="disponible">
                    <p>06</p>
                </td>
                <td className="disponible">
                    <p>07</p>
                </td>
                <td className="disponible">
                    <p>08</p>
                </td>
                <td className="disponible">
                    <p>09</p>
                </td>
                <td className="disponible">
                    <p>10</p>
                </td>
            </tr>
            <tr>
                <td className="disponible">
                    <p>11</p>
                </td>
                <td className="disponible">
                    <p>12</p>
                </td>
                <td className="disponible">
                    <p>13</p>
                </td>
                <td className="disponible">
                    <p>14</p>
                </td>
                <td className="disponible">
                    <p>15</p>
                </td>
            </tr>
            <tr>
                <td className="disponible">
                    <p>16</p>
                </td>
                <td className="disponible">
                    <p>17</p>
                </td>
                <td className="disponible">
                    <p>18</p>
                </td>
                <td className="disponible">
                    <p>19</p>
                </td>
                <td className="disponible">
                    <p>20</p>
                </td>
            </tr>
        </tbody>
    </table>
    </center>
    </div>
    <form action="">
          <p>Nombre: <input type="text" placeholder="Nombre" id="nombre" /></p>
          <p>DNI: <input type="text" placeholder="N° dni" id="tarjeta" /></p>
          <p>Asiento N° :<input type="text" placeholder="N° asiento" id="numeroAsiento" /></p>
          <p><input className="button button5" type="button" value="Reservar" id="comprar" /></p>
    </form>
    <p><hr lineColor="#b3b3b3" text="react-native" textColor="steelblue" /></p>


    <form action="">
      <p><input type="text" id="input" placeholder="N° asiento" /></p>
      <p><input className="button button5" type="button" value="Cancelar" id="cancelar"/>
        <input className="button button5" type="button" value="Buscar" id="informacion"/></p>
        
    </form>
    <div id="info">
        <h3>Pasajero buscado : </h3>
    </div>
      </div>
    );
  }
}

export default App;
