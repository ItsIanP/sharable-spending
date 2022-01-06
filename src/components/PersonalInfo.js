import React, {useState} from 'react';
import './PersonalInfo.css';

{/*Editable Inline Text - Following https://blog.logrocket.com/building-inline-editable-ui-in-react/*/}

const PersonalInfo = ({text, type, placeholder, children, ...props}) => {
    const [isEditing, setEditing] = useState(false);

    const handleKeyDown = (event, type) => {

    }
    return (
        <section {...props}>
            {isEditing ? (
                    <div onBlur={() => setEditing(false)} onKeyDown={e => handleKeyDown(e, type)}>
                        {children}
                    </div>
                ):
                (
                    <div onClick={() => setEditing(true)}>
          <span>
            {text || placeholder || "Editable content"}
          </span>
                    </div>
                )}
        </section>
    );
};

export default PersonalInfo;