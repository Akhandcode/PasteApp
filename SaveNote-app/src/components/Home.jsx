import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import "./Home.css";
import { useDispatch } from 'react-redux';
import { addToPaste, updateToPastes } from '../redux/pasteSlice';
import { useSelector } from 'react-redux';

const Home = () => {
    const [title,setTitle] = useState("");
    const [value,setValue] = useState('');
    const [searchParams,setSearch] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        if(pasteId)
        {
          const paste = allPastes.find((p) => p._id === pasteId);
          setTitle(paste.title);
          setValue(paste.content);
        }
      }, [pasteId, allPastes])

    function createPaste() {
      const paste = {
        title: title,
        content: value,
        _id: pasteId ||
             Date.now().toString(36),
             createdAt:new Date().toLocaleString(
              "en-IN", {
               day: "numeric",
               month: "short",
               year: "numeric",
               hour: "2-digit",
               minute: "2-digit"
      }),
      }

      if(pasteId)
      {
        dispatch(updateToPastes(paste));
      }
      else{
        dispatch(addToPaste(paste));
      }

      setTitle('');
      setValue('');
      setSearch('');
    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",width:"100%", gap:"30px"}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"90%", gap:"250px"}}>
        <input style={{color:"white", border:"1px solid white", background:"black", borderRadius:"8px", fontSize:"15px", width:"350px", height:"25px", fontFamily:"sans-serif", textAlign:"center", padding:"8px"}}
          type='text'
          placeholder='Enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          style={{color:"black", backgroundColor:"white", border:"1px solid #ccc", borderRadius:"8px", padding:"10px 16px", cursor:"pointer", minWidth:"180px"}}
          onClick={createPaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div style={{width:"100%"}}>
        <textarea style={{width:"100%", minHeight:"360px", border:"2px solid grey", borderRadius:"4px"}}
          value={value}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default Home