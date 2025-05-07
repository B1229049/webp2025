import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { TextField, Container, Typography } from "@mui/material";
 
const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
 
  // 定義 DataGrid 欄位
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "title", headerName: "名稱", width: 250 },
    { field: "location", headerName: "地點", width: 250 },
    { field: "price", headerName: "票價", width: 150 },
  ];
 
  // 使用 useEffect 來呼叫 API
  useEffect(() => {
    const openUrl =
      "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
    axios
      .get(openUrl)
      .then((response) => {
        const dataset = response.data;
        const formattedData = dataset.map((data, index) => ({
          id: index + 1,
          title: data.title || "N/A",
          location: data.showInfo[0]?.location || "N/A",
          price: data.showInfo[0]?.price || "Free",
        }));
        setRows(formattedData);
        setFilteredRows(formattedData);
      })
      .catch((error) => {
        console.error("API 呼叫失敗: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
 
  // 搜尋功能
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    if (value === "") {
      setFilteredRows(rows);
    } else {
      setFilteredRows(
        rows.filter((row) =>
          row.title.toLowerCase().includes(value)
        )
      );
    }
  };
 
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        景點觀光資訊
      </Typography>
      <TextField
        fullWidth
        label="搜尋名稱..."
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "20px" }}
      />
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          loading={loading}
          rowsPerPageOptions={[10, 20, 50]}
          pagination
        />
      </div>
    </Container>
  );
};
 
export default DataTable;