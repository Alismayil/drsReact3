import React, { useEffect, useState } from "react";
import axios from "axios";

function Text() {
  const [inform, setInform] = useState([]);
  useEffect(() => {
    const baseUrl = "http://localhost:3000/posts";
    const datalar = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}`
        );
        setInform(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    datalar();
  }, []);
  return (
    <>
      {inform &&
        inform.map((item) => 
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.author}</li>
           
          </ul>
        )}
    </>
  );
}

export default Text;
