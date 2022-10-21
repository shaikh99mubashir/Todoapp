import { Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import companyLogo from '../Images/giticon.png'
import instaLogo from '../Images/insta.png'

const Invoice = () => {
  return (
    <div>
    <Grid container spacing={1} >
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItem: 'flex-start',
                gap: 0.5
              }}
            >
              <Typography variant={'subtitle1'} sx={{lineHeight:1}}>Shop Tel: 1755044</Typography>
              <Typography variant={'subtitle1'} sx={{lineHeight:1}} >Mobile: 98439193</Typography>
              <Typography variant={'subtitle1'} sx={{lineHeight:1}}>Jidhafs - Bahrain</Typography>
              <Typography variant={'subtitle1'} sx={{lineHeight:1}}>C.R.No. : 38303-1</Typography>
            </Box>
            <Box sx={{marginTop:3}}>
              <Typography variant={'subtitle1'}>No. 8827983</Typography>
            </Box>
            <Box sx={{mt:3}}>
            <Typography variant={'subtitle1'}>Mr./ Mrs.: Mubashir Moiz Arbaz</Typography>
              <Typography variant={'subtitle1'}>C.P.R: jdfkbfbjgjkfbkjbfgjgfbkjg</Typography>
              <Typography variant={'subtitle1'}>Adress :jkfvkjfvjbf  vkhf vbfkvb  djfkvn</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{alignItems:'center'}}>
          <Box style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
              <img src={companyLogo} alt="" width={50} height={50} style={{marginTop:5}}/>
              <br/>
              <Chip label="VAT Invoice" variant="outlined"  sx={{paddingLeft:1,  fontWeight:700, fontSize:17}}/>
          </Box>
          </Grid>
          <Grid item xs={4}>
          <Box>
             <Typography variant={'subtitle1'} sx={{lineHeight:1}} >Shop Tel: 1755044</Typography>
              <Typography variant={'subtitle1'} sx={{lineHeight:1}}>Mobile: 98439193</Typography>
              <Typography variant={'subtitle1'} sx={{lineHeight:1}}>Jidhafs - Bahrain</Typography>
              <Typography variant={'subtitle1'} sx={{lineHeight:1}}>C.R.No. : 38303-1</Typography>
              <Typography variant={'subtitle1'}>E-mail: abuali@gmail.com</Typography>
              <Typography variant={'subtitle1'}> <img src={instaLogo} alt="instalogo" /> Abuali_jewel </Typography>
              <Typography variant={'subtitle1'}>VAT No.:6436466396534</Typography>
          </Box>
          <Box sx={{marginTop:1}}>
              <Typography variant={'subtitle1'}>Date: 02/06/2000</Typography>
              <Typography variant={'subtitle1'}>Tel No.:6436466396534</Typography>
              <Typography variant={'subtitle1'}>9577975745436466396534</Typography>

          </Box>
          </Grid>
        </Grid>
      
    </div>
  )
}

export default Invoice
