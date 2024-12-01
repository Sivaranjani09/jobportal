import React, { useEffect, useState } from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CompaniesTable = () => {
    const store = useSelector((store) => store);
  
  const {companies,searchCompanyByText} = useSelector(store => store.company);
  const [filterCompany,setFilterCompany] = useState(companies);
  const navigate = useNavigate();
  useEffect(()=>{
    const filteredCompany = companies.length>=0&&companies.filter((company)=>{
      if(!searchCompanyByText){
        return true
      };
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany);
  },[companies,searchCompanyByText])
//   if (!companies) {
//     return <span>Loading...</span>; // Display a loading message until companies are fetched
//   }
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered Companies</TableCaption>
        <TableHeader>
          <TableRow >
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
          companies.length<= 0 ? (
            <span>You haven't registered any company yet.</span>
          ) : (
            <>
              {
             filterCompany?.map((company) => {
                return (
                 
                    <TableRow key={company._id}>
                      <TableCell>
                        <Avatar>
                          <AvatarImage src="https://tse4.mm.bing.net/th?id=OIP.8OMFA9whxc7CqD12FW9D9QHaFj&pid=Api&P=0&h=180" />
                        </Avatar>
                      </TableCell>
                      <TableCell>{company.name}</TableCell>
                      <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                      <TableCell className="text-right cursor-pointer">
                        <Popover>
                          <PopoverTrigger>
                            <MoreHorizontal />
                          </PopoverTrigger>
                          <PopoverContent className="w-32">
                            <div onClick={()=>navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                              <Edit2 className="w-4" />
                              <span>Edit</span>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </TableCell>
                    </TableRow>
                
                );
              })}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
