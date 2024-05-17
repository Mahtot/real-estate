import React from 'react';
import '../assets/css/Modal.css'; 
import logo from '../assets/imgs/logoYellow.png';
import pic1 from '../assets/imgs/house-1.jpg';
import pic2 from '../assets/imgs/house-2.jpg';
import pic3 from '../assets/imgs/house-3.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const style = {
  position: 'absolute',
  top: '90%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'auto'
};

const libraries = ['places'];
const mapContainerStyle = {
  width: '70vw',
  height: '50vh',
};
const center = {
  lat:13.474641, // default latitude
  lng: 39.450635, // default longitude
};

export default function Modalfunc({ isOpen, onClose, imageSrc, type, location }) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBQY3mzbE_A_NZ-215G_vgZ3bJKCGD5Dlg',
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} id="modal-box">
      <Typography>  
      <IoArrowBackCircleSharp onClick={onClose} id="close-modal" size={'3rem'}/>
      </Typography>
        <Typography id="modal-logo">
             <Link to='/'>
              <img src={logo} alt="logo" style={{ maxWidth: '100%' }} />
             </Link>
        </Typography>
      

        <div className='modal-img-cont'>
            <div id='fir'>
                <img src={imageSrc}
                     alt="house"/>
            </div>
            <div id='sec'>
               <div>
                 <img src={pic1}
                     alt="house"/>
               </div> 
               <div>
                 <img src={pic2}
                     alt="house"/>
               </div> 
            </div>
        </div>


        <div className='modal-desc'>
            <Typography id="modal-description" sx={{ mt: 2 }}>
                Located: adihawsi,  
                 price: 20,00 birr<br/>
                2 Bedrooms<br/>
                6km away from town<br/>
                <div  className='type' >
                     Available {type}
                </div>
                <Typography  >
                    <Link to='/contact' className='modal-contact'>Contact agent</Link>
                </Typography>

            </Typography>

            <div id="map">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={10}
                    center={center}
                    id="modal-map"
                >
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </div>
       
      </Box>
    </Modal>
  );
}
