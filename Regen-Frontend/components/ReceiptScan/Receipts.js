import React, { useEffect, useState } from 'react';
import { uploadReceipt, getUserReceipts, editReceipt, deleteReceipt } from '../../services/receiptService';

const ReceiptsComponent = () => {
    const [receipts, setReceipts] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        fetchReceipts();
    }, []);

    const fetchReceipts = async () => {
        try {
            const data = await getUserReceipts();
            setReceipts(data.data); // Update state with fetched receipts
        } catch (error) {
            console.error('Error fetching receipts:', error);
        }
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]); // Set selected file for upload
    };

    const handleUpload = async () => {
        if (selectedFile) {
            try {
                const data = await uploadReceipt(selectedFile);
                console.log('Receipt uploaded:', data);
                fetchReceipts(); // Refresh receipts after upload
            } catch (error) {
                console.error('Error uploading receipt:', error);
            }
        }
    };

    const handleEdit = async (id) => {
        const updates = { approved: true }; // Example update
        try {
            const data = await editReceipt(id, updates);
            console.log('Receipt edited:', data);
            fetchReceipts(); // Refresh receipts after edit
        } catch (error) {
            console.error('Error editing receipt:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const data = await deleteReceipt(id);
            console.log('Receipt deleted:', data);
            fetchReceipts(); // Refresh receipts after delete
        } catch (error) {
            console.error('Error deleting receipt:', error);
        }
    };

    return (
        <div>
            <h1>User Receipts</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Receipt</button>

            <ul>
                {receipts.map(receipt => (
                    <li key={receipt._id}>
                        {receipt.name} 
                        <button onClick={() => handleEdit(receipt._id)}>Edit</button>
                        <button onClick={() => handleDelete(receipt._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReceiptsComponent;
