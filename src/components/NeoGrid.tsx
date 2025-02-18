import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { columnDefs } from "../constants/columnDef";
import { formattedData } from "../utils/formatters";
import data from "../near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const NeoGrid = (): JSX.Element => {

  const gridRef = useRef<AgGridReact>(null);

  const resetFiltersAndSorting = () => {
    if (gridRef.current) {
      const api = gridRef.current.api;
      api.setFilterModel(null);
      api.resetColumnState();
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <h1 style={{ marginRight: "15px" }}>Near-Earth Object Overview</h1>
        <button onClick={resetFiltersAndSorting} style={{ padding: "5px 10px", cursor: "pointer" }}>
          Clear Filters and Sorters
        </button>
      </div>
      <AgGridReact
        ref={gridRef}
        rowData={formattedData(data)}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
      />
    </div>
  );
};

export default NeoGrid;
