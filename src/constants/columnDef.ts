import { ColDef } from "ag-grid-community";

export const columnDefs: ColDef[] = [
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