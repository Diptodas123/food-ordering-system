import React, { useEffect, useRef, useState } from 'react'
import "../Profile.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Box, Typography, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { tokens, useMode } from '../../Admin/theme';
import Avatar from '@mui/material/Avatar';
import { useUserContext } from "../../../Context/UserContext.js";
import app from '../../../firebase.js';

const ProfileMain = () => {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);
    const { user } = useUserContext();

    const [edit, setEdit] = useState(false);

    const [file, setFile] = useState({ image: "" });
    const [fileError, setFileError] = useState(false);
    const [filePercentage, setFilePercentage] = useState(0);

    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        password: "",
        conpassword: "",
    });

    useEffect(() => {
        if (file.image!== "") {
            handleFileUpload(file);
        }
        console.log(file);
    }, [file.image]);

    const fileRef = useRef(null);
    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePercentage(Math.round(progress));
        }, (error) => {
            setFileError(true);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                setFile({ image: downloadURL });
            });
        });
    }

    return (

        <>
            <Box className="profile-option-main-container"
                component="form"
                autoComplete='off'
                sx={{
                    '&.MuiTextField-root': {
                        m: 1,
                        width: '25ch'
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: `${colors.greenAccent[500]} !important`,
                        }
                    },
                    '& .Mui-focused fieldset': {
                        borderColor: `${colors.greenAccent[500]} !important`,
                    },
                    ' & label': {
                        color: `${colors.greenAccent[500]} !important`,
                    },
                    ' & label.Mui-focused': {
                        color: `${colors.greenAccent[600]} !important`,
                    },
                    display: 'flex',
                    height: '439px',
                    width: '100%',
                }}
            >

                <Box className='profile-option-main-form-left'
                    sx={{
                        height: '100%',
                        flex: 1,
                    }}
                >
                    <Box sx={{
                        marginTop: '30px',
                        marginLeft: '50px',
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                        {/* FORM LABEL */}
                        <Typography variant='h6'
                            sx={{
                                marginRight: '30px'
                            }}
                        >
                            Name:
                        </Typography>

                        {/* ROW 1 */}
                        <TextField
                            type='text'
                            id="profile-first-name"
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            onChange={edit ? handleOnChange : null}
                            value={formData.firstName}
                            required
                            sx={{
                                marginRight: '40px',
                            }}
                        />
                        <TextField
                            type='text'
                            id="profile-last-name"
                            name="lastName"
                            onChange={edit ? handleOnChange : null}
                            label="Last Name"
                            variant="outlined"
                            value={formData.lastName}
                            required
                        />
                    </Box>
                    <Box sx={{
                        marginTop: '30px',
                        marginLeft: '50px',
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                        {/* FORM LABEL */}
                        <Typography variant='h6'
                            sx={{
                                marginRight: '10px'
                            }}
                        >
                            Account:
                        </Typography>

                        {/* ROW 2 */}
                        <Box>
                            <TextField
                                type='number'
                                id="profile-contact"
                                label="Contact No."
                                name='phone'
                                variant="outlined"
                                onChange={edit ? handleOnChange : null}
                                value={formData.phone}
                                required
                                sx={{
                                    marginRight: '40px',
                                }}
                            />
                            <TextField
                                type='email'
                                id="profile-email"
                                name='email'
                                label="Email"
                                onChange={edit ? handleOnChange : null}
                                variant="outlined"
                                value={formData.email}
                                required
                            />
                        </Box>
                    </Box>

                    {/* ROW 3 */}
                    <Box sx={{
                        marginTop: '30px',
                        marginLeft: '50px',
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                        {/* FORM LABEL */}
                        <Typography variant='h6'
                            sx={{
                                marginRight: '10px'
                            }}
                        >
                            Address:
                        </Typography>
                        <Box>

                            <TextField
                                id="profile-address"
                                type='text'
                                variant="outlined"
                                multiline
                                rows={6}
                                required
                                sx={{
                                    width: '485px',
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                        </Box>
                    </Box>
                </Box>

                <Box className="profile-option-main-form-right"
                    sx={{
                        height: '100%',
                        flex: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <input type='file' accept='image/*' id='profile-image-input' ref={fileRef} hidden onChange={(e) => setFile(e.target.files[0])} />
                        <Avatar
                            onClick={() => fileRef.current.click()}
                            alt='User Main Image'
                            src={file.image || user.image}
                            sx={{
                                height: 200,
                                width: 200,
                                border: '2px solid ' + colors.greenAccent[500],
                            }}
                        />
                    </Box>

                    {/* SUBMIT BUTTON */}
                    <Box className="profile-option-main-form-button">
                        <Button
                            type='submit'
                            onClick={() => setEdit(!edit)}
                            variant="contained"
                            id='profile-option-main-submit-button'
                            sx={{
                                marginTop: '125px',
                                p: '12px 50px',
                            }}
                        >
                            {edit ? 'Save' : 'Edit'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProfileMain