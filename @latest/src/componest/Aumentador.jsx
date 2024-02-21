import { useState } from "react";

const Aumentador = ({setCuenta, cuenta}) => {
return (
    <button onClick={() => setCuenta(cuenta + 1)}>+</button>

)
};
export default Aumentador;
