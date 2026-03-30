import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from "react-router-dom";
import "./Home.css";
import { useDispatch } from 'react-redux';
import { addToPaste, updateToPastes } from '../redux/pasteSlice';
import { useSelector } from 'react-redux';

const VeiwPaste = () => {

  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];
  return (
    <div>
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <input style={{color:"white",border:"2px solid grey",background:"black",borderRadius:"8px",width:"60%",fontFamily:"sans-serif"}}
        type='text'
        placeholder='Enter title here' 
        value={paste.title}
        disabled
        onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button
          style={{border:"2px solid grey"}}
          onClick={createPaste}
        >
          {
            pasteId ? "Update My Paste"
            : "Create My Paste"
          }

        </button> */}
    </div>
    <div>
      <textarea style={{minWidth:"500px",marginTop:"15px",border:"2px solid grey",borderRadius:"2px"}}
        value={paste.content}
        placeholder="enter content here"
        disabled
        onChange={(e) => setValue(e.target.value)}
        rows={20}
        />
    </div>
    </div>
  )
}

export default VeiwPaste