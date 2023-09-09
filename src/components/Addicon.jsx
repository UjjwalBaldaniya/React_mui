import React from 'react'
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TagFacesIcon from '@mui/icons-material/TagFaces';





const Addicon = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <IconButton aria-label="delete" sx={{ position: 'fixed', bottom: '10px', left: '10px' }}>
                <AddCircleIcon color='primary' onClick={() => setOpen(true)} />
            </IconButton>

            <Box>
                <Dialog

                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                >
                    <Box sx={{ width: '400px', height: '280px', textAlign: "center", mt: '10px' }} >
                        <Typography variant="h5" fontWeight={600}>
                            Create Post
                        </Typography>

                        <Stack direction="row" spacing={2} ml={2} mt={1}>
                            <Avatar sx={{ width: '30px', height: '30px' }} alt="Ujjwal Baldaniya" src="https://i.pravatar.cc/300" />
                            <Typography variant='h6' >
                                Ujjwal
                            </Typography>
                        </Stack>
                        <TextField
                            sx={{ width: '100%', p: "10px 20px" }}
                            id="standard-multiline-static"
                            // label="Multiline"
                            multiline
                            rows={3}
                            defaultValue="What's on your mind?"
                            variant="standard"
                        />
                        <Stack direction="row" spacing={2} ml={2} mt={1}>
                            <TagFacesIcon color='primary' />
                        </Stack>
                    </Box>
                </Dialog>
            </Box>
        </>
    )
}

export default Addicon