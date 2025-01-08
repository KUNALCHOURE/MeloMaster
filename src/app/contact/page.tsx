import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default function page() {
  return (
    <div className='h-screen flex justify-center '>
           <div className='mt-20 flex flex-col justify-center items-center '>
              <p className='text-8xl'>Contact us</p>
              <p className='text-center'>We're here to help with any question about our courses programs,or events.Reach out and let us know how we can assist you in your musical journey</p>

              <form action="" className='mt-5 flex flex-col gap-10' >
              <TextField id="outlined-basic" label="Your Email address" variant="outlined" className=' rounded-xl bg-cyan-800'  sx={{ width: '500px' }}  />
              <TextField id="outlined-basic" label="Your Message" variant="outlined" className=' rounded-xl bg-cyan-800 '  sx={{ width: '500px', '& .MuiInputBase-root': { height: '200px' }, }} />
              <Button
            variant="contained"
            color="success"
            sx={{
              width: 'auto', // Ensure width adjusts naturally to content
              minWidth: 'auto', // Prevent any default minimum width
            }}
          >
            Send Message
            </Button>
              </form>
           </div>
    </div>
  )
}
