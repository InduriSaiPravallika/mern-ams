import React from 'react';
import Button from '../../components/Button';

const Vehicle = () => {
    return ( 
        <div className="bg-white rounded-lg shadow-md">
            <h1 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">Vehicle Parking Details</h1>
            <div className="px-3 py-2">
            <table className="text-sm text-left md:text-md border-collapse table-auto w-full">
                    <thead>
                        <tr>
                            <th className="py-3 bg-green-500 text-white">S/N</th>
                            <th className="py-3 bg-green-500 text-white">Parking Number</th>
                            <th className="py-3 bg-green-500 text-white">Owner Name</th>
                            <th className="py-3 bg-green-500 text-white">Vehicle Reg Number</th>
                            <th className="py-3 bg-green-500 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3">1</td>
                            <td className="py-3">3243009894</td>
                            <td className="py-3">John</td>
                            <td className="py-3">DEl-55576</td>
                            <td className="py-3 space-x-4">
                                <Button text="View" />
                                <Button text="Print" />
                                <Button text="Delete" />
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3">2</td>
                            <td className="py-3">3243021894</td>
                            <td className="py-3">Sam</td>
                            <td className="py-3">DEl-55346</td>
                            <td className="py-3 space-x-4">
                                <Button text="view" />
                                <Button text="Print" />
                                <Button text="Delete" />
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3">3</td>
                            <td className="py-3">3243021814</td>
                            <td className="py-3">Jane</td>
                            <td className="py-3">DEl-58346</td>
                            <td className="py-3 space-x-4">
                                <Button text="View" />
                                <Button text="Print" />
                                <Button text="Delete" />
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            
        </div>
     );
}
 
export default Vehicle;