"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { DownloadIcon } from "lucide-react";
import useDownloader from "react-use-downloader";
import Image from "next/image";
import { mission, vision } from "@/images";

function TableWrapper() {
  const { download } = useDownloader();

  const fileUrl =
    "https://firebasestorage.googleapis.com/v0/b/frameimpacts-c9f47.appspot.com/o/PDF%2FRilum%20Foundation.pdf?alt=media&token=f6445a17-85c9-42cd-98dc-0d9e9f292357";
  const filename = "File.pdf";
  return (
    <div className="flex ">
      {/* <Button>Sort by ...</Button> */}
      <Table className="border border-gray-200 items-center">
        <TableCaption>PDF</TableCaption>
        <TableHeader>
          <TableRow className="flex justify-between ">
            <TableHead className="w-[100px] items-center">Images</TableHead>
            <TableHead className="w-[100px] items-center">File Name</TableHead>
            <TableHead className="text-right items-center">Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="flex justify-between items-center">
            <TableCell>
              <Image
                src={mission}
                alt="Image not found"
                width={100}
                height={100}
              />
            </TableCell>

            <TableCell className="font-medium">Pdf number one</TableCell>

            <TableCell className="text-right">
              {/* Dialog */}
              <Dialog>
                <DialogTrigger>
                  <Button variant="outline">Show more</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>PDF Number One</DialogTitle>
                    <DialogDescription className="flex flex-col items-center justify-center my-2">
                      <Image
                        src={mission}
                        alt="Image not found"
                        width={100}
                        height={100}
                        className="my-2"
                      />
                      <p>
                        {" "}
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </p>
                    </DialogDescription>
                    <Button onClick={() => download(fileUrl, filename)}>
                      <DownloadIcon />
                    </Button>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              {/* Dialog */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default TableWrapper;
