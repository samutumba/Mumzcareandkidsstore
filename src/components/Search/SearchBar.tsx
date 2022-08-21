import { useCallback, useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { searchState } from "../../atoms"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const SearchBar = () => {

 const [search, setSearch] = useRecoilState(searchState)
   const {
    transcript,
    finalTranscript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript
 } = useSpeechRecognition();
 
 const [input, setInput] = useState(search.text ? search.text : "")
 const [hearing, setHearing] = useState(false)

 const setNewInput = useCallback((value?: string) => {
  setInput(value ? value : "")
  setText(value)
 }, [input, setInput, search])


 const setText = useCallback((value?: string) => {
    
     setSearch({ ...search, text: value })
 }, [search,setSearch])

 const listen = useCallback(async () => {

  if (hearing) {
   setHearing(false);
   SpeechRecognition.stopListening()
   
   return;
  }
  setHearing(true)
  await SpeechRecognition.startListening({ continuous: true })
  
  return;
  
 }, [ setNewInput, resetTranscript, hearing, setHearing])

 useEffect(() => {
  if (finalTranscript !== "") {
   setNewInput(finalTranscript)
   resetTranscript()
   SpeechRecognition.stopListening()
  }
 }, [finalTranscript])
 
 return (<div className="w-full max-w-3xl mx-auto p-2">
<div className="flex items-center">   
    <label htmlFor="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" value={input} className=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-rose focus:border-rose block w-full pl-10 p-2.5 " placeholder="Search Pampers, Dresses, Car Seats..." onChange={(e) => setNewInput(e.target.value)} />
    {browserSupportsSpeechRecognition && hearing ?
     <button onClick={listen} type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
       <svg aria-hidden="true" className="w-4 h-4 text-white bg-rose rounded-full p-3 animate-ping hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
    </button>
     :
     <button onClick={listen} type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
     <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
    </button> }
    </div>

</div>

 </div>)
} 