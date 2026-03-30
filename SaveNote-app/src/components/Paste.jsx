import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast, { Toaster } from 'react-hot-toast';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch =useDispatch();

  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  
  return (
    <div>
      <input 
      type='search'
      placeholder='search-here'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"35px"}}>
        {
        filteredData.length > 0 ?
        filteredData.map((paste) => (
          <div style={{border:"2px solid black"}}>
          <div key={paste.id || paste.title}>
            {paste.title}
          </div>
          <div key={paste.id || paste.title}>
            {paste.content}
          </div>
          <div style={{display:"flex",flexDirection:"row",gap:"4px",justifyContent:"space-evenly"}}>
            <button style={{padding: "4px 10px", fontSize: "15px"}}>
              <a href={`/?pasteId=${paste?._id}`}>
              Edit
              </a>
            </button>
            <button style={{padding: "4px 10px", fontSize: "15px"}}>
              <a href={`/pastes/${paste?._id}`}>
              View
              </a>
            </button>
            <button style={{padding: "4px 10px", fontSize: "15px"}} onClick={() => handleDelete
              (paste?._id)}>
              Delete
            </button>
            <button style={{padding: "4px 10px", fontSize: "15px"}} onClick={() => {
              navigator.clipboard.writeText
              (paste?.content)
                toast.success("copied to clipboard")
            } }>
              Copy
            </button>
            <button style={{padding: "4px 10px", fontSize: "15px"}}>
              Share
            </button>
          </div>
          <div>
            {paste.createdAt}
          </div>
          </div>
        )) :
        <div>No pastes found.</div>
        }
      </div>
    </div>
  )
}

export default Paste