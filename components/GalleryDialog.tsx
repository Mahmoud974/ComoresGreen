import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Galery from "./Galery";

export default function GalleryDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-black">Open</AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-[80vw] h-[80vh] max-w-none overflow-y-scroll">
        <Galery />
      </AlertDialogContent>
    </AlertDialog>
  );
}
