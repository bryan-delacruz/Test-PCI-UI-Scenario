import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const formatDate = (dateString: string): Date => {
  return new Date(dateString);
};

const formatPotentiallyHazardous = (param: any): string => {
  if (param === 'Y') return 'Yes';
  if (param === 'N') return 'No';
  return '';
};

const formattedData = data.map(item => ({
  ...item,
  discovery_date: formatDate(item.discovery_date),
  pha: formatPotentiallyHazardous(item.pha)
}));

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", sortable: true, filter: 'agTextColumnFilter' },
  { field: "discovery_date", headerName: "Discovery Date", sortable: true, filter: 'agDateColumnFilter' },
  { field: "h_mag", headerName: "H (mag)", sortable: true, filter: 'agNumberColumnFilter' },
  { field: "moid_au", headerName: "MOID (au)", sortable: true, filter: 'agNumberColumnFilter' },
  { field: "q_au_1", headerName: "q (au)", sortable: true, filter: 'agNumberColumnFilter' },
  { field: "q_au_2", headerName: "Q (au)", sortable: true, filter: 'agNumberColumnFilter' },
  { field: "period_yr", headerName: "Period (yr)", sortable: true, filter: 'agNumberColumnFilter' },
  { field: "i_deg", headerName: "Inclination (deg)", sortable: true, filter: 'agNumberColumnFilter' },
  { field: "pha", headerName: "Potentially Hazardous", sortable: true, filter: 'agTextColumnFilter' },
  { field: "orbit_class", headerName: "Orbit Class", sortable: true, filter: 'agTextColumnFilter', enableRowGroup: true },
];

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
        rowData={formattedData}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
      />
    </div>
  );
};

export default NeoGrid;
