import React from "react";
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'shortLink', headerName: 'Short link', width: 130},
    {field: 'originalLink', headerName: 'Original link', width: 130},
    {field: 'numberOfClicks', headerName: 'Number of clicks', width: 130}

];

const rows = [
    {id: 1, originalLink: 'Snow', shortLink: 'Jon', numberOfClicks: 35},
    {id: 2, originalLink: 'Lannister', shortLink: 'Cersei', numberOfClicks: 42},
    {id: 3, originalLink: 'Lannister', shortLink: 'Jaime', numberOfClicks: 45},
    {id: 4, originalLink: 'Stark', shortLink: 'Arya', numberOfClicks: 16},
    {id: 5, originalLink: 'Targaryen', shortLink: 'Daenerys', numberOfClicks: null},
    {id: 6, originalLink: 'Melisandre', shortLink: null, numberOfClicks: 150},
    {id: 7, originalLink: 'Clifford', shortLink: 'Ferrara', numberOfClicks: 44},
    {id: 8, originalLink: 'Frances', shortLink: 'Rossini', numberOfClicks: 36},
    {id: 9, originalLink: 'Roxie', shortLink: 'Harvey', numberOfClicks: 65},
];

function DataTable() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export function MainPage() {
    return (
        <div className="container mx-auto max-w-[760px] pt-5">
            <DataTable/>
        </div>

    )
}
