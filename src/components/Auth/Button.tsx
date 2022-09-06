import { Modal } from "flowbite-react"
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from "recoil"
import { SignInForm } from "."
import { API } from "../../api/https"
import { authModalState, embedState, fetchUserState, loadingState, userState } from "../../atoms"

export const SignInButton = () => {
 const navigate = useNavigate()
 const [user, setUser] = useRecoilState(userState)
  const [open, setOpen] = useRecoilState(authModalState)
  const [fetchUser, setFetchUser] = useRecoilState(fetchUserState)
  const setLoading = useSetRecoilState(loadingState)

  const signOut = useCallback(() => {
   setLoading(true)
  API.logout().then(res => {
    toast(res.data.message, {
      icon: '👋'
    })
    setLoading(false)
    setFetchUser(!fetchUser)
  }).catch(err => {
    toast.error(err.response.data.message)
    setLoading(false)
  })

  navigate("/")
  
 }, [fetchUser])


 if(user){
  return (<>
  <button onClick={signOut}>
    <span className="text-rose hover:p-1 hover:font-bold cursor-pointer font-semibold"> 
      SIGN OUT 
    </span>
  </button>
  </>)
 }

 return (<>
    <button onClick={() => setOpen(true)}>
      <span className="text-rose hover:font-bold cursor-pointer font-semibold">
        SIGN IN
      </span>
    </button>
 </>)
}

export const SignInModal = () => {
  const [open, setOpen] = useRecoilState(authModalState)
  const [embed, setEmbed] = useRecoilState(embedState)
 
 return( <Modal
    show={open}
    size="md"
    popup={true}
    onClose={() => { setOpen(false) }}
  >
    <Modal.Header />
  <Modal.Body >
     <div>
       <SignInForm />
     </div>
    </Modal.Body>
  </Modal>)
}