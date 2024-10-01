import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Avatar,
  Button,
  Paper,
  TableHead,
} from "@mui/material";
import moment from "moment";
import { MdOutlineNoteAdd } from "react-icons/md";
import TooltipBtn from "../Buttons/TooltipBtn";

const OrderTable = ({ data, status }) => {
  return (
    <TableContainer
      //   component={Paper}
      style={{
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <div className="font-poppins text-white text-[1rem] font-bold">
                Buyer
              </div>
            </TableCell>
            <TableCell>
              <div className="font-poppins text-white text-[1rem] font-bold">
                Gig
              </div>
            </TableCell>
            <TableCell>
              <div className="font-poppins text-white text-[1rem] font-bold">
                Due On
              </div>
            </TableCell>
            <TableCell>
              <div className="font-poppins text-white text-[1rem] font-bold">
                Total
              </div>
            </TableCell>
            <TableCell>
              <div className="font-poppins text-white text-[1rem] font-bold">
                Notes
              </div>
            </TableCell>
            <TableCell>
              <div className="font-poppins text-white text-[1rem] font-bold">
                Status
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="overflow-auto">
              {/* Avatar Cell */}
              <TableCell>
                <div className="flex items-center gap-x-2">
                  <Avatar
                    src={item.avatar}
                    alt="Avatar"
                    sx={{ width: 48, height: 48 }}
                  />
                  <div className="text-white font-poppins font-bold">Nazma</div>
                </div>
              </TableCell>

              {/* Product Image Cell */}
              <TableCell>
                <div className="flex items-center gap-x-3 w-[220px]">
                  <img
                    src={item.productImage}
                    alt="Product"
                    style={{
                      width: "100px",
                      height: "60px",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="flex flex-col justify-center gap-y-2">
                    <div
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "200px",
                      }}
                      className="font-bold text-white"
                    >
                      I will Create Responsive and ahsvdhg
                    </div>
                    <div
                      className="text-gray-400 text-xs px-1"
                      style={{
                        whiteSpace: "wrap",
                        maxWidth: "200px",
                      }}
                    >
                      I Will Create Responsive and Creative UI / UX Design
                    </div>
                  </div>
                </div>
              </TableCell>

              <TableCell
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                <div className="font-poppins flex items-center font-normal text-[1rem]">
                  {moment(item.due_on).format("DD MMM")}
                </div>
              </TableCell>
              {/* Price Cell */}
              <TableCell
                style={{
                  color: "#e91e63",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                ${item.total}
              </TableCell>

              {/* Button (+) Cell */}
              <TableCell align="center">
                <TooltipBtn />
              </TableCell>

              {/* Status Cell */}
              <TableCell>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#f3e5f5",
                    color: "#6a1b9a",
                    borderRadius: "20px",
                    padding: "5px 20px",
                    fontWeight: "bold",
                  }}
                >
                  {status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
