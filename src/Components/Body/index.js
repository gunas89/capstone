import { useEffect, useState } from "react";
import { Header } from "../Header";
import CustomizedTables from "./Table";
import { UpdateModal } from "../Modal";
import { Confirmation } from "../ConfirmationDialog";

export const Body = () => {
  const [tableData, setTableData] = useState([]);   // enable this if integrate with API and disable below line
  // const [tableData, setTableData] = useState([...dummyData]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isNew, setIsNew] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const tableHeaders = [
    "Zip Code",
    "Type of Shipping",
    "Shipping Cost",
    "Delivery Duration",
    "Actions",
  ];
  const getlocationdetail = () => {
    setIsLoading(true)
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
    };
    fetch("http://172.172.241.64:9602/distances", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
        setIsLoading(false)
        console.log(data);
      })
      .catch((error) => {
        setIsLoading(false)
        console.error("There was an error!", error);
      });
  }
  useEffect(() => {
    getlocationdetail()
  }, []);
  const updateDetails = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
      selectedRow
    );

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://172.172.241.64:9602/upddistance/${selectedRow?.zipcode}`, requestOptions)
      .then(response => response.text())
      .then(result => getlocationdetail())
      .catch(error => console.log('error', error));

  }
  const createNew = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
      selectedRow
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://172.172.241.64:9602/createdistance", requestOptions)
      .then(response => response.text())
      .then(result => getlocationdetail())
      .catch(error => console.log('error', error));

  }
  const handleEdit = (row = {}, isNew = false) => {
    setModalOpen(true);
    setIsNew(isNew)
    isNew ? setSelectedRow({}) : setSelectedRow({ ...row });
  };
  const handleClose = (e, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    setModalOpen(false);
    setDialogOpen(false);
  };

  const handleDelete = (row) => {
    setDialogOpen(true);
    setSelectedRow(row);
  };
  const handleUpdate = (e) => {
    setSelectedRow({
      ...selectedRow,
      [e?.target?.name]: e?.target?.value,
    });
  };

  const handleSave = (isNew) => {
    isNew ? createNew() : updateDetails()
    setModalOpen(false);
  };

  const handleDailogDelete = () => {
    fetch("Delete URL", { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        getlocationdetail()
        // Write your logics and functions here, if you want to do something after deleting successfully.
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    setDialogOpen(false);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <Header
          title="Shipping Location Rule"
          customStyles={{
            background: "white",
            color: "black",
            fontWeight: "bold",
            height: 60,
            justifyContent: "space-between",
          }}
          hasButton={true}
          handleEdit={handleEdit}
        />
      </div>
      <CustomizedTables
        tableHeaders={tableHeaders}
        tableData={tableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        isLoading={isLoading}

      />
      <UpdateModal
        data={selectedRow}
        handleUpdate={handleUpdate}
        handleSave={handleSave}
        modalOpen={modalOpen}
        handleClose={handleClose}
        isNew={isNew}
      />
      <Confirmation
        dialogOpen={dialogOpen}
        handleClose={handleClose}
        handleDailogDelete={handleDailogDelete}
      />
    </div>
  );
};