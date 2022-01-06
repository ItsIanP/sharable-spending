import React from 'react';
import './ProfilePic.css'

const ProfilePic = () => {
    const upload = React.useRef(null);

    const imageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = upload;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    };


    return (
        <div>
            <div className="upload">
                <input type="file" accept="image/*" onChange={imageUpload} />
                <img ref={upload} alt="Upload a Profile Picture"/>
            </div>
        </div>
    );
};

export default ProfilePic;
