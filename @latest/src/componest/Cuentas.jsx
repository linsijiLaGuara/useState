/* eslint-disable no-unused-vars */
import { useState } from "react";
import Aumentador from "./Aumentador";
const Cuenta = () => {
  const [cuenta, setCuenta] = useState(0);
  return (
    <>
      <ul>
        {cuenta}
        <Aumentador setCuenta={setCuenta} cuenta={cuenta}  />
      </ul>
    </>
  );
};
export default Cuenta;
