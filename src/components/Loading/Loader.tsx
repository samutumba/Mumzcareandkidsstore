import { Backdrop, CircularProgress } from "@mui/material"
import { useRecoilState, useRecoilValue } from "recoil"
import { loadingState } from "../../atoms"

export const Loader = () => {
 const loading = useRecoilValue(loadingState)
 return(<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={loading}
>
  <CircularProgress />
</Backdrop>)
}