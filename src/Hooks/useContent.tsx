import axios from "axios";
import { useEffect, useState } from "react";

export default function useContent() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3000/api/v1/auth/signin",{
        headers:{
            "Authorization": localStorage.getItem("token")
          }
      })
            .then((response) => {
                setContents(response.data.content)
            })
    
    }, [])
    return contents;
}
