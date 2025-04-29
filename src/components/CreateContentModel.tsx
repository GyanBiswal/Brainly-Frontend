import CrossIcon from "../icons/CrossIcon";
import Input from "../components/Input";
import { Button } from "./Button";
import { useRef, useState } from "react";
import axios from "axios";

interface CreateContentModelProps {
  open: boolean;
  onClose: () => void;
}

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Documents = "documents",
  Links = "links",
}

export default function CreateContentModel({ open, onClose }: CreateContentModelProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value?.trim();
    const link = linkRef.current?.value?.trim();
  
    if (!title || !link) {
      alert("Please fill in both Title and Link.");
      return;
    }
  
    const token = localStorage.getItem("token");
    console.log("Received token:", token);
    if (!token) {
      alert("You must be logged in to submit content.");
      return;
    }
  
    console.log("Sending POST request with Authorization header:", `Bearer ${token}`);
  
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/content",
        {
          title,
          link,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Content creation successful:", response);
      onClose(); // close the modal on success
    } catch (error: any) {
      console.error("Failed to create content:", error.response?.data || error.message);
  
      // Show a more detailed error message
      alert(error.response?.data?.message || "Something went wrong while submitting content.");
    }
  }
  

  return (
    <>
      {open && (
        <div className="w-screen h-screen bg-slate-500 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg relative w-96">
            <div className="flex justify-end mb-4">
              <button onClick={onClose}>
                <CrossIcon />
              </button>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <Input ref={titleRef} placeholder="Title" />
              <Input ref={linkRef} placeholder="Link" />
            </div>
            <div>
              <h1 className="flex justify-center mt-2">Select Type : </h1>
              <div className="flex justify-center gap-1 p-4">
                <Button
                  text="Youtube"
                  variant={type === ContentType.Youtube ? "primary" : "secondary"}
                  onClick={() => {
                    setType(ContentType.Youtube);
                  }}
                />
                <Button
                  text="Twitter"
                  variant={type === ContentType.Twitter ? "primary" : "secondary"}
                  onClick={() => {
                    setType(ContentType.Twitter);
                  }}
                />
                <Button
                  text="Documents"
                  variant={type === ContentType.Documents ? "primary" : "secondary"}
                  onClick={() => {
                    setType(ContentType.Documents);
                  }}
                />
                <Button
                  text="Links"
                  variant={type === ContentType.Links ? "primary" : "secondary"}
                  onClick={() => {
                    setType(ContentType.Links);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center p-2">
              <Button variant="primary" text="Submit" onClick={addContent} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
