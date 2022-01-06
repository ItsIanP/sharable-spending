import React, {useState} from 'react';
import './ProfilePic.css'

const ProfilePic = () => {
    const upload = React.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React.useState(true)

    const imageUpload = e => {
        setShowPlaceholder(false)
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

    const Placeholder = () => (
        <img src='https://www.pngarts.com/files/10/Default-Profile-Picture-Free-PNG-Image.png'/>
    )
    return (
        <div>
            <div className="upload">
                <input type="file" accept="image/*" onChange={imageUpload}/>
                {showPlaceholder ? <Placeholder/> : null}
                <img ref={upload} alt="Default Profile Picture"/>
            </div>
        </div>
    );
};

export default ProfilePic;