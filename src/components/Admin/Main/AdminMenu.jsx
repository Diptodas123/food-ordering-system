import React, { useEffect, useState } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material"
import AdminTopbar from '../Global/AdminTopbar'
import AdminSidebar from '../Global/AdminSidebar'
import AdminHeader from '../Global/AdminHeader';
import "./AdminMainGlobal.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens, useMode } from '../theme'
import { DataGrid, GridToolbarFilterButton, GridToolbar, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import Stack from '@mui/material/Stack';

const AdminMenu = () => {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);
    const [foodItems, setFoodItems] = useState([]);

    const fetchMenu = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/restaurant/getAllFoodItems`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            const foodItems = data.foodItems.map(foodItems => ({
                ...foodItems,
                _id: foodItems?._id || "N/A",
                image: foodItems?.image || "N/A",
                name: foodItems?.name || "N/A",
                price: foodItems?.price || "N/A",
                cuisine: foodItems?.restaurant?.cuisine || "N/A",
                category: foodItems?.category || "N/A",
                restaurantName: foodItems?.restaurant?.name || "N/A",
                email: foodItems?.restaurant?.email || "N/A",
            }))
            setFoodItems(foodItems);
            console.log(foodItems);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMenu();
    }, [])


    const columns = [
        {
            field: "_id",
            headerName: "ID",
            width: 90,
        },

        {
            field: "image",
            headerName: "Avatar",
            width: 100,
            cellClassName: "photo-column-cell",
            renderCell: (params) => <img src={params.value}
                alt="User images"
                id="admin-user-images"
                style={{
                    width: "80px",
                    height: "80px",
                }}
            />,
        },

        {
            field: "name",
            headerName: "Food Name",
            flex: 1,
            cellClassName: "name-column-cell"
        },
        {
            field: "category",
            headerName: "Category",
            flex: 1,
            cellClassName: (params) => (params.value === "Veg" ? "veg-category" : "non-veg-category"),
        },
        {
            field: "price",
            headerName: "Price (₹)",
            flex: 1
        },
        {
            field: "restaurantName",
            headerName: "Restaurant",
            flex: 1
        },
        {
            field: "cuisine",
            headerName: "Cuisine",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email ID",
            flex: 1
        },

    ]


    const customToolbar = () => {
        return (
            <GridToolbarContainer>
                <GridToolbarFilterButton />
                <GridToolbarExport />
            </GridToolbarContainer>
        )
    }
    const customNoRowsOverlay = () => {
        return (
            <Stack height="100%"
                alignItems="center"
                justifyContent="center"
            >
                No Rows Available
            </Stack>
        )
    }



    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    {/* TOPBAR */}
                    <AdminTopbar />

                    {/* SIDEBAR */}
                    <AdminSidebar />

                    {/* CONTENT */}
                    <Box
                        m="5px 0 10px 5px"
                        ml="15rem"
                        mt='4.324rem'
                    >

                        <Box
                            display="flex"
                            justifyContent='space-between'
                            alignItems='center'>

                            <AdminHeader title="MENU" subtitle="Check The Menu" />
                        </Box>
                        <Box ml="1.3rem">
                            <DataGrid

                                sx={{
                                    border: "none",
                                    // ?change the style of the entire table
                                    "& .MuiDataGrid-root": {
                                        border: "none",
                                    },
                                    "& .MuiButtonBase-root": {
                                        color: "#7c7676 !important",
                                    },
                                    // ?change the style of the cells/rows in the table
                                    "& .MuiDataGrid-cell": {
                                        borderBottom: "1px solid #9d9999",
                                    },
                                    // ?change the style of the headers of the table
                                    "& .MuiDataGrid-columnHeaders": {
                                        backgroundColor: "#525352",
                                    },
                                    ".dark-mode & .MuiDataGrid-columnHeaders": {
                                        backgroundColor: "#525352",
                                    },
                                    // ?change style of the content in the table 
                                    "& .MuiDataGrid-virtualScroller": {
                                        backgroundColor: "white",
                                        color: "black"
                                    },
                                    ".dark-mode & .MuiDataGrid-virtualScroller": {
                                        backgroundColor: "#979797",
                                        color: "white"
                                    },
                                    // ?change style of the footer of the table
                                    "& .MuiDataGrid-footerContainer": {
                                        borderTop: "none",
                                        backgroundColor: "#525352",
                                    },
                                    ".dark-mode & .MuiDataGrid-footerContainer": {
                                        borderTop: "none",
                                        backgroundColor: "#525352",
                                    },
                                    // ?change color of the checkmark in checkbox on click
                                    "& .Mui-checked": {
                                        color: `${colors.greenAccent[500]} !important`,
                                    },
                                    // ?change the style of the toolbar above the table
                                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                        color: "#3da58a !important",
                                    },
                                }}
                                getRowId={(row) => row._id}
                                rows={foodItems}
                                columns={columns}
                                slots={{
                                    toolbar: customToolbar,
                                    noRowsOverlay: customNoRowsOverlay
                                }}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 6,
                                        },
                                    },
                                }}
                                pageSizeOptions={[6]}

                                // ?checkboxes
                                checkboxSelection

                                // ?to disable selection of rows on mouse click anywhere on the table
                                disableRowSelectionOnClick

                            />
                        </Box>
                    </Box>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}
export default AdminMenu;