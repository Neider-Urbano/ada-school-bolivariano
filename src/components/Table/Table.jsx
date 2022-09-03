import React, { useEffect,useState } from 'react'
import Modal from '../../components/Modal/Modal.jsx';
import {Th,Td} from "../../style-components/Table/style"

const Table = ({columns,dataRender,setRefreshChange}) => {
    const [idBooking,setIdBooking]=useState("");
    const [modalTrue,setModalTrue]=useState(false);

    const onClickDelete=(id)=>{
        setRefreshChange(id)
    }

    const onClickModal=(id)=>{
        setIdBooking(id)
        setModalTrue(true)
    }

    return (
        <div className="flex flex-col px-2 border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <h1 className="font-bold mb-3 mt-4 text-center">List of reserves</h1>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden max-h-[400px] overflow-y-auto">
                        <table className="min-w-full ">
                            <thead className="bg-white border-b">
                                <tr>
                                    {columns.map((column,key)=>{
                                        return <Th scope="col" key={key+1}>
                                                    {column}
                                                </Th>
                                     })}
                                        <Th scope="col">
                                            Actions
                                        </Th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataRender.length===0 && <tr><td>empty list</td></tr>}
                                {dataRender.length>0 && dataRender.map((data,key)=>{
                                    return <tr className="bg-gray-100 border-b" key={key+1}>
                                                <Td>{key+1}</Td>
                                                <Td>{data.date}</Td>
                                                <Td>{data.destiny}</Td>
                                                <Td className="flex">
                                                    <svg className="h-[15px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                        onClick={()=>{onClickDelete(data.id)}}>
                                                        <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/>
                                                    </svg>
                                                    <svg className="ml-5 h-[15px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                        onClick={()=>{onClickModal(data.id)}}
                                                    >
                                                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"/>
                                                    </svg>
                                                </Td> 
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            {modalTrue && <Modal idBooking={idBooking} setModalTrue={setModalTrue}/>}
        </div>
    )
}

export default Table