import "./pagar.css"

export const Pagar = () => {
    return (
        <>
            <div className="tarjeta">
                <div className="numeroTarjetaContainer">
                    <p id="numerosTarjeta" className="numerosTarjeta">xxxxxxxxxxxxxxxx</p>
                </div>
                <div className="inferior">
                    <div className="nombreTarjetaContainer">
                        <p id="nombreTarjeta" className="nombreTarjeta">pepito andres</p>
                    </div>
                    <div className="fechaTarjetaContainer">
                        <p id="fechaTarjeta" className="fechaTarjeta">00/00</p>
                    </div>
                    <div className="cvvTarjetaContainer">
                        <p id="cvvTarjeta" className="cvvTarjeta">000</p>
                    </div>
                </div>
            </div>
            <div>
                <input type="text" id="" />
            </div>
        </>
    )
}