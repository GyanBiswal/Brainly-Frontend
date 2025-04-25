import CrossIcon from "../icons/CrossIcon";
import Input from "../components/Input";
import { Button } from "./Button";

interface CreateContentModelProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateContentModel({ open, onClose }: CreateContentModelProps) {
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
                <Input
                    placeholder="Title"
                    onChange={(e) => {}}
                />
                <Input
                    placeholder="Link"
                    onChange={(e) => {}}
                />
                <Button variant="primary" text="Submit"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
