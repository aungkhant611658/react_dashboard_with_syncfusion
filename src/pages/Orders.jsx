import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

// import "./Orders.css";

const Orders = () => {
  const { currentMode } = useStateContext();

  const css = `
    .e-grid .e-headercell {
      background-color: #333;
      color: #fff;
    }

    .e-gridcontent .e-rowcell {
      background-color: #333;
      color: #fff;
    }

    .e-grid .e-rowcell:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-grid .e-detailrowcollapse:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-grid .e-detailrowexpand:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-grid .e-gridcontent .e-rowdragdrop:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-grid .e-gridheader .e-rowdragdrop:not(.e-editedbatchcell):not(.e-updatedtd),
    .e-grid .e-emptyrow:not(.e-editedbatchcell):not(.e-updatedtd) {
      color: white !important;
    }

    .e-grid td.e-active {
      background-color: #888484;
    }

    .e-grid .e-row:hover .e-rowcell{
        background-color: #6f6f6f !important;
    }
`;

  return (
    <div
      className="m-2 md:m-10 p-2 md:p-1 rounded-3xl"
      style={{ backgroundColor: currentMode === "Light" ? "white" : "#33373e" }}
    >
      {currentMode === "Dark" && <style>{css}</style>}
      <Header category="Page" title="Orders" />

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
