import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { getallFormus, deleteFormu } from "../../service/api";
import CardB from "./CardB";

export default function AllFormu() {
  const [formus, setFormus] = useState([]);
  

  useEffect(() => {
    getFormus();
  }, []);

  const getFormus = async () => {
    const response = await getallFormus();
    setFormus(response.data);
  };

  const deleteData = async (id) => {
    await deleteFormu(id);
    getFormus();
  };

  return (
    <Container className="mt-5 d-flex flex-wrap gap-3 justify-content-center">
      {
        formus.map((formu) => <CardB key={formu._id} formu={formu} deleteData={deleteData}/>)
      }
    </Container>
  );
}
