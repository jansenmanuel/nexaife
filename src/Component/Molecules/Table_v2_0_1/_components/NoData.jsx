import React from "react";
import { Icon } from "../../../Asset/Icons";
import "./no-data-style.scss";

const NoData = () => {
  return (
    <div className="no-data-container">
      <img src={Icon.NcDataTableEmpty} alt="bg-no-data" />
      <p className="no-data-text">Data Belum Tersedia</p>
      <p className="no-data-description">
        Silahkan lakukan transaksi terlebih dahulu untuk menambahkan data pada
        tabel
      </p>
    </div>
  );
};

export default NoData;
