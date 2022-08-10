import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";


 function CSVLister() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      axios("/csvdata")
        .then((res) => {

          setData(res.data);
        })
        .catch((err) => console.log(err))
    }, []);
    
    const columns = [
        {
        
          columns: [
            {
              Header: "Name",
              accessor: "name"
            },
            {
                Header: 'Image',
                accessor: "link",
                Cell: tableProps => (

                    <img
                      src={tableProps.original.link}
                    width={60}
                      alt='Player'
                    />
                  )
            }

          
          ]
        }
      ]
    
    
    return (
      <div  >
        <h4 ><center>Kuehne Nagal Interview Task</center ></h4>
        <ReactTable
         columns={columns} 
         data={data}
         minRows={0}
         defaultPageSize={10}
         className="-striped -highlight"
         showPagination={true}
         resizable={true}
         filterable
         noDataText="Oops!! You seemed to be lost or might be unlucky. Try to reload page or come back later."

/>
      </div >
    );
   }
   
 export default CSVLister;