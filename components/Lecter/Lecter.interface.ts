import { Dispatch } from "react";

export default interface LecterProps {
  className?: string;
  onSubmit: Dispatch<string>;
  show: boolean;
  close: Dispatch<void>;
}
