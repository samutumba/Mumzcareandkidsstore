import { useRecoilState } from "recoil"
import { embedState } from "../../atoms"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
})

export const EmbedModal = () => {
  const [embed, setEmbed] = useRecoilState(embedState)

  return (<>
    <Dialog
      fullScreen
      open={embed.open}
      onClose={() => setEmbed({ ...embed, open: false })}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar className={`bg-[${embed.color}] font-p px-6 text-xl flex flex-row justify-between items-center`}>

          <h6 className="font-bold items-center flex flex-row">
            {embed.icon}
            {embed.title}
          </h6>
          <Button title="button" autoFocus color="inherit" onClick={() => setEmbed({ ...embed, open: false })}>
            <p className="font-p">Close</p>
          </Button>
        </Toolbar>
      </AppBar>
      <iframe
        src={embed.link}
        className="w-full h-full"
        title={embed.title}
        height="100%" width="100%"
        seamless
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        frameBorder="0" allowFullScreen
      ></iframe>
    </Dialog>
  </>)
}